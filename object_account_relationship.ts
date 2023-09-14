import { EnumDescriptor } from '@selfage/message/descriptor';

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
