import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';
import { AccountSummary, ACCOUNT_SUMMARY } from './account_summary';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetAccountSummaryRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_SUMMARY_REQUEST_BODY: MessageDescriptor<GetAccountSummaryRequestBody> = {
  name: 'GetAccountSummaryRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetAccountSummaryResponse {
  account?: AccountSummary,
}

export let GET_ACCOUNT_SUMMARY_RESPONSE: MessageDescriptor<GetAccountSummaryResponse> = {
  name: 'GetAccountSummaryResponse',
  fields: [{
    name: 'account',
    index: 1,
    messageType: ACCOUNT_SUMMARY,
  }],
};

export enum SuspensionReason {
  PAST_DUE = 1,
  FRAUD = 2,
}

export let SUSPENSION_REASON: EnumDescriptor<SuspensionReason> = {
  name: 'SuspensionReason',
  values: [{
    name: 'PAST_DUE',
    value: 1,
  }, {
    name: 'FRAUD',
    value: 2,
  }]
}

export interface SuspendAccountRequestBody {
  accountId?: string,
  reason?: SuspensionReason,
}

export let SUSPEND_ACCOUNT_REQUEST_BODY: MessageDescriptor<SuspendAccountRequestBody> = {
  name: 'SuspendAccountRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'reason',
    index: 2,
    enumType: SUSPENSION_REASON,
  }],
};

export interface SuspendAccountResponse {
}

export let SUSPEND_ACCOUNT_RESPONSE: MessageDescriptor<SuspendAccountResponse> = {
  name: 'SuspendAccountResponse',
  fields: [],
};

export interface RestoreAccountRequestBody {
  accountId?: string,
}

export let RESTORE_ACCOUNT_REQUEST_BODY: MessageDescriptor<RestoreAccountRequestBody> = {
  name: 'RestoreAccountRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface RestoreAccountResponse {
}

export let RESTORE_ACCOUNT_RESPONSE: MessageDescriptor<RestoreAccountResponse> = {
  name: 'RestoreAccountResponse',
  fields: [],
};

export let GET_ACCOUNT_SUMMARY: NodeRemoteCallDescriptor = {
  name: "GetAccountSummary",
  path: "/GetAccountSummary",
  body: {
    messageType: GET_ACCOUNT_SUMMARY_REQUEST_BODY,
  },
  response: {
    messageType: GET_ACCOUNT_SUMMARY_RESPONSE,
  },
}

export let SUSPEND_ACCOUNT: NodeRemoteCallDescriptor = {
  name: "SuspendAccount",
  path: "/SuspendAccount",
  body: {
    messageType: SUSPEND_ACCOUNT_REQUEST_BODY,
  },
  response: {
    messageType: SUSPEND_ACCOUNT_RESPONSE,
  },
}

export let RESTORE_ACCOUNT: NodeRemoteCallDescriptor = {
  name: "RestoreAccount",
  path: "/RestoreAccount",
  body: {
    messageType: RESTORE_ACCOUNT_REQUEST_BODY,
  },
  response: {
    messageType: RESTORE_ACCOUNT_RESPONSE,
  },
}
