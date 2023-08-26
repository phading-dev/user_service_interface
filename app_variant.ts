import { EnumDescriptor } from '@selfage/message/descriptor';

export enum AppVariant {
  Unknown = 0,
  Consumer = 1,
  Publisher = 2,
}

export let APP_VARIANT: EnumDescriptor<AppVariant> = {
  name: 'AppVariant',
  values: [
    {
      name: 'Unknown',
      value: 0,
    },
    {
      name: 'Consumer',
      value: 1,
    },
    {
      name: 'Publisher',
      value: 2,
    },
  ]
}
