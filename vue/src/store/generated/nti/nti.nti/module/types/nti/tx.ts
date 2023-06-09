/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "nti.nti";

export interface MsgReserveNftTransfer {
  creator: string;
  nftTokenId: string;
  nftSrcChain: number;
  nftSrcAddr: string;
  nftDestChain: number;
  nftDestAddr: string;
  ftChain: number;
  ftSrcAddr: string;
  ftDestAddr: string;
  fungibleToken: number;
  blockHeight: number;
}

export interface MsgReserveNftTransferResponse {}

export interface MsgTransferNft {
  creator: string;
  srcNftHash: string;
  srcChain: string;
  srcAddr: string;
  destNftHash: string;
  destChain: string;
  destAddr: string;
}

export interface MsgTransferNftResponse {}

export interface MsgChangeStatus {
  creator: string;
  reservedKey: string;
  to: number;
}

export interface MsgChangeStatusResponse {}

export interface MsgCreateNftMint {
  creator: string;
  reservedKey: string;
  transactionHash: string;
  tokenUri: string;
}

export interface MsgCreateNftMintResponse {}

export interface MsgUpdateNftMint {
  creator: string;
  reservedKey: string;
  transactionHash: string;
  tokenUri: string;
}

export interface MsgUpdateNftMintResponse {}

export interface MsgDeleteNftMint {
  creator: string;
  reservedKey: string;
}

export interface MsgDeleteNftMintResponse {}

export interface MsgAddNftMintResult {
  creator: string;
  reservedKey: string;
  tokenId: string;
}

export interface MsgAddNftMintResultResponse {}

const baseMsgReserveNftTransfer: object = {
  creator: "",
  nftTokenId: "",
  nftSrcChain: 0,
  nftSrcAddr: "",
  nftDestChain: 0,
  nftDestAddr: "",
  ftChain: 0,
  ftSrcAddr: "",
  ftDestAddr: "",
  fungibleToken: 0,
  blockHeight: 0,
};

