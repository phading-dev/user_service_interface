import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountSummary {
  accountId?: string,
  name?: string,
  avatarSmallUrl?: string,
}

export let ACCOUNT_SUMMARY: MessageDescriptor<AccountSummary> = {
  name: 'AccountSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AccountDetails {
  accountId?: string,
  name?: string,
  avatarLargeUrl?: string,
  description?: string,
}

export let ACCOUNT_DETAILS: MessageDescriptor<AccountDetails> = {
  name: 'AccountDetails',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarLargeUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};
