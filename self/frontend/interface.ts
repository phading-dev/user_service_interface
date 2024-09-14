import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountType, ACCOUNT_TYPE } from '../../account_type';
import { AccountOverview, ACCOUNT_OVERVIEW, AccountAndUser, ACCOUNT_AND_USER } from './account';
import { WebRemoteCallDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';

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
  /* If set, no other fields will be populated. */
  usernameIsNotAvailable?: boolean,
  signedSession?: string,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [{
    name: 'usernameIsNotAvailable',
    index: 1,
    primitiveType: PrimitiveType.BOOLEAN,
  }, {
    name: 'signedSession',
    index: 2,
    primitiveType: PrimitiveType.STRING,
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
  accounts?: Array<AccountOverview>,
}

export let LIST_ACCOUNTS_RESPONSE: MessageDescriptor<ListAccountsResponse> = {
  name: 'ListAccountsResponse',
  fields: [{
    name: 'accounts',
    index: 1,
    messageType: ACCOUNT_OVERVIEW,
    isArray: true,
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

export let SIGN_UP: WebRemoteCallDescriptor = {
  name: "SignUp",
  path: "/SignUp",
  body: {
    messageType: SIGN_UP_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_UP_RESPONSE,
  },
}

export let SIGN_IN: WebRemoteCallDescriptor = {
  name: "SignIn",
  path: "/SignIn",
  body: {
    messageType: SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_IN_RESPONSE,
  },
}

export let UPDATE_PASSWORD: WebRemoteCallDescriptor = {
  name: "UpdatePassword",
  path: "/UpdatePassword",
  body: {
    messageType: UPDATE_PASSWORD_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_PASSWORD_RESPONSE,
  },
}

export let UPDATE_RECOVERY_EMAIL: WebRemoteCallDescriptor = {
  name: "UpdateRecoveryEmail",
  path: "/UpdateRecoveryEmail",
  body: {
    messageType: UPDATE_RECOVERY_EMAIL_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_RECOVERY_EMAIL_RESPONSE,
  },
}

export let CREATE_ACCOUNT: WebRemoteCallDescriptor = {
  name: "CreateAccount",
  path: "/CreateAccount",
  body: {
    messageType: CREATE_ACCOUNT_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: CREATE_ACCOUNT_RESPONSE,
  },
}

export let SWITCH_ACCOUNT: WebRemoteCallDescriptor = {
  name: "SwitchAccount",
  path: "/SwitchAccount",
  body: {
    messageType: SWITCH_ACCOUNT_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: SWITCH_ACCOUNT_RESPONSE,
  },
}

export let LIST_ACCOUNTS: WebRemoteCallDescriptor = {
  name: "ListAccounts",
  path: "/ListAccounts",
  body: {
    messageType: LIST_ACCOUNTS_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: LIST_ACCOUNTS_RESPONSE,
  },
}

export let UPDATE_ACCOUNT: WebRemoteCallDescriptor = {
  name: "UpdateAccount",
  path: "/UpdateAccount",
  body: {
    messageType: UPDATE_ACCOUNT_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: UPDATE_ACCOUNT_RESPONSE,
  },
}

export let UPLOAD_ACCOUNT_AVATAR: WebRemoteCallDescriptor = {
  name: "UploadAccountAvatar",
  path: "/UploadAccountAvatar",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  sessionKey: "sk",
  response: {
    messageType: UPLOAD_ACCOUNT_AVATAR_RESPONSE,
  },
}

export let GET_ACCOUNT_AND_USER: WebRemoteCallDescriptor = {
  name: "GetAccountAndUser",
  path: "/GetAccountAndUser",
  body: {
    messageType: GET_ACCOUNT_AND_USER_REQUEST_BODY,
  },
  sessionKey: "sk",
  response: {
    messageType: GET_ACCOUNT_AND_USER_RESPONSE,
  },
}
