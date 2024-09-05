/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CrossChainNameServiceRegister,
  CrossChainNameServiceRegisterInterface,
} from "../../../contracts/register.sol/CrossChainNameServiceRegister";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "lookup",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "InvalidRouter",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferRequested",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "ccnsReceiverAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    name: "enableChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "i_lookup",
    outputs: [
      {
        internalType: "contract ICrossChainNameServiceLookup",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "i_router",
    outputs: [
      {
        internalType: "contract IRouterClient",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "s_chains",
    outputs: [
      {
        internalType: "uint64",
        name: "chainSelector",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "ccnsReceiverAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gasLimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620014933803806200149383398181016040528101906200003791906200033f565b338060008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000a390620003e7565b60405180910390fd5b816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000133576200013281620001a660201b60201c565b5b5050508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff168152505050506200047b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160362000217576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200020e9062000459565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200030782620002da565b9050919050565b6200031981620002fa565b81146200032557600080fd5b50565b60008151905062000339816200030e565b92915050565b60008060408385031215620003595762000358620002d5565b5b6000620003698582860162000328565b92505060206200037c8582860162000328565b9150509250929050565b600082825260208201905092915050565b7f43616e6e6f7420736574206f776e657220746f207a65726f0000000000000000600082015250565b6000620003cf60188362000386565b9150620003dc8262000397565b602082019050919050565b600060208201905081810360008301526200040281620003c0565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b60006200044160178362000386565b91506200044e8262000409565b602082019050919050565b60006020820190508181036000830152620004748162000432565b9050919050565b60805160a051610feb620004a86000396000818161021d01526106b20152600061036d0152610feb6000f3fe60806040526004361061008a5760003560e01c806379ba50971161005957806379ba5097146101525780638da5cb5b14610169578063b672356214610194578063e0b30b1f146101bd578063f2fde38b146101e857610091565b80631e59c5291461009657806351cff8d9146100bf578063581bdd16146100e85780635b54137d1461011357610091565b3661009157005b600080fd5b3480156100a257600080fd5b506100bd60048036038101906100b89190610a5c565b610211565b005b3480156100cb57600080fd5b506100e660048036038101906100e19190610ab8565b6102ad565b005b3480156100f457600080fd5b506100fd61036b565b60405161010a9190610b44565b60405180910390f35b34801561011f57600080fd5b5061013a60048036038101906101359190610b95565b61038f565b60405161014993929190610c03565b60405180910390f35b34801561015e57600080fd5b506101676103fd565b005b34801561017557600080fd5b5061017e610592565b60405161018b9190610c3a565b60405180910390f35b3480156101a057600080fd5b506101bb60048036038101906101b69190610c81565b6105bb565b005b3480156101c957600080fd5b506101d26106b0565b6040516101df9190610cf5565b60405180910390f35b3480156101f457600080fd5b5061020f600480360381019061020a9190610ab8565b6106d4565b005b600060028054905090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631e59c52984846040518363ffffffff1660e01b8152600401610276929190610d8f565b600060405180830381600087803b15801561029057600080fd5b505af11580156102a4573d6000803e3d6000fd5b50505050505050565b6102b56106e8565b600047905060008273ffffffffffffffffffffffffffffffffffffffff16826040516102e090610df0565b60006040518083038185875af1925050503d806000811461031d576040519150601f19603f3d011682016040523d82523d6000602084013e610322565b606091505b5050905080610366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035d90610e51565b60405180910390fd5b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6002818154811061039f57600080fd5b90600052602060002090600202016000915090508060000160009054906101000a900467ffffffffffffffff16908060000160089054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905083565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461048d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161048490610ebd565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055503373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6105c36106e8565b600260405180606001604052808567ffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff16815260200183815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555060208201518160000160086101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550604082015181600101555050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6106dc6106e8565b6106e581610778565b50565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610776576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076d90610f29565b60405180910390fd5b565b3373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107dd90610f95565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127860405160405180910390a350565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61090b826108c2565b810181811067ffffffffffffffff8211171561092a576109296108d3565b5b80604052505050565b600061093d6108a4565b90506109498282610902565b919050565b600067ffffffffffffffff821115610969576109686108d3565b5b610972826108c2565b9050602081019050919050565b82818337600083830152505050565b60006109a161099c8461094e565b610933565b9050828152602081018484840111156109bd576109bc6108bd565b5b6109c884828561097f565b509392505050565b600082601f8301126109e5576109e46108b8565b5b81356109f584826020860161098e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610a29826109fe565b9050919050565b610a3981610a1e565b8114610a4457600080fd5b50565b600081359050610a5681610a30565b92915050565b60008060408385031215610a7357610a726108ae565b5b600083013567ffffffffffffffff811115610a9157610a906108b3565b5b610a9d858286016109d0565b9250506020610aae85828601610a47565b9150509250929050565b600060208284031215610ace57610acd6108ae565b5b6000610adc84828501610a47565b91505092915050565b6000819050919050565b6000610b0a610b05610b00846109fe565b610ae5565b6109fe565b9050919050565b6000610b1c82610aef565b9050919050565b6000610b2e82610b11565b9050919050565b610b3e81610b23565b82525050565b6000602082019050610b596000830184610b35565b92915050565b6000819050919050565b610b7281610b5f565b8114610b7d57600080fd5b50565b600081359050610b8f81610b69565b92915050565b600060208284031215610bab57610baa6108ae565b5b6000610bb984828501610b80565b91505092915050565b600067ffffffffffffffff82169050919050565b610bdf81610bc2565b82525050565b610bee81610a1e565b82525050565b610bfd81610b5f565b82525050565b6000606082019050610c186000830186610bd6565b610c256020830185610be5565b610c326040830184610bf4565b949350505050565b6000602082019050610c4f6000830184610be5565b92915050565b610c5e81610bc2565b8114610c6957600080fd5b50565b600081359050610c7b81610c55565b92915050565b600080600060608486031215610c9a57610c996108ae565b5b6000610ca886828701610c6c565b9350506020610cb986828701610a47565b9250506040610cca86828701610b80565b9150509250925092565b6000610cdf82610b11565b9050919050565b610cef81610cd4565b82525050565b6000602082019050610d0a6000830184610ce6565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d4a578082015181840152602081019050610d2f565b60008484015250505050565b6000610d6182610d10565b610d6b8185610d1b565b9350610d7b818560208601610d2c565b610d84816108c2565b840191505092915050565b60006040820190508181036000830152610da98185610d56565b9050610db86020830184610be5565b9392505050565b600081905092915050565b50565b6000610dda600083610dbf565b9150610de582610dca565b600082019050919050565b6000610dfb82610dcd565b9150819050919050565b7f4661696c656420746f2077697468647261770000000000000000000000000000600082015250565b6000610e3b601283610d1b565b9150610e4682610e05565b602082019050919050565b60006020820190508181036000830152610e6a81610e2e565b9050919050565b7f4d7573742062652070726f706f736564206f776e657200000000000000000000600082015250565b6000610ea7601683610d1b565b9150610eb282610e71565b602082019050919050565b60006020820190508181036000830152610ed681610e9a565b9050919050565b7f4f6e6c792063616c6c61626c65206279206f776e657200000000000000000000600082015250565b6000610f13601683610d1b565b9150610f1e82610edd565b602082019050919050565b60006020820190508181036000830152610f4281610f06565b9050919050565b7f43616e6e6f74207472616e7366657220746f2073656c66000000000000000000600082015250565b6000610f7f601783610d1b565b9150610f8a82610f49565b602082019050919050565b60006020820190508181036000830152610fae81610f72565b905091905056fea26469706673582212200c37654055182808d6cdfa4d093746113bd1217579fee1f033aaa048b5478bf964736f6c63430008130033";

type CrossChainNameServiceRegisterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrossChainNameServiceRegisterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CrossChainNameServiceRegister__factory extends ContractFactory {
  constructor(...args: CrossChainNameServiceRegisterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    router: PromiseOrValue<string>,
    lookup: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CrossChainNameServiceRegister> {
    return super.deploy(
      router,
      lookup,
      overrides || {}
    ) as Promise<CrossChainNameServiceRegister>;
  }
  override getDeployTransaction(
    router: PromiseOrValue<string>,
    lookup: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(router, lookup, overrides || {});
  }
  override attach(address: string): CrossChainNameServiceRegister {
    return super.attach(address) as CrossChainNameServiceRegister;
  }
  override connect(signer: Signer): CrossChainNameServiceRegister__factory {
    return super.connect(signer) as CrossChainNameServiceRegister__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainNameServiceRegisterInterface {
    return new utils.Interface(_abi) as CrossChainNameServiceRegisterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainNameServiceRegister {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainNameServiceRegister;
  }
}
