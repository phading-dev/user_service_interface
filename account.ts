import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from './account_type';

export interface AccountShort {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_SHORT: MessageDescriptor<AccountShort> = {
  name: 'AccountShort',
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

export interface AccountFull {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  description?: string,
  avatarLargePath?: string,
}

export let ACCOUNT_FULL: MessageDescriptor<AccountFull> = {
  name: 'AccountFull',
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
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarLargePath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
