import { EnumDescriptor } from '@selfage/message/descriptor';

export enum AppType {
  Unknown = 0,
  Show = 1,
  Music = 2,
  Podcast = 3,
}

export let APP_TYPE: EnumDescriptor<AppType> = {
  name: 'AppType',
  values: [
    {
      name: 'Unknown',
      value: 0,
    },
    {
      name: 'Show',
      value: 1,
    },
    {
      name: 'Music',
      value: 2,
    },
    {
      name: 'Podcast',
      value: 3,
    },
  ]
}
