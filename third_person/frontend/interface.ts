import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Account, ACCOUNT } from './account';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { CLIENT_SESSION } from '@phading/user_session_service_interface/client_session';

export interface GetAccountRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_REQUEST_BODY: MessageDescriptor<GetAccountRequestBody> = {
  name: 'GetAccountRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetAccountResponse {
  account?: Account,
}

export let GET_ACCOUNT_RESPONSE: MessageDescriptor<GetAccountResponse> = {
  name: 'GetAccountResponse',
  fields: [
    {
      name: 'account',
      messageType: ACCOUNT,
    },
  ]
};

export let GET_ACCOUNT: ServiceDescriptor = {
  name: "GetAccount",
  path: "/GetAccount",
  body: {
    messageType: GET_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: CLIENT_SESSION
  },
  response: {
    messageType: GET_ACCOUNT_RESPONSE,
  },
}
