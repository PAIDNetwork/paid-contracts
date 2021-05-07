/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface WorkflowStepInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "WorkflowStepCompleted(address,uint256,uint256,uint256)": EventFragment;
    "WorkflowStepStart(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "WorkflowStepCompleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WorkflowStepStart"): EventFragment;
}

export class WorkflowStep extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: WorkflowStepInterface;

  functions: {};

  callStatic: {};

  filters: {
    WorkflowStepCompleted(
      recipient: string | null,
      next: BigNumberish | null,
      actorId: BigNumberish | null,
      documentId: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      {
        recipient: string;
        next: BigNumber;
        actorId: BigNumber;
        documentId: BigNumber;
      }
    >;

    WorkflowStepStart(
      sender: string | null,
      current: BigNumberish | null,
      actorId: BigNumberish | null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { sender: string; current: BigNumber; actorId: BigNumber }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}