import { MessageDescriptor } from '@selfage/message/descriptor';
import { User, USER } from './user';
import { UserRelationship, USER_RELATIONSHIP } from './user_relationship';

export interface UserCard {
  user?: User,
  relationship?: UserRelationship,
}

export let USER_CARD: MessageDescriptor<UserCard> = {
  name: 'UserCard',
  fields: [
    {
      name: 'user',
      messageType: USER,
    },
    {
      name: 'relationship',
      enumType: USER_RELATIONSHIP,
    },
  ]
};
