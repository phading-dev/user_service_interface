import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from './account_type';

export interface Account {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  avatarLargePath?: string,
  avatarSmallPath?: string,
}

export let ACCOUNT: MessageDescriptor<Account> = {
  name: 'Account',
  fields: [
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
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
