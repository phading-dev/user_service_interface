import { EnumDescriptor } from '@selfage/message/descriptor';

export enum UserType {
  UNKNOWN = 0,
  CONSUMER = 1,
  PUBLISHER = 2,
}

export let USER_TYPE: EnumDescriptor<UserType> = {
  name: 'UserType',
  values: [
    {
      name: 'UNKNOWN',
      value: 0,
    },
    {
      name: 'CONSUMER',
      value: 1,
    },
    {
      name: 'PUBLISHER',
      value: 2,
    },
  ]
}
