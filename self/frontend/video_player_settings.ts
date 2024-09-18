import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';

export interface VideoSettings {
  /* 0 to 1 */
  volume?: number,
  muted?: boolean,
  /* .25x to 4x */
  playbackSpeed?: number,
}

export let VIDEO_SETTINGS: MessageDescriptor<VideoSettings> = {
  name: 'VideoSettings',
  fields: [{
    name: 'volume',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'muted',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'playbackSpeed',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export enum StackingMethod {
  RANDOM = 1,
  TOP_DOWN = 2,
}

export let STACKING_METHOD: EnumDescriptor<StackingMethod> = {
  name: 'StackingMethod',
  values: [{
    name: 'RANDOM',
    value: 1,
  }, {
    name: 'TOP_DOWN',
    value: 2,
  }]
}

export interface DanmakuSettings {
  enable?: boolean,
  speed?: number,
  /* 0 to 100 percentage. */
  opacity?: number,
  fontSize?: number,
  /* 0 to 100 percentage. For every 100 pixels, the number of pixels should be occupied. */
  density?: number,
  /* 0 to 100 percentage. */
  topMargin?: number,
  /* 0 to 100 percentage. */
  bottomMargin?: number,
  fontFamily?: string,
  stackingMethod?: StackingMethod,
}

export let DANMAKU_SETTINGS: MessageDescriptor<DanmakuSettings> = {
  name: 'DanmakuSettings',
  fields: [{
    name: 'enable',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'speed',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'opacity',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fontSize',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'density',
    index: 5,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'topMargin',
    index: 6,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'bottomMargin',
    index: 7,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fontFamily',
    index: 8,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'stackingMethod',
    index: 9,
    enumType: STACKING_METHOD,
  }],
};

export interface VideoPlayerSettings {
  videoSettings?: VideoSettings,
  danmakuSettings?: DanmakuSettings,
}

export let VIDEO_PLAYER_SETTINGS: MessageDescriptor<VideoPlayerSettings> = {
  name: 'VideoPlayerSettings',
  fields: [{
    name: 'videoSettings',
    index: 1,
    messageType: VIDEO_SETTINGS,
  }, {
    name: 'danmakuSettings',
    index: 2,
    messageType: DANMAKU_SETTINGS,
  }],
};
