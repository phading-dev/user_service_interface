import { EnumDescriptor } from '@selfage/message/descriptor';

export enum ProductType {
  Unknown = 0,
  Video = 1,
  Music = 2,
  Podcast = undefined,
}

export let PRODUCT_TYPE: EnumDescriptor<ProductType> = {
  name: 'ProductType',
  values: [
    {
      name: 'Unknown',
      value: 0,
    },
    {
      name: 'Video',
      value: 1,
    },
    {
      name: 'Music',
      value: 2,
    },
    {
      name: 'Podcast',
      value: undefined,
    },
  ]
}
