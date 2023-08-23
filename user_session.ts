import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { UserType, USER_TYPE } from './user_type';

export interface UserSession {
  authId?: string,
  userType?: UserType,
  userId?: string,
}

export let USER_SESSION: MessageDescriptor<UserSession> = {
  name: 'UserSession',
  fields: [
    {
      name: 'authId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'userType',
      enumType: USER_TYPE,
    },
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
