import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';

export interface VideoSettings {
  volume?: number,
  muted?: boolean,
  playbackSpeed?: number,
  preferredAudioLanguage?: string,
  preferredSubtitleLanguage?: string,
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
  }, {
    name: 'preferredAudioLanguage',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'preferredSubtitleLanguage',
    index: 5,
    primitiveType: PrimitiveType.STRING,
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
  opacity?: number,
  frontSize?: number,
  density?: number,
  topMargin?: number,
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
    name: 'frontSize',
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
