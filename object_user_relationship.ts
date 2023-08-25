import { EnumDescriptor } from '@selfage/message/descriptor';

export enum ObjectUserRelationship {
  UNKNOWN = 0,
  LIKE = 1,
  DISLIKE = 2,
}

export let OBJECT_USER_RELATIONSHIP: EnumDescriptor<ObjectUserRelationship> = {
  name: 'ObjectUserRelationship',
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
