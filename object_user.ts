import { MessageDescriptor } from '@selfage/message/descriptor';
import { User, USER } from './user';
import { ObjectUserRelationship, OBJECT_USER_RELATIONSHIP } from './object_user_relationship';

export interface ObjectUser {
  user?: User,
  relationship?: ObjectUserRelationship,
}

export let OBJECT_USER: MessageDescriptor<ObjectUser> = {
  name: 'ObjectUser',
  fields: [
    {
      name: 'user',
      messageType: USER,
    },
    {
      name: 'relationship',
      enumType: OBJECT_USER_RELATIONSHIP,
    },
  ]
};
