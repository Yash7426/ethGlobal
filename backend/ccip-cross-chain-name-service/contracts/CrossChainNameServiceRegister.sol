// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";

import {ICrossChainNameServiceLookup} from "./ICrossChainNameServiceLookup.sol";

contract CrossChainNameServiceRegister is OwnerIsCreator {

    struct Chain {
        uint64 chainSelector;
        address ccnsReceiverAddress;
        uint256 gasLimit;
    }

    IRouterClient public immutable i_router;
    ICrossChainNameServiceLookup public immutable i_lookup;

    Chain[] public s_chains;

    error InvalidRouter(address router);
    error CustomError(string  err);
    error CustomBytes(bytes  err);

    modifier onlyRouter() {
        if (msg.sender != address(i_router)) revert InvalidRouter(msg.sender);
        _;
    }

    constructor(address router, address lookup) {
        i_router = IRouterClient(router);
        i_lookup = ICrossChainNameServiceLookup(lookup);
    }
    
    receive() external payable {}

    function enableChain(
        uint64 chainSelector,
        address ccnsReceiverAddress,
        uint256 gasLimit
    ) external onlyOwner {
        s_chains.push(
            Chain({
                chainSelector: chainSelector,
                ccnsReceiverAddress: ccnsReceiverAddress,
                gasLimit: gasLimit
            })
        );
    }

    // Assumes address(this) has sufficient native asset.
    function register(string memory _name, address _address) external {
        uint256 length = s_chains.length;
        for (uint256 i; i < length; ) {
            Chain memory currentChain = s_chains[i];

            Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
                receiver: abi.encode(currentChain.ccnsReceiverAddress),
                data: abi.encode(_name, _address),
                tokenAmounts: new Client.EVMTokenAmount[](0),
                extraArgs: Client._argsToBytes(
                    Client.EVMExtraArgsV1({gasLimit: currentChain.gasLimit})
                ),
                feeToken: address(0) 
            });

           try i_router.ccipSend{
                value: i_router.getFee(currentChain.chainSelector, message)
            }(currentChain.chainSelector, message) {
             
            } catch Error(string memory reason) {
                revert CustomError(reason);
            } catch (bytes memory reason) {
                revert CustomBytes(reason);
            }

            unchecked {
                ++i;
            }
        }

        i_lookup.register(_name, _address);
    }

    function withdraw(address beneficiary) overide public onlyOwner {
        uint256 amount = address(this).balance;
        (bool sent, ) = beneficiary.call{value: amount}("");
        require(sent, "Failed to withdraw");
    }
}
