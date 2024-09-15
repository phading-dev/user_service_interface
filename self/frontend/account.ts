import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';

export interface AccountAndUser {
  naturalName?: string,
  contactEmail?: string,
  description?: string,
  avatarLargePath?: string,
  username?: string,
  recoveryEmail?: string,
}

export let ACCOUNT_AND_USER: MessageDescriptor<AccountAndUser> = {
  name: 'AccountAndUser',
  fields: [{
    name: 'naturalName',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarLargePath',
    index: 6,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'username',
    index: 7,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'recoveryEmail',
    index: 8,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface AccountOverview {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_OVERVIEW: MessageDescriptor<AccountOverview> = {
  name: 'AccountOverview',
  fields: [{
    name: 'accountType',
    index: 1,
    enumType: ACCOUNT_TYPE,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallPath',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};