export const MsgReserveNftTransfer = {
  encode(
    message: MsgReserveNftTransfer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.nftTokenId !== "") {
      writer.uint32(18).string(message.nftTokenId);
    }
    if (message.nftSrcChain !== 0) {
      writer.uint32(24).int32(message.nftSrcChain);
    }
    if (message.nftSrcAddr !== "") {
      writer.uint32(34).string(message.nftSrcAddr);
    }
    if (message.nftDestChain !== 0) {
      writer.uint32(40).int32(message.nftDestChain);
    }
    if (message.nftDestAddr !== "") {
      writer.uint32(50).string(message.nftDestAddr);
    }
    if (message.ftChain !== 0) {
      writer.uint32(56).int32(message.ftChain);
    }
    if (message.ftSrcAddr !== "") {
      writer.uint32(66).string(message.ftSrcAddr);
    }
    if (message.ftDestAddr !== "") {
      writer.uint32(74).string(message.ftDestAddr);
    }
    if (message.fungibleToken !== 0) {
      writer.uint32(80).int32(message.fungibleToken);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(88).int32(message.blockHeight);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgReserveNftTransfer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgReserveNftTransfer } as MsgReserveNftTransfer;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.nftTokenId = reader.string();
          break;
        case 3:
          message.nftSrcChain = reader.int32();
          break;
        case 4:
          message.nftSrcAddr = reader.string();
          break;
        case 5:
          message.nftDestChain = reader.int32();
          break;
        case 6:
          message.nftDestAddr = reader.string();
          break;
        case 7:
          message.ftChain = reader.int32();
          break;
        case 8:
          message.ftSrcAddr = reader.string();
          break;
        case 9:
          message.ftDestAddr = reader.string();
          break;
        case 10:
          message.fungibleToken = reader.int32();
          break;
        case 11:
          message.blockHeight = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReserveNftTransfer {
    const message = { ...baseMsgReserveNftTransfer } as MsgReserveNftTransfer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.nftTokenId !== undefined && object.nftTokenId !== null) {
      message.nftTokenId = String(object.nftTokenId);
    } else {
      message.nftTokenId = "";
    }
    if (object.nftSrcChain !== undefined && object.nftSrcChain !== null) {
      message.nftSrcChain = Number(object.nftSrcChain);
    } else {
      message.nftSrcChain = 0;
    }
    if (object.nftSrcAddr !== undefined && object.nftSrcAddr !== null) {
      message.nftSrcAddr = String(object.nftSrcAddr);
    } else {
      message.nftSrcAddr = "";
    }
    if (object.nftDestChain !== undefined && object.nftDestChain !== null) {
      message.nftDestChain = Number(object.nftDestChain);
    } else {
      message.nftDestChain = 0;
    }
    if (object.nftDestAddr !== undefined && object.nftDestAddr !== null) {
      message.nftDestAddr = String(object.nftDestAddr);
    } else {
      message.nftDestAddr = "";
    }
    if (object.ftChain !== undefined && object.ftChain !== null) {
      message.ftChain = Number(object.ftChain);
    } else {
      message.ftChain = 0;
    }
    if (object.ftSrcAddr !== undefined && object.ftSrcAddr !== null) {
      message.ftSrcAddr = String(object.ftSrcAddr);
    } else {
      message.ftSrcAddr = "";
    }
    if (object.ftDestAddr !== undefined && object.ftDestAddr !== null) {
      message.ftDestAddr = String(object.ftDestAddr);
    } else {
      message.ftDestAddr = "";
    }
    if (object.fungibleToken !== undefined && object.fungibleToken !== null) {
      message.fungibleToken = Number(object.fungibleToken);
    } else {
      message.fungibleToken = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = Number(object.blockHeight);
    } else {
      message.blockHeight = 0;
    }
    return message;
  },

  toJSON(message: MsgReserveNftTransfer): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.nftTokenId !== undefined && (obj.nftTokenId = message.nftTokenId);
    message.nftSrcChain !== undefined &&
      (obj.nftSrcChain = message.nftSrcChain);
    message.nftSrcAddr !== undefined && (obj.nftSrcAddr = message.nftSrcAddr);
    message.nftDestChain !== undefined &&
      (obj.nftDestChain = message.nftDestChain);
    message.nftDestAddr !== undefined &&
      (obj.nftDestAddr = message.nftDestAddr);
    message.ftChain !== undefined && (obj.ftChain = message.ftChain);
    message.ftSrcAddr !== undefined && (obj.ftSrcAddr = message.ftSrcAddr);
    message.ftDestAddr !== undefined && (obj.ftDestAddr = message.ftDestAddr);
    message.fungibleToken !== undefined &&
      (obj.fungibleToken = message.fungibleToken);
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgReserveNftTransfer>
  ): MsgReserveNftTransfer {
    const message = { ...baseMsgReserveNftTransfer } as MsgReserveNftTransfer;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.nftTokenId !== undefined && object.nftTokenId !== null) {
      message.nftTokenId = object.nftTokenId;
    } else {
      message.nftTokenId = "";
    }
    if (object.nftSrcChain !== undefined && object.nftSrcChain !== null) {
      message.nftSrcChain = object.nftSrcChain;
    } else {
      message.nftSrcChain = 0;
    }
    if (object.nftSrcAddr !== undefined && object.nftSrcAddr !== null) {
      message.nftSrcAddr = object.nftSrcAddr;
    } else {
      message.nftSrcAddr = "";
    }
    if (object.nftDestChain !== undefined && object.nftDestChain !== null) {
      message.nftDestChain = object.nftDestChain;
    } else {
      message.nftDestChain = 0;
    }
    if (object.nftDestAddr !== undefined && object.nftDestAddr !== null) {
      message.nftDestAddr = object.nftDestAddr;
    } else {
      message.nftDestAddr = "";
    }
    if (object.ftChain !== undefined && object.ftChain !== null) {
      message.ftChain = object.ftChain;
    } else {
      message.ftChain = 0;
    }
    if (object.ftSrcAddr !== undefined && object.ftSrcAddr !== null) {
      message.ftSrcAddr = object.ftSrcAddr;
    } else {
      message.ftSrcAddr = "";
    }
    if (object.ftDestAddr !== undefined && object.ftDestAddr !== null) {
      message.ftDestAddr = object.ftDestAddr;
    } else {
      message.ftDestAddr = "";
    }
    if (object.fungibleToken !== undefined && object.fungibleToken !== null) {
      message.fungibleToken = object.fungibleToken;
    } else {
      message.fungibleToken = 0;
    }
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = 0;
    }
    return message;
  },
};

const baseMsgReserveNftTransferResponse: object = {};

