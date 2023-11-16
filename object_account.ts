import { EnumDescriptor, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountFull, ACCOUNT_FULL, AccountSnapshot, ACCOUNT_SNAPSHOT } from './account';

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

export interface ObjectAccountSnapshot {
  accountSnapshot?: AccountSnapshot,
  relationship?: ObjectAccountRelationship,
}

export let OBJECT_ACCOUNT_SNAPSHOT: MessageDescriptor<ObjectAccountSnapshot> = {
  name: 'ObjectAccountSnapshot',
  fields: [
    {
      name: 'accountSnapshot',
      messageType: ACCOUNT_SNAPSHOT,
    },
    {
      name: 'relationship',
      enumType: OBJECT_ACCOUNT_RELATIONSHIP,
    },
  ]
};
