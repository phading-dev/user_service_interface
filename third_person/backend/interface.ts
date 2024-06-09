import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from './account_snapshot';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

export interface GetAccountSnapshotRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_SNAPSHOT_REQUEST_BODY: MessageDescriptor<GetAccountSnapshotRequestBody> = {
  name: 'GetAccountSnapshotRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetAccountSnapshotResponse {
  account?: AccountSnapshot,
}

export let GET_ACCOUNT_SNAPSHOT_RESPONSE: MessageDescriptor<GetAccountSnapshotResponse> = {
  name: 'GetAccountSnapshotResponse',
  fields: [
    {
      name: 'account',
      messageType: ACCOUNT_SNAPSHOT,
    },
  ]
};

export let GET_ACCOUNT_SNAPSHOT: ServiceDescriptor = {
  name: "GetAccountSnapshot",
  path: "/GetAccountSnapshot",
  body: {
    messageType: GET_ACCOUNT_SNAPSHOT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_ACCOUNT_SNAPSHOT_RESPONSE,
  },
}
