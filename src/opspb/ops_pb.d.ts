import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ServerInfoRequest extends jspb.Message {
  getInterval(): google_protobuf_duration_pb.Duration | undefined;
  setInterval(value?: google_protobuf_duration_pb.Duration): ServerInfoRequest;
  hasInterval(): boolean;
  clearInterval(): ServerInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoRequest): ServerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ServerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoRequest;
  static deserializeBinaryFromReader(message: ServerInfoRequest, reader: jspb.BinaryReader): ServerInfoRequest;
}

export namespace ServerInfoRequest {
  export type AsObject = {
    interval?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class ServerInfoResponse extends jspb.Message {
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): ServerInfoResponse;
  hasTs(): boolean;
  clearTs(): ServerInfoResponse;

  getVersion(): string;
  setVersion(value: string): ServerInfoResponse;

  getCommit(): string;
  setCommit(value: string): ServerInfoResponse;

  getHostname(): string;
  setHostname(value: string): ServerInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ServerInfoResponse): ServerInfoResponse.AsObject;
  static serializeBinaryToWriter(message: ServerInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerInfoResponse;
  static deserializeBinaryFromReader(message: ServerInfoResponse, reader: jspb.BinaryReader): ServerInfoResponse;
}

export namespace ServerInfoResponse {
  export type AsObject = {
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: string,
    commit: string,
    hostname: string,
  }
}

export class StatusRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRequest;
  static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
  export type AsObject = {
  }
}

export class StatusResponse extends jspb.Message {
  getTs(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTs(value?: google_protobuf_timestamp_pb.Timestamp): StatusResponse;
  hasTs(): boolean;
  clearTs(): StatusResponse;

  getVersion(): string;
  setVersion(value: string): StatusResponse;

  getCommit(): string;
  setCommit(value: string): StatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    ts?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: string,
    commit: string,
  }
}

export class PingRequest extends jspb.Message {
  getId(): string;
  setId(value: string): PingRequest;

  getN(): number;
  setN(value: number): PingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    id: string,
    n: number,
  }
}

export class PingResponse extends jspb.Message {
  getId(): string;
  setId(value: string): PingResponse;

  getSeq(): number;
  setSeq(value: number): PingResponse;

  getPayload(): string;
  setPayload(value: string): PingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    id: string,
    seq: number,
    payload: string,
  }
}

