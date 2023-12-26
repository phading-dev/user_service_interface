import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { AuthSettings, AUTH_SETTINGS } from './auth_settings';
import { WEB_CLIENT_SESSION } from '@phading/user_session_service_interface/web_client_session';
import { AccountSnapshot, ACCOUNT_SNAPSHOT, Account, ACCOUNT } from './account';

export interface SignUpRequestBody {
  username?: string,
  naturalName?: string,
  password?: string,
  accountType?: AccountType,
}

export let SIGN_UP_REQUEST_BODY: MessageDescriptor<SignUpRequestBody> = {
  name: 'SignUpRequestBody',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'password',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
  ]
};

export interface SignUpResponse {
/* If set, no other fields will be populated. */
  usernameIsNotAvailable?: boolean,
  signedSession?: string,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [
    {
      name: 'usernameIsNotAvailable',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let SIGN_UP: ServiceDescriptor = {
  name: "SignUp",
  path: "/SignUp",
  body: {
    messageType: SIGN_UP_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_UP_RESPONSE,
  },
}

export interface SignInRequestBody {
  username?: string,
  password?: string,
}

export let SIGN_IN_REQUEST_BODY: MessageDescriptor<SignInRequestBody> = {
  name: 'SignInRequestBody',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'password',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SignInResponse {
  signedSession?: string,
}

export let SIGN_IN_RESPONSE: MessageDescriptor<SignInResponse> = {
  name: 'SignInResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let SIGN_IN: ServiceDescriptor = {
  name: "SignIn",
  path: "/SignIn",
  body: {
    messageType: SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_IN_RESPONSE,
  },
}

export interface GetAuthSettingsRequestBody {
}

export let GET_AUTH_SETTINGS_REQUEST_BODY: MessageDescriptor<GetAuthSettingsRequestBody> = {
  name: 'GetAuthSettingsRequestBody',
  fields: [
  ]
};

export interface GetAuthSettingsResponse {
  authSettings?: AuthSettings,
}

export let GET_AUTH_SETTINGS_RESPONSE: MessageDescriptor<GetAuthSettingsResponse> = {
  name: 'GetAuthSettingsResponse',
  fields: [
    {
      name: 'authSettings',
      messageType: AUTH_SETTINGS,
    },
  ]
};

export let GET_AUTH_SETTINGS: ServiceDescriptor = {
  name: "GetAuthSettings",
  path: "/GetAuthSettings",
  body: {
    messageType: GET_AUTH_SETTINGS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_AUTH_SETTINGS_RESPONSE,
  },
}

export interface UpdatePasswordRequestBody {
  currentPassword?: string,
  newPassword?: string,
}

export let UPDATE_PASSWORD_REQUEST_BODY: MessageDescriptor<UpdatePasswordRequestBody> = {
  name: 'UpdatePasswordRequestBody',
  fields: [
    {
      name: 'currentPassword',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'newPassword',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdatePasswordResponse {
}

export let UPDATE_PASSWORD_RESPONSE: MessageDescriptor<UpdatePasswordResponse> = {
  name: 'UpdatePasswordResponse',
  fields: [
  ]
};

export let UPDATE_PASSWORD: ServiceDescriptor = {
  name: "UpdatePassword",
  path: "/UpdatePassword",
  body: {
    messageType: UPDATE_PASSWORD_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: UPDATE_PASSWORD_RESPONSE,
  },
}

export interface UpdateUsernameRequestBody {
  currentPassword?: string,
  newUsername?: string,
}

export let UPDATE_USERNAME_REQUEST_BODY: MessageDescriptor<UpdateUsernameRequestBody> = {
  name: 'UpdateUsernameRequestBody',
  fields: [
    {
      name: 'currentPassword',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'newUsername',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdateUsernameResponse {
  usernameIsNotAvailable?: boolean,
}

export let UPDATE_USERNAME_RESPONSE: MessageDescriptor<UpdateUsernameResponse> = {
  name: 'UpdateUsernameResponse',
  fields: [
    {
      name: 'usernameIsNotAvailable',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};

export let UPDATE_USERNAME: ServiceDescriptor = {
  name: "UpdateUsername",
  path: "/UpdateUsername",
  body: {
    messageType: UPDATE_USERNAME_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: UPDATE_USERNAME_RESPONSE,
  },
}

export interface UpdateRecoveryEmailRequestBody {
  currentPassword?: string,
  newEmail?: string,
}

export let UPDATE_RECOVERY_EMAIL_REQUEST_BODY: MessageDescriptor<UpdateRecoveryEmailRequestBody> = {
  name: 'UpdateRecoveryEmailRequestBody',
  fields: [
    {
      name: 'currentPassword',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'newEmail',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdateRecoveryEmailResponse {
}

export let UPDATE_RECOVERY_EMAIL_RESPONSE: MessageDescriptor<UpdateRecoveryEmailResponse> = {
  name: 'UpdateRecoveryEmailResponse',
  fields: [
  ]
};

export let UPDATE_RECOVERY_EMAIL: ServiceDescriptor = {
  name: "UpdateRecoveryEmail",
  path: "/UpdateRecoveryEmail",
  body: {
    messageType: UPDATE_RECOVERY_EMAIL_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: UPDATE_RECOVERY_EMAIL_RESPONSE,
  },
}

export interface CreateAccountRequestBody {
  naturalName?: string,
  accountType?: AccountType,
}

export let CREATE_ACCOUNT_REQUEST_BODY: MessageDescriptor<CreateAccountRequestBody> = {
  name: 'CreateAccountRequestBody',
  fields: [
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
  ]
};

export interface CreateAccountResponse {
  signedSession?: string,
}

export let CREATE_ACCOUNT_RESPONSE: MessageDescriptor<CreateAccountResponse> = {
  name: 'CreateAccountResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_ACCOUNT: ServiceDescriptor = {
  name: "CreateAccount",
  path: "/CreateAccount",
  body: {
    messageType: CREATE_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: CREATE_ACCOUNT_RESPONSE,
  },
}

export interface SwitchAccountRequestBody {
  accountId?: string,
}

export let SWITCH_ACCOUNT_REQUEST_BODY: MessageDescriptor<SwitchAccountRequestBody> = {
  name: 'SwitchAccountRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SwitchAccountResponse {
  signedSession?: string,
}

export let SWITCH_ACCOUNT_RESPONSE: MessageDescriptor<SwitchAccountResponse> = {
  name: 'SwitchAccountResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let SWITCH_ACCOUNT: ServiceDescriptor = {
  name: "SwitchAccount",
  path: "/SwitchAccount",
  body: {
    messageType: SWITCH_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: SWITCH_ACCOUNT_RESPONSE,
  },
}

export interface GetAccountTypeRequestBody {
}

export let GET_ACCOUNT_TYPE_REQUEST_BODY: MessageDescriptor<GetAccountTypeRequestBody> = {
  name: 'GetAccountTypeRequestBody',
  fields: [
  ]
};

export interface GetAccountTypeResponse {
  accountType?: AccountType,
}

export let GET_ACCOUNT_TYPE_RESPONSE: MessageDescriptor<GetAccountTypeResponse> = {
  name: 'GetAccountTypeResponse',
  fields: [
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
  ]
};

export let GET_ACCOUNT_TYPE: ServiceDescriptor = {
  name: "GetAccountType",
  path: "/GetAccountType",
  body: {
    messageType: GET_ACCOUNT_TYPE_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_ACCOUNT_TYPE_RESPONSE,
  },
}

export interface ListAccountsRequestBody {
  accountType?: AccountType,
}

export let LIST_ACCOUNTS_REQUEST_BODY: MessageDescriptor<ListAccountsRequestBody> = {
  name: 'ListAccountsRequestBody',
  fields: [
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
  ]
};

export interface ListAccountsResponse {
  accounts?: Array<AccountSnapshot>,
}

export let LIST_ACCOUNTS_RESPONSE: MessageDescriptor<ListAccountsResponse> = {
  name: 'ListAccountsResponse',
  fields: [
    {
      name: 'accounts',
      messageType: ACCOUNT_SNAPSHOT,
      isArray: true,
    },
  ]
};

export let LIST_ACCOUNTS: ServiceDescriptor = {
  name: "ListAccounts",
  path: "/ListAccounts",
  body: {
    messageType: LIST_ACCOUNTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: LIST_ACCOUNTS_RESPONSE,
  },
}

export interface UpdateAccountRequestBody {
  naturalName?: string,
  contactEmail?: string,
  description?: string,
}

export let UPDATE_ACCOUNT_REQUEST_BODY: MessageDescriptor<UpdateAccountRequestBody> = {
  name: 'UpdateAccountRequestBody',
  fields: [
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'contactEmail',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdateAccountResponse {
}

export let UPDATE_ACCOUNT_RESPONSE: MessageDescriptor<UpdateAccountResponse> = {
  name: 'UpdateAccountResponse',
  fields: [
  ]
};

export let UPDATE_ACCOUNT: ServiceDescriptor = {
  name: "UpdateAccount",
  path: "/UpdateAccount",
  body: {
    messageType: UPDATE_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: UPDATE_ACCOUNT_RESPONSE,
  },
}

export interface UploadAccountAvatarResponse {
}

export let UPLOAD_ACCOUNT_AVATAR_RESPONSE: MessageDescriptor<UploadAccountAvatarResponse> = {
  name: 'UploadAccountAvatarResponse',
  fields: [
  ]
};

export let UPLOAD_ACCOUNT_AVATAR: ServiceDescriptor = {
  name: "UploadAccountAvatar",
  path: "/UploadAccountAvatar",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: UPLOAD_ACCOUNT_AVATAR_RESPONSE,
  },
}

export interface GetAccountRequestBody {
}

export let GET_ACCOUNT_REQUEST_BODY: MessageDescriptor<GetAccountRequestBody> = {
  name: 'GetAccountRequestBody',
  fields: [
  ]
};

export interface GetAccountResponse {
  account?: Account,
}

export let GET_ACCOUNT_RESPONSE: MessageDescriptor<GetAccountResponse> = {
  name: 'GetAccountResponse',
  fields: [
    {
      name: 'account',
      messageType: ACCOUNT,
    },
  ]
};

export let GET_ACCOUNT: ServiceDescriptor = {
  name: "GetAccount",
  path: "/GetAccount",
  body: {
    messageType: GET_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: WEB_CLIENT_SESSION
  },
  response: {
    messageType: GET_ACCOUNT_RESPONSE,
  },
}
