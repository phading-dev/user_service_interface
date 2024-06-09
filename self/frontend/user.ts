import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface User {
  username?: string,
  recoveryEmail?: string,
}

export let USER: MessageDescriptor<User> = {
  name: 'User',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'recoveryEmail',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
