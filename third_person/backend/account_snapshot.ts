import { AccountType, ACCOUNT_TYPE } from '../../account_type';
import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountSnapshot {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT_SNAPSHOT: MessageDescriptor<AccountSnapshot> = {
  name: 'AccountSnapshot',
  fields: [{
    name: 'accountType',
    index: 1,
    enumType: ACCOUNT_TYPE,
  }, {
    name: 'accountId',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'avatarSmallPath',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }],
};
