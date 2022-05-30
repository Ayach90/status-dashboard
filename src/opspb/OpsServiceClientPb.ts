/**
 * @fileoverview gRPC-Web generated client stub for tangelogames.api.ops
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as src_opspb_ops_pb from '../../src/opspb/ops_pb';


export class OpsClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorServerInfo = new grpcWeb.MethodDescriptor(
    '/tangelogames.api.ops.Ops/ServerInfo',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_opspb_ops_pb.ServerInfoRequest,
    src_opspb_ops_pb.ServerInfoResponse,
    (request: src_opspb_ops_pb.ServerInfoRequest) => {
      return request.serializeBinary();
    },
    src_opspb_ops_pb.ServerInfoResponse.deserializeBinary
  );

  serverInfo(
    request: src_opspb_ops_pb.ServerInfoRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<src_opspb_ops_pb.ServerInfoResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tangelogames.api.ops.Ops/ServerInfo',
      request,
      metadata || {},
      this.methodDescriptorServerInfo);
  }

  methodDescriptorStatus = new grpcWeb.MethodDescriptor(
    '/tangelogames.api.ops.Ops/Status',
    grpcWeb.MethodType.UNARY,
    src_opspb_ops_pb.StatusRequest,
    src_opspb_ops_pb.StatusResponse,
    (request: src_opspb_ops_pb.StatusRequest) => {
      return request.serializeBinary();
    },
    src_opspb_ops_pb.StatusResponse.deserializeBinary
  );

  status(
    request: src_opspb_ops_pb.StatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<src_opspb_ops_pb.StatusResponse>;

  status(
    request: src_opspb_ops_pb.StatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: src_opspb_ops_pb.StatusResponse) => void): grpcWeb.ClientReadableStream<src_opspb_ops_pb.StatusResponse>;

  status(
    request: src_opspb_ops_pb.StatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: src_opspb_ops_pb.StatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tangelogames.api.ops.Ops/Status',
        request,
        metadata || {},
        this.methodDescriptorStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tangelogames.api.ops.Ops/Status',
    request,
    metadata || {},
    this.methodDescriptorStatus);
  }

  methodDescriptorPing = new grpcWeb.MethodDescriptor(
    '/tangelogames.api.ops.Ops/Ping',
    grpcWeb.MethodType.SERVER_STREAMING,
    src_opspb_ops_pb.PingRequest,
    src_opspb_ops_pb.PingResponse,
    (request: src_opspb_ops_pb.PingRequest) => {
      return request.serializeBinary();
    },
    src_opspb_ops_pb.PingResponse.deserializeBinary
  );

  ping(
    request: src_opspb_ops_pb.PingRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<src_opspb_ops_pb.PingResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tangelogames.api.ops.Ops/Ping',
      request,
      metadata || {},
      this.methodDescriptorPing);
  }

}

