import { MessageDescriptor } from '@selfage/message/descriptor';
import { Account, ACCOUNT } from './account';
import { ObjectAccountRelationship, OBJECT_ACCOUNT_RELATIONSHIP } from './object_account_relationship';

export interface ObjectAccount {
  account?: Account,
  relationship?: ObjectAccountRelationship,
}

export let OBJECT_ACCOUNT: MessageDescriptor<ObjectAccount> = {
  name: 'ObjectAccount',
  fields: [
    {
      name: 'account',
      messageType: ACCOUNT,
    },
    {
      name: 'relationship',
      enumType: OBJECT_ACCOUNT_RELATIONSHIP,
    },
  ]
};