export const MsgReserveNftTransferResponse = {
  encode(
    _: MsgReserveNftTransferResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgReserveNftTransferResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgReserveNftTransferResponse,
    } as MsgReserveNftTransferResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgReserveNftTransferResponse {
    const message = {
      ...baseMsgReserveNftTransferResponse,
    } as MsgReserveNftTransferResponse;
    return message;
  },

  toJSON(_: MsgReserveNftTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgReserveNftTransferResponse>
  ): MsgReserveNftTransferResponse {
    const message = {
      ...baseMsgReserveNftTransferResponse,
    } as MsgReserveNftTransferResponse;
    return message;
  },
};

const baseMsgTransferNft: object = {
  creator: "",
  srcNftHash: "",
  srcChain: "",
  srcAddr: "",
  destNftHash: "",
  destChain: "",
  destAddr: "",
};

export const MsgTransferNft = {
  encode(message: MsgTransferNft, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.srcNftHash !== "") {
      writer.uint32(18).string(message.srcNftHash);
    }
    if (message.srcChain !== "") {
      writer.uint32(26).string(message.srcChain);
    }
    if (message.srcAddr !== "") {
      writer.uint32(34).string(message.srcAddr);
    }
    if (message.destNftHash !== "") {
      writer.uint32(42).string(message.destNftHash);
    }
    if (message.destChain !== "") {
      writer.uint32(50).string(message.destChain);
    }
    if (message.destAddr !== "") {
      writer.uint32(58).string(message.destAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNft {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNft } as MsgTransferNft;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.srcNftHash = reader.string();
          break;
        case 3:
          message.srcChain = reader.string();
          break;
        case 4:
          message.srcAddr = reader.string();
          break;
        case 5:
          message.destNftHash = reader.string();
          break;
        case 6:
          message.destChain = reader.string();
          break;
        case 7:
          message.destAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNft {
    const message = { ...baseMsgTransferNft } as MsgTransferNft;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.srcNftHash !== undefined && object.srcNftHash !== null) {
      message.srcNftHash = String(object.srcNftHash);
    } else {
      message.srcNftHash = "";
    }
    if (object.srcChain !== undefined && object.srcChain !== null) {
      message.srcChain = String(object.srcChain);
    } else {
      message.srcChain = "";
    }
    if (object.srcAddr !== undefined && object.srcAddr !== null) {
      message.srcAddr = String(object.srcAddr);
    } else {
      message.srcAddr = "";
    }
    if (object.destNftHash !== undefined && object.destNftHash !== null) {
      message.destNftHash = String(object.destNftHash);
    } else {
      message.destNftHash = "";
    }
    if (object.destChain !== undefined && object.destChain !== null) {
      message.destChain = String(object.destChain);
    } else {
      message.destChain = "";
    }
    if (object.destAddr !== undefined && object.destAddr !== null) {
      message.destAddr = String(object.destAddr);
    } else {
      message.destAddr = "";
    }
    return message;
  },

  toJSON(message: MsgTransferNft): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.srcNftHash !== undefined && (obj.srcNftHash = message.srcNftHash);
    message.srcChain !== undefined && (obj.srcChain = message.srcChain);
    message.srcAddr !== undefined && (obj.srcAddr = message.srcAddr);
    message.destNftHash !== undefined &&
      (obj.destNftHash = message.destNftHash);
    message.destChain !== undefined && (obj.destChain = message.destChain);
    message.destAddr !== undefined && (obj.destAddr = message.destAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferNft>): MsgTransferNft {
    const message = { ...baseMsgTransferNft } as MsgTransferNft;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.srcNftHash !== undefined && object.srcNftHash !== null) {
      message.srcNftHash = object.srcNftHash;
    } else {
      message.srcNftHash = "";
    }
    if (object.srcChain !== undefined && object.srcChain !== null) {
      message.srcChain = object.srcChain;
    } else {
      message.srcChain = "";
    }
    if (object.srcAddr !== undefined && object.srcAddr !== null) {
      message.srcAddr = object.srcAddr;
    } else {
      message.srcAddr = "";
    }
    if (object.destNftHash !== undefined && object.destNftHash !== null) {
      message.destNftHash = object.destNftHash;
    } else {
      message.destNftHash = "";
    }
    if (object.destChain !== undefined && object.destChain !== null) {
      message.destChain = object.destChain;
    } else {
      message.destChain = "";
    }
    if (object.destAddr !== undefined && object.destAddr !== null) {
      message.destAddr = object.destAddr;
    } else {
      message.destAddr = "";
    }
    return message;
  },
};

const baseMsgTransferNftResponse: object = {};

