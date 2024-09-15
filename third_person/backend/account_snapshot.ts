import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountSnapshot {
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_SNAPSHOT: MessageDescriptor<AccountSnapshot> = {
  name: 'AccountSnapshot',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallPath',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};
