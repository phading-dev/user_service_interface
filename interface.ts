import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from './account_type';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { AuthSettings, AUTH_SETTINGS } from './auth_settings';
import { USER_SESSION } from './user_session';
import { AccountShort, ACCOUNT_SHORT, AccountFull, ACCOUNT_FULL } from './account';
import { ObjectAccountFull, OBJECT_ACCOUNT_FULL, ObjectAccountRelationship, OBJECT_ACCOUNT_RELATIONSHIP } from './object_account';

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
    type: USER_SESSION
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
    type: USER_SESSION
  },
  response: {
    messageType: UPDATE_PASSWORD_RESPONSE,
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
    type: USER_SESSION
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
    type: USER_SESSION
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
    type: USER_SESSION
  },
  response: {
    messageType: SWITCH_ACCOUNT_RESPONSE,
  },
}

export interface RenewSessionRequestBody {
}

export let RENEW_SESSION_REQUEST_BODY: MessageDescriptor<RenewSessionRequestBody> = {
  name: 'RenewSessionRequestBody',
  fields: [
  ]
};

export interface RenewSessionResponse {
  signedSession?: string,
}

export let RENEW_SESSION_RESPONSE: MessageDescriptor<RenewSessionResponse> = {
  name: 'RenewSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let RENEW_SESSION: ServiceDescriptor = {
  name: "RenewSession",
  path: "/RenewSession",
  body: {
    messageType: RENEW_SESSION_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: RENEW_SESSION_RESPONSE,
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
    type: USER_SESSION
  },
  response: {
    messageType: GET_ACCOUNT_TYPE_RESPONSE,
  },
}

export interface ListOwnedAccountsRequestBody {
  accountType?: AccountType,
}

export let LIST_OWNED_ACCOUNTS_REQUEST_BODY: MessageDescriptor<ListOwnedAccountsRequestBody> = {
  name: 'ListOwnedAccountsRequestBody',
  fields: [
    {
      name: 'accountType',
      enumType: ACCOUNT_TYPE,
    },
  ]
};

export interface ListOwnedAccountsResponse {
  accounts?: Array<AccountShort>,
}

export let LIST_OWNED_ACCOUNTS_RESPONSE: MessageDescriptor<ListOwnedAccountsResponse> = {
  name: 'ListOwnedAccountsResponse',
  fields: [
    {
      name: 'accounts',
      messageType: ACCOUNT_SHORT,
      isArray: true,
    },
  ]
};

export let LIST_OWNED_ACCOUNTS: ServiceDescriptor = {
  name: "ListOwnedAccounts",
  path: "/ListOwnedAccounts",
  body: {
    messageType: LIST_OWNED_ACCOUNTS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: LIST_OWNED_ACCOUNTS_RESPONSE,
  },
}

export interface UpdateNaturalNameRequestBody {
  naturalName?: string,
}