export const MsgTransferNftResponse = {
  encode(_: MsgTransferNftResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNftResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNftResponse } as MsgTransferNftResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferNftResponse {
    const message = { ...baseMsgTransferNftResponse } as MsgTransferNftResponse;
    return message;
  },

  toJSON(_: MsgTransferNftResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferNftResponse>): MsgTransferNftResponse {
    const message = { ...baseMsgTransferNftResponse } as MsgTransferNftResponse;
    return message;
  },
};

const baseMsgChangeStatus: object = { creator: "", reservedKey: "", to: 0 };

export const MsgChangeStatus = {
  encode(message: MsgChangeStatus, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reservedKey !== "") {
      writer.uint32(18).string(message.reservedKey);
    }
    if (message.to !== 0) {
      writer.uint32(24).int32(message.to);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgChangeStatus } as MsgChangeStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reservedKey = reader.string();
          break;
        case 3:
          message.to = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChangeStatus {
    const message = { ...baseMsgChangeStatus } as MsgChangeStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = String(object.reservedKey);
    } else {
      message.reservedKey = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = Number(object.to);
    } else {
      message.to = 0;
    }
    return message;
  },

  toJSON(message: MsgChangeStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reservedKey !== undefined &&
      (obj.reservedKey = message.reservedKey);
    message.to !== undefined && (obj.to = message.to);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgChangeStatus>): MsgChangeStatus {
    const message = { ...baseMsgChangeStatus } as MsgChangeStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = object.reservedKey;
    } else {
      message.reservedKey = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = 0;
    }
    return message;
  },
};

const baseMsgChangeStatusResponse: object = {};

export const MsgChangeStatusResponse = {
  encode(_: MsgChangeStatusResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgChangeStatusResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgChangeStatusResponse,
    } as MsgChangeStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChangeStatusResponse {
    const message = {
      ...baseMsgChangeStatusResponse,
    } as MsgChangeStatusResponse;
    return message;
  },

  toJSON(_: MsgChangeStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgChangeStatusResponse>
  ): MsgChangeStatusResponse {
    const message = {
      ...baseMsgChangeStatusResponse,
    } as MsgChangeStatusResponse;
    return message;
  },
};

const baseMsgCreateNftMint: object = {
  creator: "",
  reservedKey: "",
  transactionHash: "",
  tokenUri: "",
};

export const MsgCreateNftMint = {
  encode(message: MsgCreateNftMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reservedKey !== "") {
      writer.uint32(18).string(message.reservedKey);
    }
    if (message.transactionHash !== "") {
      writer.uint32(26).string(message.transactionHash);
    }
    if (message.tokenUri !== "") {
      writer.uint32(34).string(message.tokenUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNftMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNftMint } as MsgCreateNftMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reservedKey = reader.string();
          break;
        case 3:
          message.transactionHash = reader.string();
          break;
        case 4:
          message.tokenUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNftMint {
    const message = { ...baseMsgCreateNftMint } as MsgCreateNftMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = String(object.reservedKey);
    } else {
      message.reservedKey = "";
    }
    if (
      object.transactionHash !== undefined &&
      object.transactionHash !== null
    ) {
      message.transactionHash = String(object.transactionHash);
    } else {
      message.transactionHash = "";
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = String(object.tokenUri);
    } else {
      message.tokenUri = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNftMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reservedKey !== undefined &&
      (obj.reservedKey = message.reservedKey);
    message.transactionHash !== undefined &&
      (obj.transactionHash = message.transactionHash);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNftMint>): MsgCreateNftMint {
    const message = { ...baseMsgCreateNftMint } as MsgCreateNftMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = object.reservedKey;
    } else {
      message.reservedKey = "";
    }
    if (
      object.transactionHash !== undefined &&
      object.transactionHash !== null
    ) {
      message.transactionHash = object.transactionHash;
    } else {
      message.transactionHash = "";
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = object.tokenUri;
    } else {
      message.tokenUri = "";
    }
    return message;
  },
};

const baseMsgCreateNftMintResponse: object = {};

export const MsgCreateNftMintResponse = {
  encode(
    _: MsgCreateNftMintResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateNftMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateNftMintResponse,
    } as MsgCreateNftMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateNftMintResponse {
    const message = {
      ...baseMsgCreateNftMintResponse,
    } as MsgCreateNftMintResponse;
    return message;
  },

  toJSON(_: MsgCreateNftMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateNftMintResponse>
  ): MsgCreateNftMintResponse {
    const message = {
      ...baseMsgCreateNftMintResponse,
    } as MsgCreateNftMintResponse;
    return message;
  },
};

