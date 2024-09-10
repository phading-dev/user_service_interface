import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from './account_snapshot';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetAccountSnapshotRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_SNAPSHOT_REQUEST_BODY: MessageDescriptor<GetAccountSnapshotRequestBody> = {
  name: 'GetAccountSnapshotRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetAccountSnapshotResponse {
  account?: AccountSnapshot,
}

export let GET_ACCOUNT_SNAPSHOT_RESPONSE: MessageDescriptor<GetAccountSnapshotResponse> = {
  name: 'GetAccountSnapshotResponse',
  fields: [{
    name: 'account',
    index: 1,
    messageType: ACCOUNT_SNAPSHOT,
  }],
};

export let GET_ACCOUNT_SNAPSHOT: NodeRemoteCallDescriptor = {
  name: "GetAccountSnapshot",
  path: "/GetAccountSnapshot",
  body: {
    messageType: GET_ACCOUNT_SNAPSHOT_REQUEST_BODY,
  },
  response: {
    messageType: GET_ACCOUNT_SNAPSHOT_RESPONSE,
  },
}
