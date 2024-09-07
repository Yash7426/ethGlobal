/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  WhitelistMananger,
  WhitelistManangerInterface,
} from "../../contracts/WhitelistMananger";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "UnauthorizedAttester",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "attester",
        type: "address",
      },
      {
        internalType: "bool",
        name: "allowed",
        type: "bool",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506102698061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806353d6fd591461003b5780639b19251a14610057575b600080fd5b6100556004803603810190610050919061019c565b610087565b005b610071600480360381019061006c91906101dc565b6100e1565b60405161007e9190610218565b60405180910390f35b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60006020528060005260406000206000915054906101000a900460ff1681565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061013182610106565b9050919050565b61014181610126565b811461014c57600080fd5b50565b60008135905061015e81610138565b92915050565b60008115159050919050565b61017981610164565b811461018457600080fd5b50565b60008135905061019681610170565b92915050565b600080604083850312156101b3576101b2610101565b5b60006101c18582860161014f565b92505060206101d285828601610187565b9150509250929050565b6000602082840312156101f2576101f1610101565b5b60006102008482850161014f565b91505092915050565b61021281610164565b82525050565b600060208201905061022d6000830184610209565b9291505056fea26469706673582212201ea3e098f5cebb4d6dce8cc44487bf0288d0c294b8f5053fbc2c3cda102e56b364736f6c634300081a0033";

type WhitelistManangerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WhitelistManangerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WhitelistMananger__factory extends ContractFactory {
  constructor(...args: WhitelistManangerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      WhitelistMananger & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WhitelistMananger__factory {
    return super.connect(runner) as WhitelistMananger__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WhitelistManangerInterface {
    return new Interface(_abi) as WhitelistManangerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): WhitelistMananger {
    return new Contract(address, _abi, runner) as unknown as WhitelistMananger;
  }
}
