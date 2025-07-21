import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';
import { AccountSummary, ACCOUNT_SUMMARY, AccountAndUser, ACCOUNT_AND_USER } from './account';
import { VideoPlayerSettings, VIDEO_PLAYER_SETTINGS } from './video_player_settings';
import { UISettings, U_I_SETTINGS } from './ui_settings';
import { USER_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';

export interface SignUpRequestBody {
  userEmail?: string,
  password?: string,
  name?: string,
  accountType?: AccountType,
}

export let SIGN_UP_REQUEST_BODY: MessageDescriptor<SignUpRequestBody> = {
  name: 'SignUpRequestBody',
  fields: [{
    name: 'userEmail',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'password',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'name',
    index: 3,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountType',
    index: 4,
    enumType: ACCOUNT_TYPE,
  }],
};

export interface SignUpResponse {
  signedSession?: string,
  userEmailUnavailable?: boolean,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'userEmailUnavailable',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SignInRequestBody {
  userEmail?: string,
  password?: string,
}

export let SIGN_IN_REQUEST_BODY: MessageDescriptor<SignInRequestBody> = {
  name: 'SignInRequestBody',
  fields: [{
    name: 'userEmail',
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
  needsEmailVerification?: boolean,
}

export let SIGN_IN_RESPONSE: MessageDescriptor<SignInResponse> = {
  name: 'SignInResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'needsEmailVerification',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SendEmailVerificationEmailRequestBody {
  userEmail?: string,
}

export let SEND_EMAIL_VERIFICATION_EMAIL_REQUEST_BODY: MessageDescriptor<SendEmailVerificationEmailRequestBody> = {
  name: 'SendEmailVerificationEmailRequestBody',
  fields: [{
    name: 'userEmail',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SendEmailVerificationEmailResponse {
  rateLimited?: boolean,
}

export let SEND_EMAIL_VERIFICATION_EMAIL_RESPONSE: MessageDescriptor<SendEmailVerificationEmailResponse> = {
  name: 'SendEmailVerificationEmailResponse',
  fields: [{
    name: 'rateLimited',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface VerifyEmailAndSignInRequestBody {
  verificationToken?: string,
}

export let VERIFY_EMAIL_AND_SIGN_IN_REQUEST_BODY: MessageDescriptor<VerifyEmailAndSignInRequestBody> = {
  name: 'VerifyEmailAndSignInRequestBody',
  fields: [{
    name: 'verificationToken',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface VerifyEmailAndSignInResponse {
  signedSession?: string,
  tokenExpired?: boolean,
}

export let VERIFY_EMAIL_AND_SIGN_IN_RESPONSE: MessageDescriptor<VerifyEmailAndSignInResponse> = {
  name: 'VerifyEmailAndSignInResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'tokenExpired',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface SendPasswordResetEmailRequestBody {
  userEmail?: string,
}

export let SEND_PASSWORD_RESET_EMAIL_REQUEST_BODY: MessageDescriptor<SendPasswordResetEmailRequestBody> = {
  name: 'SendPasswordResetEmailRequestBody',
  fields: [{
    name: 'userEmail',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SendPasswordResetEmailResponse {
  rateLimited?: boolean,
}

export let SEND_PASSWORD_RESET_EMAIL_RESPONSE: MessageDescriptor<SendPasswordResetEmailResponse> = {
  name: 'SendPasswordResetEmailResponse',
  fields: [{
    name: 'rateLimited',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }],
};

export interface ResetPasswordAndSignInRequestBody {
  resetToken?: string,
  newPassword?: string,
}

export let RESET_PASSWORD_AND_SIGN_IN_REQUEST_BODY: MessageDescriptor<ResetPasswordAndSignInRequestBody> = {
  name: 'ResetPasswordAndSignInRequestBody',
  fields: [{
    name: 'resetToken',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'newPassword',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ResetPasswordAndSignInResponse {
  signedSession?: string,
  tokenExpired?: boolean,
}

export let RESET_PASSWORD_AND_SIGN_IN_RESPONSE: MessageDescriptor<ResetPasswordAndSignInResponse> = {
  name: 'ResetPasswordAndSignInResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'tokenExpired',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
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

export interface UpdateUserEmailRequestBody {
  currentPassword?: string,
  newEmail?: string,
}

export let UPDATE_USER_EMAIL_REQUEST_BODY: MessageDescriptor<UpdateUserEmailRequestBody> = {
  name: 'UpdateUserEmailRequestBody',
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

export interface UpdateUserEmailResponse {
}

export let UPDATE_USER_EMAIL_RESPONSE: MessageDescriptor<UpdateUserEmailResponse> = {
  name: 'UpdateUserEmailResponse',
  fields: [],
};

export interface CreateAccountRequestBody {
  name?: string,
  accountType?: AccountType,
}

export let CREATE_ACCOUNT_REQUEST_BODY: MessageDescriptor<CreateAccountRequestBody> = {
  name: 'CreateAccountRequestBody',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'accountType',
    index: 2,
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
  notFound?: boolean,
}

export let SWITCH_ACCOUNT_RESPONSE: MessageDescriptor<SwitchAccountResponse> = {
  name: 'SwitchAccountResponse',
  fields: [{
    name: 'signedSession',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'notFound',
    index: 2,
    primitiveType: PrimitiveType.BOOLEAN,
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
  name?: string,
  description?: string,
}

export let UPDATE_ACCOUNT_REQUEST_BODY: MessageDescriptor<UpdateAccountRequestBody> = {
  name: 'UpdateAccountRequestBody',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'description',
    index: 2,
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

export interface GetUISettingsRequestBody {
}

export let GET_U_I_SETTINGS_REQUEST_BODY: MessageDescriptor<GetUISettingsRequestBody> = {
  name: 'GetUISettingsRequestBody',
  fields: [],
};

export interface GetUISettingsResponse {
  settings?: UISettings,
}

export let GET_U_I_SETTINGS_RESPONSE: MessageDescriptor<GetUISettingsResponse> = {
  name: 'GetUISettingsResponse',
  fields: [{
    name: 'settings',
    index: 1,
    messageType: U_I_SETTINGS,
  }],
};

export interface SaveUISettingsRequestBody {
  settings?: UISettings,
}

export let SAVE_U_I_SETTINGS_REQUEST_BODY: MessageDescriptor<SaveUISettingsRequestBody> = {
  name: 'SaveUISettingsRequestBody',
  fields: [{
    name: 'settings',
    index: 1,
    messageType: U_I_SETTINGS,
  }],
};

export interface SaveUISettingsResponse {
}

export let SAVE_U_I_SETTINGS_RESPONSE: MessageDescriptor<SaveUISettingsResponse> = {
  name: 'SaveUISettingsResponse',
  fields: [],
};

export let SIGN_UP: RemoteCallDescriptor = {
  name: "SignUp",
  service: USER_WEB_SERVICE,
  path: "/s/SignUp",
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
  path: "/s/SignIn",
  body: {
    messageType: SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_IN_RESPONSE,
  },
}

export let SEND_EMAIL_VERIFICATION_EMAIL: RemoteCallDescriptor = {
  name: "SendEmailVerificationEmail",
  service: USER_WEB_SERVICE,
  path: "/s/SendEmailVerificationEmail",
  body: {
    messageType: SEND_EMAIL_VERIFICATION_EMAIL_REQUEST_BODY,
  },
  response: {
    messageType: SEND_EMAIL_VERIFICATION_EMAIL_RESPONSE,
  },
}

export let VERIFY_EMAIL_AND_SIGN_IN: RemoteCallDescriptor = {
  name: "VerifyEmailAndSignIn",
  service: USER_WEB_SERVICE,
  path: "/s/VerifyEmailAndSignIn",
  body: {
    messageType: VERIFY_EMAIL_AND_SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: VERIFY_EMAIL_AND_SIGN_IN_RESPONSE,
  },
}

export let SEND_PASSWORD_RESET_EMAIL: RemoteCallDescriptor = {
  name: "SendPasswordResetEmail",
  service: USER_WEB_SERVICE,
  path: "/s/SendPasswordResetEmail",
  body: {
    messageType: SEND_PASSWORD_RESET_EMAIL_REQUEST_BODY,
  },
  response: {
    messageType: SEND_PASSWORD_RESET_EMAIL_RESPONSE,
  },
}

export let RESET_PASSWORD_AND_SIGN_IN: RemoteCallDescriptor = {
  name: "ResetPasswordAndSignIn",
  service: USER_WEB_SERVICE,
  path: "/s/ResetPasswordAndSignIn",
  body: {
    messageType: RESET_PASSWORD_AND_SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: RESET_PASSWORD_AND_SIGN_IN_RESPONSE,
  },
}

export let UPDATE_PASSWORD: RemoteCallDescriptor = {
  name: "UpdatePassword",
  service: USER_WEB_SERVICE,
  path: "/s/UpdatePassword",
  body: {
    messageType: UPDATE_PASSWORD_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_PASSWORD_RESPONSE,
  },
}

export let UPDATE_USER_EMAIL: RemoteCallDescriptor = {
  name: "UpdateUserEmail",
  service: USER_WEB_SERVICE,
  path: "/s/UpdateUserEmail",
  body: {
    messageType: UPDATE_USER_EMAIL_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_USER_EMAIL_RESPONSE,
  },
}

export let CREATE_ACCOUNT: RemoteCallDescriptor = {
  name: "CreateAccount",
  service: USER_WEB_SERVICE,
  path: "/s/CreateAccount",
  body: {
    messageType: CREATE_ACCOUNT_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: CREATE_ACCOUNT_RESPONSE,
  },
}

export let SWITCH_ACCOUNT: RemoteCallDescriptor = {
  name: "SwitchAccount",
  service: USER_WEB_SERVICE,
  path: "/s/SwitchAccount",
  body: {
    messageType: SWITCH_ACCOUNT_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SWITCH_ACCOUNT_RESPONSE,
  },
}

export let LIST_ACCOUNTS: RemoteCallDescriptor = {
  name: "ListAccounts",
  service: USER_WEB_SERVICE,
  path: "/s/ListAccounts",
  body: {
    messageType: LIST_ACCOUNTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: LIST_ACCOUNTS_RESPONSE,
  },
}

export let UPDATE_ACCOUNT: RemoteCallDescriptor = {
  name: "UpdateAccount",
  service: USER_WEB_SERVICE,
  path: "/s/UpdateAccount",
  body: {
    messageType: UPDATE_ACCOUNT_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: UPDATE_ACCOUNT_RESPONSE,
  },
}

export let UPLOAD_ACCOUNT_AVATAR: RemoteCallDescriptor = {
  name: "UploadAccountAvatar",
  service: USER_WEB_SERVICE,
  path: "/s/UploadAccountAvatar",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  authKey: "a",
  response: {
    messageType: UPLOAD_ACCOUNT_AVATAR_RESPONSE,
  },
}

export let GET_ACCOUNT_AND_USER: RemoteCallDescriptor = {
  name: "GetAccountAndUser",
  service: USER_WEB_SERVICE,
  path: "/s/GetAccountAndUser",
  body: {
    messageType: GET_ACCOUNT_AND_USER_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_ACCOUNT_AND_USER_RESPONSE,
  },
}

export let GET_VIDEO_PLAYER_SETTINGS: RemoteCallDescriptor = {
  name: "GetVideoPlayerSettings",
  service: USER_WEB_SERVICE,
  path: "/s/GetVideoPlayerSettings",
  body: {
    messageType: GET_VIDEO_PLAYER_SETTINGS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_VIDEO_PLAYER_SETTINGS_RESPONSE,
  },
}

export let SAVE_VIDEO_PLAYER_SETTINGS: RemoteCallDescriptor = {
  name: "SaveVideoPlayerSettings",
  service: USER_WEB_SERVICE,
  path: "/s/SaveVideoPlayerSettings",
  body: {
    messageType: SAVE_VIDEO_PLAYER_SETTINGS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SAVE_VIDEO_PLAYER_SETTINGS_RESPONSE,
  },
}

export let GET_U_I_SETTINGS: RemoteCallDescriptor = {
  name: "GetUISettings",
  service: USER_WEB_SERVICE,
  path: "/s/GetUISettings",
  body: {
    messageType: GET_U_I_SETTINGS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_U_I_SETTINGS_RESPONSE,
  },
}

export let SAVE_U_I_SETTINGS: RemoteCallDescriptor = {
  name: "SaveUISettings",
  service: USER_WEB_SERVICE,
  path: "/s/SaveUISettings",
  body: {
    messageType: SAVE_U_I_SETTINGS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SAVE_U_I_SETTINGS_RESPONSE,
  },
}