const baseMsgUpdateNftMint: object = {
  creator: "",
  reservedKey: "",
  transactionHash: "",
  tokenUri: "",
};

export const MsgUpdateNftMint = {
  encode(message: MsgUpdateNftMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reservedKey !== "") {
      writer.uint32(18).string(message.reservedKey);
    }
    if (message.transactionHash !== "") {
      writer.uint32(26).string(message.transactionHash);
    }
    if (message.tokenUri !== "") {
      writer.uint32(34).string(message.tokenUri);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNftMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNftMint } as MsgUpdateNftMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reservedKey = reader.string();
          break;
        case 3:
          message.transactionHash = reader.string();
          break;
        case 4:
          message.tokenUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNftMint {
    const message = { ...baseMsgUpdateNftMint } as MsgUpdateNftMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = String(object.reservedKey);
    } else {
      message.reservedKey = "";
    }
    if (
      object.transactionHash !== undefined &&
      object.transactionHash !== null
    ) {
      message.transactionHash = String(object.transactionHash);
    } else {
      message.transactionHash = "";
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = String(object.tokenUri);
    } else {
      message.tokenUri = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNftMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reservedKey !== undefined &&
      (obj.reservedKey = message.reservedKey);
    message.transactionHash !== undefined &&
      (obj.transactionHash = message.transactionHash);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateNftMint>): MsgUpdateNftMint {
    const message = { ...baseMsgUpdateNftMint } as MsgUpdateNftMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = object.reservedKey;
    } else {
      message.reservedKey = "";
    }
    if (
      object.transactionHash !== undefined &&
      object.transactionHash !== null
    ) {
      message.transactionHash = object.transactionHash;
    } else {
      message.transactionHash = "";
    }
    if (object.tokenUri !== undefined && object.tokenUri !== null) {
      message.tokenUri = object.tokenUri;
    } else {
      message.tokenUri = "";
    }
    return message;
  },
};

const baseMsgUpdateNftMintResponse: object = {};

export const MsgUpdateNftMintResponse = {
  encode(
    _: MsgUpdateNftMintResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateNftMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateNftMintResponse,
    } as MsgUpdateNftMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateNftMintResponse {
    const message = {
      ...baseMsgUpdateNftMintResponse,
    } as MsgUpdateNftMintResponse;
    return message;
  },

  toJSON(_: MsgUpdateNftMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateNftMintResponse>
  ): MsgUpdateNftMintResponse {
    const message = {
      ...baseMsgUpdateNftMintResponse,
    } as MsgUpdateNftMintResponse;
    return message;
  },
};

const baseMsgDeleteNftMint: object = { creator: "", reservedKey: "" };

export const MsgDeleteNftMint = {
  encode(message: MsgDeleteNftMint, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reservedKey !== "") {
      writer.uint32(18).string(message.reservedKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNftMint {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteNftMint } as MsgDeleteNftMint;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reservedKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteNftMint {
    const message = { ...baseMsgDeleteNftMint } as MsgDeleteNftMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = String(object.reservedKey);
    } else {
      message.reservedKey = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteNftMint): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reservedKey !== undefined &&
      (obj.reservedKey = message.reservedKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteNftMint>): MsgDeleteNftMint {
    const message = { ...baseMsgDeleteNftMint } as MsgDeleteNftMint;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = object.reservedKey;
    } else {
      message.reservedKey = "";
    }
    return message;
  },
};

const baseMsgDeleteNftMintResponse: object = {};

export const MsgDeleteNftMintResponse = {
  encode(
    _: MsgDeleteNftMintResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteNftMintResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteNftMintResponse,
    } as MsgDeleteNftMintResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteNftMintResponse {
    const message = {
      ...baseMsgDeleteNftMintResponse,
    } as MsgDeleteNftMintResponse;
    return message;
  },

  toJSON(_: MsgDeleteNftMintResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteNftMintResponse>
  ): MsgDeleteNftMintResponse {
    const message = {
      ...baseMsgDeleteNftMintResponse,
    } as MsgDeleteNftMintResponse;
    return message;
  },
};

const baseMsgAddNftMintResult: object = {
  creator: "",
  reservedKey: "",
  tokenId: "",
};

export const MsgAddNftMintResult = {
  encode(
    message: MsgAddNftMintResult,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reservedKey !== "") {
      writer.uint32(18).string(message.reservedKey);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddNftMintResult {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddNftMintResult } as MsgAddNftMintResult;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reservedKey = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddNftMintResult {
    const message = { ...baseMsgAddNftMintResult } as MsgAddNftMintResult;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = String(object.reservedKey);
    } else {
      message.reservedKey = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = String(object.tokenId);
    } else {
      message.tokenId = "";
    }
    return message;
  },

  toJSON(message: MsgAddNftMintResult): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reservedKey !== undefined &&
      (obj.reservedKey = message.reservedKey);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddNftMintResult>): MsgAddNftMintResult {
    const message = { ...baseMsgAddNftMintResult } as MsgAddNftMintResult;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.reservedKey !== undefined && object.reservedKey !== null) {
      message.reservedKey = object.reservedKey;
    } else {
      message.reservedKey = "";
    }
    if (object.tokenId !== undefined && object.tokenId !== null) {
      message.tokenId = object.tokenId;
    } else {
      message.tokenId = "";
    }
    return message;
  },
};

