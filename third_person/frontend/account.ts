import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '@phading/user_session_service_interface/account_type';

export interface Account {
  accountType?: AccountType,
  accountId?: string,
  naturalName?: string,
  contactEmail?: string,
  description?: string,
  avatarLargePath?: string,
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
      name: 'contactEmail',
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
  ]
};
