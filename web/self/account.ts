import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountAndUser {
  naturalName?: string,
  contactEmail?: string,
  description?: string,
  avatarLargeUrl?: string,
  username?: string,
  recoveryEmail?: string,
}

export let ACCOUNT_AND_USER: MessageDescriptor<AccountAndUser> = {
  name: 'AccountAndUser',
  fields: [{
    name: 'naturalName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarLargeUrl',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'username',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'recoveryEmail',
    index: 6,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AccountSummary {
  accountId?: string,
  naturalName?: string,
  avatarSmallUrl?: string,
}

export let ACCOUNT_SUMMARY: MessageDescriptor<AccountSummary> = {
  name: 'AccountSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallUrl',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};
