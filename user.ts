import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { UserType, USER_TYPE } from './user_type';

export interface User {
  authId?: string,
  userType?: UserType,
  userId?: string,
  naturalName?: string,
  description?: string,
  avatarLargePath?: string,
  avatarSmallPath?: string,
}

export let USER: MessageDescriptor<User> = {
  name: 'User',
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
    {
      name: 'avatarSmallPath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
