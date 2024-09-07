/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface WhitelistHookInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "didReceiveAttestation(address,uint64,uint64,bytes)"
      | "didReceiveAttestation(address,uint64,uint64,address,uint256,bytes)"
      | "didReceiveRevocation(address,uint64,uint64,bytes)"
      | "didReceiveRevocation(address,uint64,uint64,address,uint256,bytes)"
      | "setWhitelist"
      | "whitelist"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "didReceiveAttestation(address,uint64,uint64,bytes)",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "didReceiveAttestation(address,uint64,uint64,address,uint256,bytes)",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "didReceiveRevocation(address,uint64,uint64,bytes)",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "didReceiveRevocation(address,uint64,uint64,address,uint256,bytes)",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelist",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "didReceiveAttestation(address,uint64,uint64,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "didReceiveAttestation(address,uint64,uint64,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "didReceiveRevocation(address,uint64,uint64,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "didReceiveRevocation(address,uint64,uint64,address,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
}

export interface WhitelistHook extends BaseContract {
  connect(runner?: ContractRunner | null): WhitelistHook;
  waitForDeployment(): Promise<this>;

  interface: WhitelistHookInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "didReceiveAttestation(address,uint64,uint64,bytes)": TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike
    ],
    [void],
    "payable"
  >;

  "didReceiveAttestation(address,uint64,uint64,address,uint256,bytes)": TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: AddressLike,
      arg4: BigNumberish,
      arg5: BytesLike
    ],
    [void],
    "view"
  >;

  "didReceiveRevocation(address,uint64,uint64,bytes)": TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike
    ],
    [void],
    "payable"
  >;

  "didReceiveRevocation(address,uint64,uint64,address,uint256,bytes)": TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: AddressLike,
      arg4: BigNumberish,
      arg5: BytesLike
    ],
    [void],
    "view"
  >;

  setWhitelist: TypedContractMethod<
    [attester: AddressLike, allowed: boolean],
    [void],
    "nonpayable"
  >;

  whitelist: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "didReceiveAttestation(address,uint64,uint64,bytes)"
  ): TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "didReceiveAttestation(address,uint64,uint64,address,uint256,bytes)"
  ): TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: AddressLike,
      arg4: BigNumberish,
      arg5: BytesLike
    ],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "didReceiveRevocation(address,uint64,uint64,bytes)"
  ): TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "didReceiveRevocation(address,uint64,uint64,address,uint256,bytes)"
  ): TypedContractMethod<
    [
      attester: AddressLike,
      arg1: BigNumberish,
      arg2: BigNumberish,
      arg3: AddressLike,
      arg4: BigNumberish,
      arg5: BytesLike
    ],
    [void],
    "view"
  >;
  getFunction(
    nameOrSignature: "setWhitelist"
  ): TypedContractMethod<
    [attester: AddressLike, allowed: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "whitelist"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  filters: {};
}