const baseMsgAddNftMintResultResponse: object = {};

export const MsgAddNftMintResultResponse = {
  encode(
    _: MsgAddNftMintResultResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddNftMintResultResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddNftMintResultResponse,
    } as MsgAddNftMintResultResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddNftMintResultResponse {
    const message = {
      ...baseMsgAddNftMintResultResponse,
    } as MsgAddNftMintResultResponse;
    return message;
  },

  toJSON(_: MsgAddNftMintResultResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAddNftMintResultResponse>
  ): MsgAddNftMintResultResponse {
    const message = {
      ...baseMsgAddNftMintResultResponse,
    } as MsgAddNftMintResultResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  ReserveNftTransfer(
    request: MsgReserveNftTransfer
  ): Promise<MsgReserveNftTransferResponse>;
  TransferNft(request: MsgTransferNft): Promise<MsgTransferNftResponse>;
  ChangeStatus(request: MsgChangeStatus): Promise<MsgChangeStatusResponse>;
  CreateNftMint(request: MsgCreateNftMint): Promise<MsgCreateNftMintResponse>;
  UpdateNftMint(request: MsgUpdateNftMint): Promise<MsgUpdateNftMintResponse>;
  DeleteNftMint(request: MsgDeleteNftMint): Promise<MsgDeleteNftMintResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddNftMintResult(
    request: MsgAddNftMintResult
  ): Promise<MsgAddNftMintResultResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ReserveNftTransfer(
    request: MsgReserveNftTransfer
  ): Promise<MsgReserveNftTransferResponse> {
    const data = MsgReserveNftTransfer.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "ReserveNftTransfer", data);
    return promise.then((data) =>
      MsgReserveNftTransferResponse.decode(new Reader(data))
    );
  }

  TransferNft(request: MsgTransferNft): Promise<MsgTransferNftResponse> {
    const data = MsgTransferNft.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "TransferNft", data);
    return promise.then((data) =>
      MsgTransferNftResponse.decode(new Reader(data))
    );
  }

  ChangeStatus(request: MsgChangeStatus): Promise<MsgChangeStatusResponse> {
    const data = MsgChangeStatus.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "ChangeStatus", data);
    return promise.then((data) =>
      MsgChangeStatusResponse.decode(new Reader(data))
    );
  }

  CreateNftMint(request: MsgCreateNftMint): Promise<MsgCreateNftMintResponse> {
    const data = MsgCreateNftMint.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "CreateNftMint", data);
    return promise.then((data) =>
      MsgCreateNftMintResponse.decode(new Reader(data))
    );
  }

  UpdateNftMint(request: MsgUpdateNftMint): Promise<MsgUpdateNftMintResponse> {
    const data = MsgUpdateNftMint.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "UpdateNftMint", data);
    return promise.then((data) =>
      MsgUpdateNftMintResponse.decode(new Reader(data))
    );
  }

  DeleteNftMint(request: MsgDeleteNftMint): Promise<MsgDeleteNftMintResponse> {
    const data = MsgDeleteNftMint.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "DeleteNftMint", data);
    return promise.then((data) =>
      MsgDeleteNftMintResponse.decode(new Reader(data))
    );
  }

  AddNftMintResult(
    request: MsgAddNftMintResult
  ): Promise<MsgAddNftMintResultResponse> {
    const data = MsgAddNftMintResult.encode(request).finish();
    const promise = this.rpc.request("nti.nti.Msg", "AddNftMintResult", data);
    return promise.then((data) =>
      MsgAddNftMintResultResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
