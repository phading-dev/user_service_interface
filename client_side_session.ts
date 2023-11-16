import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface ClientSideSession {
  sessionId?: string,
}

export let CLIENT_SIDE_SESSION: MessageDescriptor<ClientSideSession> = {
  name: 'ClientSideSession',
  fields: [
    {
      name: 'sessionId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
