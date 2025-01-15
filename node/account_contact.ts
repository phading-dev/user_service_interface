import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export interface AccountContact {
  accountId?: string,
  name?: string,
  contactEmail?: string,
}

export let ACCOUNT_CONTACT: MessageDescriptor<AccountContact> = {
  name: 'AccountContact',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};
