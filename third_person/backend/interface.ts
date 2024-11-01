import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountSnapshot, ACCOUNT_SNAPSHOT } from './account_snapshot';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';
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

export interface ListAccountsRequestBody {
  accountType?: AccountType,
  createdTimeMsCursor?: number,
  limit?: number,
}

export let LIST_ACCOUNTS_REQUEST_BODY: MessageDescriptor<ListAccountsRequestBody> = {
  name: 'ListAccountsRequestBody',
  fields: [{
    name: 'accountType',
    index: 1,
    enumType: ACCOUNT_TYPE,
  }, {
    name: 'createdTimeMsCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'limit',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListAccountsResponse {
  accountIds?: Array<string>,
  createdTimeMsCursor?: number,
}

export let LIST_ACCOUNTS_RESPONSE: MessageDescriptor<ListAccountsResponse> = {
  name: 'ListAccountsResponse',
  fields: [{
    name: 'accountIds',
    index: 1,
    primitiveType: PrimitiveType.STRING,
    isArray: true,
  }, {
    name: 'createdTimeMsCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
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

export let LIST_ACCOUNTS: NodeRemoteCallDescriptor = {
  name: "ListAccounts",
  path: "/ListAccounts",
  body: {
    messageType: LIST_ACCOUNTS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_ACCOUNTS_RESPONSE,
  },
}
