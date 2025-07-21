import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';

export interface AccountAndUser {
  userEmail?: string,
  name?: string,
  description?: string,
  avatarLargeUrl?: string,
}

export let ACCOUNT_AND_USER: MessageDescriptor<AccountAndUser> = {
  name: 'AccountAndUser',
  fields: [{
    name: 'userEmail',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
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
  }],
};

export interface AccountSummary {
  accountId?: string,
  accountType?: AccountType,
  name?: string,
  avatarLargeUrl?: string,
}

export let ACCOUNT_SUMMARY: MessageDescriptor<AccountSummary> = {
  name: 'AccountSummary',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountType',
    index: 2,
    enumType: ACCOUNT_TYPE,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarLargeUrl',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};
