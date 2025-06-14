import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';

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
  accountType?: AccountType,
  naturalName?: string,
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
    name: 'naturalName',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarLargeUrl',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};
