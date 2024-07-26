import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';

export interface AccountAndUser {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  contactEmail?: string,
  description?: string,
  avatarLargePath?: string,
  username?: string,
  recoveryEmail?: string,
}

export let ACCOUNT_AND_USER: MessageDescriptor<AccountAndUser> = {
  name: 'AccountAndUser',
  fields: [
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'contactEmail',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarLargePath',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'recoveryEmail',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface AccountOverview {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_OVERVIEW: MessageDescriptor<AccountOverview> = {
  name: 'AccountOverview',
  fields: [
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
