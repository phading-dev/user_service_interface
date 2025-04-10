import { EnumDescriptor, PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';

export enum ColorScheme {
  LIGHT = 1,
  DARK = 2,
}

export let COLOR_SCHEME: EnumDescriptor<ColorScheme> = {
  name: 'ColorScheme',
  values: [{
    name: 'LIGHT',
    value: 1,
  }, {
    name: 'DARK',
    value: 2,
  }]
}

export interface UISettings {
  scheme?: ColorScheme,
  language?: string,
  leftHandMode?: boolean,
}

export let U_I_SETTINGS: MessageDescriptor<UISettings> = {
  name: 'UISettings',
  fields: [{
    name: 'scheme',
    index: 1,
    enumType: COLOR_SCHEME,
  }, {
    name: 'language',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'leftHandMode',
    index: 3,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};
