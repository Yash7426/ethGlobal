// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {IRouterClient} from "@chainlink/contracts-ccip/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {Client} from "@chainlink/contracts-ccip/src/v0.8/ccip/libraries/Client.sol";
import {OwnerIsCreator} from "@chainlink/contracts-ccip/src/v0.8/shared/access/OwnerIsCreator.sol";

import {ICrossChainNameServiceLookup} from "./ICrossChainNameServiceLookup.sol";

/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */
contract Register  {
    struct Chain {
        uint64 chainSelector;
        address ccnsReceiverAddress;
        uint256 gasLimit;
    }

    IRouterClient public immutable i_router;
    ICrossChainNameServiceLookup public immutable i_lookup;

    Chain[] public s_chains;

    error InvalidRouter(address router);

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
    ) external  {
        s_chains.push(
            Chain({
                chainSelector: chainSelector,
                ccnsReceiverAddress: ccnsReceiverAddress,
                gasLimit: gasLimit
            })
        );
    }

    // Assumes address(this) has sufficient native asset.
event Log(string message);
event LogBytes(bytes data);

function register(string memory _name, address _address) external {
    emit Log("Starting registration");
    
    uint256 length = s_chains.length;
    require(length > 0, "No chains enabled");

    for (uint256 i; i < length; ) {
        Chain memory currentChain = s_chains[i];
        
        emit Log("Preparing message");
        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(currentChain.ccnsReceiverAddress),
            data: abi.encode(_name, _address),
            tokenAmounts: new Client.EVMTokenAmount[](0) ,
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV1({gasLimit: 500000}) // Adjust gas limit as needed
            ),
            feeToken: address(0)
        });

        uint256 fee = i_router.getFee(currentChain.chainSelector, message);
        require(address(this).balance >= fee, "Insufficient funds for cross-chain fee");

        emit Log("Sending message");

        try i_router.ccipSend{value: fee}(currentChain.chainSelector, message) {
            emit Log("Message sent successfully");
        } catch Error(string memory reason) {
            emit Log(string(abi.encodePacked("ccipSend failed: ", reason)));
            revert(string(abi.encodePacked("CCIP Send failed: ", reason)));
        } catch {
            emit Log("ccipSend failed: Unknown error");
            revert("CCIP Send failed: Unknown error");
        }

        unchecked {
            ++i;
        }
    }

    emit Log("Calling register on lookup");
    i_lookup.register(_name, _address);
    emit Log("Registration completed");
}

    function withdraw(address beneficiary) public  {
        uint256 amount = address(this).balance;
        (bool sent, ) = beneficiary.call{value: amount}("");
        require(sent, "Failed to withdraw");
    }
}
