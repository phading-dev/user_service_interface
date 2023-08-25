import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface UserSession {
  authId?: string,
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
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
