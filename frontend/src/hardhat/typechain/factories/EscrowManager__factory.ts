/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { EscrowManager } from "../EscrowManager";

export class EscrowManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EscrowManager> {
    return super.deploy(overrides || {}) as Promise<EscrowManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EscrowManager {
    return super.attach(address) as EscrowManager;
  }
  connect(signer: Signer): EscrowManager__factory {
    return super.connect(signer) as EscrowManager__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EscrowManager {
    return new Contract(address, _abi, signerOrProvider) as EscrowManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060a18061001e6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80633ccfd60b146041578063b689d5ac146041578063d0e30db0146041575b600080fd5b6047605b565b604051605291906060565b60405180910390f35b600190565b90151581526020019056fea264697066735822122061a260e0e14130399a724288d4aaa345b96b468d04af4da8edd16576cd51768264736f6c63430008000033";