export let UPDATE_NATURAL_NAME_REQUEST_BODY: MessageDescriptor<UpdateNaturalNameRequestBody> = {
  name: 'UpdateNaturalNameRequestBody',
  fields: [
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdateNaturalNameResponse {
}

export let UPDATE_NATURAL_NAME_RESPONSE: MessageDescriptor<UpdateNaturalNameResponse> = {
  name: 'UpdateNaturalNameResponse',
  fields: [
  ]
};

export let UPDATE_NATURAL_NAME: ServiceDescriptor = {
  name: "UpdateNaturalName",
  path: "/UpdateNaturalName",
  body: {
    messageType: UPDATE_NATURAL_NAME_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPDATE_NATURAL_NAME_RESPONSE,
  },
}

export interface UpdateContactEmailRequestBody {
  contactEmail?: string,
}

export let UPDATE_CONTACT_EMAIL_REQUEST_BODY: MessageDescriptor<UpdateContactEmailRequestBody> = {
  name: 'UpdateContactEmailRequestBody',
  fields: [
    {
      name: 'contactEmail',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdateContactEmailResponse {
}

export let UPDATE_CONTACT_EMAIL_RESPONSE: MessageDescriptor<UpdateContactEmailResponse> = {
  name: 'UpdateContactEmailResponse',
  fields: [
  ]
};

export let UPDATE_CONTACT_EMAIL: ServiceDescriptor = {
  name: "UpdateContactEmail",
  path: "/UpdateContactEmail",
  body: {
    messageType: UPDATE_CONTACT_EMAIL_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPDATE_CONTACT_EMAIL_RESPONSE,
  },
}

export interface UpdateDescriptionRequestBody {
  description?: string,
}

export let UPDATE_DESCRIPTION_REQUEST_BODY: MessageDescriptor<UpdateDescriptionRequestBody> = {
  name: 'UpdateDescriptionRequestBody',
  fields: [
    {
      name: 'description',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdateDescriptionResponse {
}

export let UPDATE_DESCRIPTION_RESPONSE: MessageDescriptor<UpdateDescriptionResponse> = {
  name: 'UpdateDescriptionResponse',
  fields: [
  ]
};

export let UPDATE_DESCRIPTION: ServiceDescriptor = {
  name: "UpdateDescription",
  path: "/UpdateDescription",
  body: {
    messageType: UPDATE_DESCRIPTION_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPDATE_DESCRIPTION_RESPONSE,
  },
}

export interface UploadAvatarResponse {
}

export let UPLOAD_AVATAR_RESPONSE: MessageDescriptor<UploadAvatarResponse> = {
  name: 'UploadAvatarResponse',
  fields: [
  ]
};

export let UPLOAD_AVATAR: ServiceDescriptor = {
  name: "UploadAvatar",
  path: "/UploadAvatar",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPLOAD_AVATAR_RESPONSE,
  },
}

export interface GetSubjectAccountRequestBody {
}

export let GET_SUBJECT_ACCOUNT_REQUEST_BODY: MessageDescriptor<GetSubjectAccountRequestBody> = {
  name: 'GetSubjectAccountRequestBody',
  fields: [
  ]
};

export interface GetSubjectAccountResponse {
  account?: AccountFull,
}

export let GET_SUBJECT_ACCOUNT_RESPONSE: MessageDescriptor<GetSubjectAccountResponse> = {
  name: 'GetSubjectAccountResponse',
  fields: [
    {
      name: 'account',
      messageType: ACCOUNT_FULL,
    },
  ]
};

export let GET_SUBJECT_ACCOUNT: ServiceDescriptor = {
  name: "GetSubjectAccount",
  path: "/GetSubjectAccount",
  body: {
    messageType: GET_SUBJECT_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_SUBJECT_ACCOUNT_RESPONSE,
  },
}

export interface GetObjectAccountRequestBody {
  accountId?: string,
}

export let GET_OBJECT_ACCOUNT_REQUEST_BODY: MessageDescriptor<GetObjectAccountRequestBody> = {
  name: 'GetObjectAccountRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetObjectAccountResponse {
  objectAccount?: ObjectAccountFull,
}

export let GET_OBJECT_ACCOUNT_RESPONSE: MessageDescriptor<GetObjectAccountResponse> = {
  name: 'GetObjectAccountResponse',
  fields: [
    {
      name: 'objectAccount',
      messageType: OBJECT_ACCOUNT_FULL,
    },
  ]
};

export let GET_OBJECT_ACCOUNT: ServiceDescriptor = {
  name: "GetObjectAccount",
  path: "/GetObjectAccount",
  body: {
    messageType: GET_OBJECT_ACCOUNT_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_OBJECT_ACCOUNT_RESPONSE,
  },
}

export interface SetObjectAccountRelationshipRequestBody {
  accountId?: string,
  relationship?: ObjectAccountRelationship,
}

export let SET_OBJECT_ACCOUNT_RELATIONSHIP_REQUEST_BODY: MessageDescriptor<SetObjectAccountRelationshipRequestBody> = {
  name: 'SetObjectAccountRelationshipRequestBody',
  fields: [
    {
      name: 'accountId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'relationship',
      enumType: OBJECT_ACCOUNT_RELATIONSHIP,
    },
  ]
};

export interface SetObjectAccountRelationshipResponse {
}

export let SET_OBJECT_ACCOUNT_RELATIONSHIP_RESPONSE: MessageDescriptor<SetObjectAccountRelationshipResponse> = {
  name: 'SetObjectAccountRelationshipResponse',
  fields: [
  ]
};

export let SET_OBJECT_ACCOUNT_RELATIONSHIP: ServiceDescriptor = {
  name: "SetObjectAccountRelationship",
  path: "/SetObjectAccountRelationship",
  body: {
    messageType: SET_OBJECT_ACCOUNT_RELATIONSHIP_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: SET_OBJECT_ACCOUNT_RELATIONSHIP_RESPONSE,
  },
}
