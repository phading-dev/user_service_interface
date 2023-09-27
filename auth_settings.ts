import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface AuthSettings {
  username?: string,
}

export let AUTH_SETTINGS: MessageDescriptor<AuthSettings> = {
  name: 'AuthSettings',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
