import { EnumDescriptor, MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../account_type';

export enum AccountRelationship {
  UNKNOWN = 0,
  LIKE = 1,
  DISLIKE = 2,
}

export let ACCOUNT_RELATIONSHIP: EnumDescriptor<AccountRelationship> = {
  name: 'AccountRelationship',
  values: [
    {
      name: 'UNKNOWN',
      value: 0,
    },
    {
      name: 'LIKE',
      value: 1,
    },
    {
      name: 'DISLIKE',
      value: 2,
    },
  ]
}

export interface Account {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  contactEmail?: string,
  description?: string,
  avatarLargePath?: string,
  relationship?: AccountRelationship,
}

export let ACCOUNT: MessageDescriptor<Account> = {
  name: 'Account',
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
      name: 'relationship',
      enumType: ACCOUNT_RELATIONSHIP,
    },
  ]
};

export interface AccountSnapshot {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
  relationship?: AccountRelationship,
}

export let ACCOUNT_SNAPSHOT: MessageDescriptor<AccountSnapshot> = {
  name: 'AccountSnapshot',
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
    {
      name: 'relationship',
      enumType: ACCOUNT_RELATIONSHIP,
    },
  ]
};
