import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { Account, ACCOUNT, AccountRelationship, ACCOUNT_RELATIONSHIP } from '../account';
import { ServiceDescriptor } from '@selfage/service_descriptor';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';

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
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_ACCOUNT_RESPONSE,
  },
}

export interface SetAccountRelationshipRequestBody {
  accountId?: string,
  relationship?: AccountRelationship,
}

export let SET_ACCOUNT_RELATIONSHIP_REQUEST_BODY: MessageDescriptor<SetAccountRelationshipRequestBody> = {
  name: 'SetAccountRelationshipRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'relationship',
      enumType: ACCOUNT_RELATIONSHIP,
    },
  ]
};

export interface SetAccountRelationshipResponse {
}

export let SET_ACCOUNT_RELATIONSHIP_RESPONSE: MessageDescriptor<SetAccountRelationshipResponse> = {
  name: 'SetAccountRelationshipResponse',
  fields: [
  ]
};

export let SET_ACCOUNT_RELATIONSHIP: ServiceDescriptor = {
  name: "SetAccountRelationship",
  path: "/SetAccountRelationship",
  body: {
    messageType: SET_ACCOUNT_RELATIONSHIP_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: SET_ACCOUNT_RELATIONSHIP_RESPONSE,
  },
}
