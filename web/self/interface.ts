import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';
import { AccountSummary, ACCOUNT_SUMMARY, AccountAndUser, ACCOUNT_AND_USER } from './account';
import { VideoPlayerSettings, VIDEO_PLAYER_SETTINGS } from './video_player_settings';
import { USER_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';

export interface SignUpRequestBody {
  username?: string,
  recoveryEmail?: string,
  password?: string,
  naturalName?: string,
  contactEmail?: string,
  accountType?: AccountType,
}

export let SIGN_UP_REQUEST_BODY: MessageDescriptor<SignUpRequestBody> = {
  name: 'SignUpRequestBody',
  fields: [{
    name: 'username',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'recoveryEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'password',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'naturalName',
    index: 4,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 5,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountType',
    index: 6,
    enumType: ACCOUNT_TYPE,
  }],
};

export interface SignUpResponse {
  signedSession?: string,
  usernameIsAvailable?: boolean,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'usernameIsAvailable',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SignInRequestBody {
  username?: string,
  password?: string,
}

export let SIGN_IN_REQUEST_BODY: MessageDescriptor<SignInRequestBody> = {
  name: 'SignInRequestBody',
  fields: [{
    name: 'username',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'password',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SignInResponse {
  signedSession?: string,
}

export let SIGN_IN_RESPONSE: MessageDescriptor<SignInResponse> = {
  name: 'SignInResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdatePasswordRequestBody {
  currentPassword?: string,
  newPassword?: string,
}

export let UPDATE_PASSWORD_REQUEST_BODY: MessageDescriptor<UpdatePasswordRequestBody> = {
  name: 'UpdatePasswordRequestBody',
  fields: [{
    name: 'currentPassword',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'newPassword',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdatePasswordResponse {
}

export let UPDATE_PASSWORD_RESPONSE: MessageDescriptor<UpdatePasswordResponse> = {
  name: 'UpdatePasswordResponse',
  fields: [],
};

export interface UpdateRecoveryEmailRequestBody {
  currentPassword?: string,
  newEmail?: string,
}

export let UPDATE_RECOVERY_EMAIL_REQUEST_BODY: MessageDescriptor<UpdateRecoveryEmailRequestBody> = {
  name: 'UpdateRecoveryEmailRequestBody',
  fields: [{
    name: 'currentPassword',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'newEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateRecoveryEmailResponse {
}

export let UPDATE_RECOVERY_EMAIL_RESPONSE: MessageDescriptor<UpdateRecoveryEmailResponse> = {
  name: 'UpdateRecoveryEmailResponse',
  fields: [],
};

export interface CreateAccountRequestBody {
  naturalName?: string,
  contactEmail?: string,
  accountType?: AccountType,
}

export let CREATE_ACCOUNT_REQUEST_BODY: MessageDescriptor<CreateAccountRequestBody> = {
  name: 'CreateAccountRequestBody',
  fields: [{
    name: 'naturalName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountType',
    index: 3,
    enumType: ACCOUNT_TYPE,
  }],
};

export interface CreateAccountResponse {
  signedSession?: string,
}

export let CREATE_ACCOUNT_RESPONSE: MessageDescriptor<CreateAccountResponse> = {
  name: 'CreateAccountResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SwitchAccountRequestBody {
  accountId?: string,
}

export let SWITCH_ACCOUNT_REQUEST_BODY: MessageDescriptor<SwitchAccountRequestBody> = {
  name: 'SwitchAccountRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SwitchAccountResponse {
  signedSession?: string,
}

export let SWITCH_ACCOUNT_RESPONSE: MessageDescriptor<SwitchAccountResponse> = {
  name: 'SwitchAccountResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ListAccountsRequestBody {
}

export let LIST_ACCOUNTS_REQUEST_BODY: MessageDescriptor<ListAccountsRequestBody> = {
  name: 'ListAccountsRequestBody',
  fields: [],
};

export interface ListAccountsResponse {
  accounts?: Array<AccountSummary>,
}

export let LIST_ACCOUNTS_RESPONSE: MessageDescriptor<ListAccountsResponse> = {
  name: 'ListAccountsResponse',
  fields: [{
    name: 'accounts',
    index: 1,
    messageType: ACCOUNT_SUMMARY,
    isArray: true,
  }],
};

export interface UpdateAccountRequestBody {
  naturalName?: string,
  contactEmail?: string,
  description?: string,
}

export let UPDATE_ACCOUNT_REQUEST_BODY: MessageDescriptor<UpdateAccountRequestBody> = {
  name: 'UpdateAccountRequestBody',
  fields: [{
    name: 'naturalName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface UpdateAccountResponse {
}

export let UPDATE_ACCOUNT_RESPONSE: MessageDescriptor<UpdateAccountResponse> = {
  name: 'UpdateAccountResponse',
  fields: [],
};

export interface UploadAccountAvatarResponse {
}

export let UPLOAD_ACCOUNT_AVATAR_RESPONSE: MessageDescriptor<UploadAccountAvatarResponse> = {
  name: 'UploadAccountAvatarResponse',
  fields: [],
};

export interface GetAccountAndUserRequestBody {
}

export let GET_ACCOUNT_AND_USER_REQUEST_BODY: MessageDescriptor<GetAccountAndUserRequestBody> = {
  name: 'GetAccountAndUserRequestBody',
  fields: [],
};

export interface GetAccountAndUserResponse {
  account?: AccountAndUser,
}

export let GET_ACCOUNT_AND_USER_RESPONSE: MessageDescriptor<GetAccountAndUserResponse> = {
  name: 'GetAccountAndUserResponse',
  fields: [{
    name: 'account',
    index: 1,
    messageType: ACCOUNT_AND_USER,
  }],
};

export interface GetVideoPlayerSettingsRequestBody {
}

export let GET_VIDEO_PLAYER_SETTINGS_REQUEST_BODY: MessageDescriptor<GetVideoPlayerSettingsRequestBody> = {
  name: 'GetVideoPlayerSettingsRequestBody',
  fields: [],
};

export interface GetVideoPlayerSettingsResponse {
  settings?: VideoPlayerSettings,
}

export let GET_VIDEO_PLAYER_SETTINGS_RESPONSE: MessageDescriptor<GetVideoPlayerSettingsResponse> = {
  name: 'GetVideoPlayerSettingsResponse',
  fields: [{
    name: 'settings',
    index: 1,
    messageType: VIDEO_PLAYER_SETTINGS,
  }],
};

export interface SaveVideoPlayerSettingsRequestBody {
  settings?: VideoPlayerSettings,
}

export let SAVE_VIDEO_PLAYER_SETTINGS_REQUEST_BODY: MessageDescriptor<SaveVideoPlayerSettingsRequestBody> = {
  name: 'SaveVideoPlayerSettingsRequestBody',
  fields: [{
    name: 'settings',
    index: 1,
    messageType: VIDEO_PLAYER_SETTINGS,
  }],
};

export interface SaveVideoPlayerSettingsResponse {
}

export let SAVE_VIDEO_PLAYER_SETTINGS_RESPONSE: MessageDescriptor<SaveVideoPlayerSettingsResponse> = {
  name: 'SaveVideoPlayerSettingsResponse',
  fields: [],
};

export let SIGN_UP: RemoteCallDescriptor = {
  name: "SignUp",
  service: USER_WEB_SERVICE,
  path: "/SignUp",
  body: {
    messageType: SIGN_UP_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_UP_RESPONSE,
  },
}

export let SIGN_IN: RemoteCallDescriptor = {
  name: "SignIn",
  service: USER_WEB_SERVICE,
  path: "/SignIn",
  body: {
    messageType: SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_IN_RESPONSE,
  },
}

export let UPDATE_PASSWORD: RemoteCallDescriptor = {
  name: "UpdatePassword",
  service: USER_WEB_SERVICE,
  path: "/UpdatePassword",
  body: {
    messageType: UPDATE_PASSWORD_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_PASSWORD_RESPONSE,
  },
}

export let UPDATE_RECOVERY_EMAIL: RemoteCallDescriptor = {
  name: "UpdateRecoveryEmail",
  service: USER_WEB_SERVICE,
  path: "/UpdateRecoveryEmail",
  body: {
    messageType: UPDATE_RECOVERY_EMAIL_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_RECOVERY_EMAIL_RESPONSE,
  },
}

export let CREATE_ACCOUNT: RemoteCallDescriptor = {
  name: "CreateAccount",
  service: USER_WEB_SERVICE,
  path: "/CreateAccount",
  body: {
    messageType: CREATE_ACCOUNT_REQUEST_BODY,
  },
  response: {
    messageType: CREATE_ACCOUNT_RESPONSE,
  },
}

export let SWITCH_ACCOUNT: RemoteCallDescriptor = {
  name: "SwitchAccount",
  service: USER_WEB_SERVICE,
  path: "/SwitchAccount",
  body: {
    messageType: SWITCH_ACCOUNT_REQUEST_BODY,
  },
  response: {
    messageType: SWITCH_ACCOUNT_RESPONSE,
  },
}

export let LIST_ACCOUNTS: RemoteCallDescriptor = {
  name: "ListAccounts",
  service: USER_WEB_SERVICE,
  path: "/ListAccounts",
  body: {
    messageType: LIST_ACCOUNTS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_ACCOUNTS_RESPONSE,
  },
}

export let UPDATE_ACCOUNT: RemoteCallDescriptor = {
  name: "UpdateAccount",
  service: USER_WEB_SERVICE,
  path: "/UpdateAccount",
  body: {
    messageType: UPDATE_ACCOUNT_REQUEST_BODY,
  },
  response: {
    messageType: UPDATE_ACCOUNT_RESPONSE,
  },
}

export let UPLOAD_ACCOUNT_AVATAR: RemoteCallDescriptor = {
  name: "UploadAccountAvatar",
  service: USER_WEB_SERVICE,
  path: "/UploadAccountAvatar",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  response: {
    messageType: UPLOAD_ACCOUNT_AVATAR_RESPONSE,
  },
}

export let GET_ACCOUNT_AND_USER: RemoteCallDescriptor = {
  name: "GetAccountAndUser",
  service: USER_WEB_SERVICE,
  path: "/GetAccountAndUser",
  body: {
    messageType: GET_ACCOUNT_AND_USER_REQUEST_BODY,
  },
  response: {
    messageType: GET_ACCOUNT_AND_USER_RESPONSE,
  },
}

export let GET_VIDEO_PLAYER_SETTINGS: RemoteCallDescriptor = {
  name: "GetVideoPlayerSettings",
  service: USER_WEB_SERVICE,
  path: "/GetVideoPlayerSettings",
  body: {
    messageType: GET_VIDEO_PLAYER_SETTINGS_REQUEST_BODY,
  },
  response: {
    messageType: GET_VIDEO_PLAYER_SETTINGS_RESPONSE,
  },
}

export let SAVE_VIDEO_PLAYER_SETTINGS: RemoteCallDescriptor = {
  name: "SaveVideoPlayerSettings",
  service: USER_WEB_SERVICE,
  path: "/SaveVideoPlayerSettings",
  body: {
    messageType: SAVE_VIDEO_PLAYER_SETTINGS_REQUEST_BODY,
  },
  response: {
    messageType: SAVE_VIDEO_PLAYER_SETTINGS_RESPONSE,
  },
}
