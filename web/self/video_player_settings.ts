import { PrimitiveType, MessageDescriptor, EnumDescriptor } from '@selfage/message/descriptor';

export interface VideoSettings {
  volume?: number,
  preferredAudioName?: string,
  playbackSpeed?: number,
  preferredSubtitleName?: string,
}

export let VIDEO_SETTINGS: MessageDescriptor<VideoSettings> = {
  name: 'VideoSettings',
  fields: [{
    name: 'volume',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'preferredAudioName',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'playbackSpeed',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'preferredSubtitleName',
    index: 4,
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

export interface DanmakuOverlaySettings {
  speed?: number,
  density?: number,
  stackingMethod?: StackingMethod,
}

export let DANMAKU_OVERLAY_SETTINGS: MessageDescriptor<DanmakuOverlaySettings> = {
  name: 'DanmakuOverlaySettings',
  fields: [{
    name: 'speed',
    index: 1,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'density',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'stackingMethod',
    index: 3,
    enumType: STACKING_METHOD,
  }],
};

export enum ChatOverlayStyle {
  NONE = 1,
  SIDE = 2,
  DANMAKU = 3,
}

export let CHAT_OVERLAY_STYLE: EnumDescriptor<ChatOverlayStyle> = {
  name: 'ChatOverlayStyle',
  values: [{
    name: 'NONE',
    value: 1,
  }, {
    name: 'SIDE',
    value: 2,
  }, {
    name: 'DANMAKU',
    value: 3,
  }]
}

export interface ChatOverlaySettings {
  style?: ChatOverlayStyle,
  opacity?: number,
  fontSize?: number,
  danmakuSettings?: DanmakuOverlaySettings,
}

export let CHAT_OVERLAY_SETTINGS: MessageDescriptor<ChatOverlaySettings> = {
  name: 'ChatOverlaySettings',
  fields: [{
    name: 'style',
    index: 1,
    enumType: CHAT_OVERLAY_STYLE,
  }, {
    name: 'opacity',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'fontSize',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'danmakuSettings',
    index: 4,
    messageType: DANMAKU_OVERLAY_SETTINGS,
  }],
};

export interface VideoPlayerSettings {
  videoSettings?: VideoSettings,
  chatOverlaySettings?: ChatOverlaySettings,
}

export let VIDEO_PLAYER_SETTINGS: MessageDescriptor<VideoPlayerSettings> = {
  name: 'VideoPlayerSettings',
  fields: [{
    name: 'videoSettings',
    index: 1,
    messageType: VIDEO_SETTINGS,
  }, {
    name: 'chatOverlaySettings',
    index: 2,
    messageType: CHAT_OVERLAY_SETTINGS,
  }],
};
