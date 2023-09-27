import { EnumDescriptor, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountFull, ACCOUNT_FULL, AccountShort, ACCOUNT_SHORT } from './account';

export enum ObjectAccountRelationship {
  UNKNOWN = 0,
  LIKE = 1,
  DISLIKE = 2,
}

export let OBJECT_ACCOUNT_RELATIONSHIP: EnumDescriptor<ObjectAccountRelationship> = {
  name: 'ObjectAccountRelationship',
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

export interface ObjectAccountFull {
  accountFull?: AccountFull,
  relationship?: ObjectAccountRelationship,
}

export let OBJECT_ACCOUNT_FULL: MessageDescriptor<ObjectAccountFull> = {
  name: 'ObjectAccountFull',
  fields: [
    {
      name: 'accountFull',
      messageType: ACCOUNT_FULL,
    },
    {
      name: 'relationship',
      enumType: OBJECT_ACCOUNT_RELATIONSHIP,
    },
  ]
};

export interface ObjectAccountShort {
  accountShort?: AccountShort,
  relationship?: ObjectAccountRelationship,
}

export let OBJECT_ACCOUNT_SHORT: MessageDescriptor<ObjectAccountShort> = {
  name: 'ObjectAccountShort',
  fields: [
    {
      name: 'accountShort',
      messageType: ACCOUNT_SHORT,
    },
    {
      name: 'relationship',
      enumType: OBJECT_ACCOUNT_RELATIONSHIP,
    },
  ]
};
