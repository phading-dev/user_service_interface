import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, UPDATE_RECOVERY_EMAIL, CreateAccountRequestBody, CreateAccountResponse, CREATE_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, SWITCH_ACCOUNT, ListAccountsRequestBody, ListAccountsResponse, LIST_ACCOUNTS, UpdateAccountRequestBody, UpdateAccountResponse, UPDATE_ACCOUNT, UploadAccountAvatarResponse, UPLOAD_ACCOUNT_AVATAR, GetAccountAndUserRequestBody, GetAccountAndUserResponse, GET_ACCOUNT_AND_USER, GetVideoPlayerSettingsRequestBody, GetVideoPlayerSettingsResponse, GET_VIDEO_PLAYER_SETTINGS, SaveVideoPlayerSettingsRequestBody, SaveVideoPlayerSettingsResponse, SAVE_VIDEO_PLAYER_SETTINGS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newSignUpRequest(
  body: SignUpRequestBody,
): ClientRequestInterface<SignUpResponse> {
  return {
    descriptor: SIGN_UP,
    body,
  };
}

export function newSignInRequest(
  body: SignInRequestBody,
): ClientRequestInterface<SignInResponse> {
  return {
    descriptor: SIGN_IN,
    body,
  };
}

export function newUpdatePasswordRequest(
  body: UpdatePasswordRequestBody,
): ClientRequestInterface<UpdatePasswordResponse> {
  return {
    descriptor: UPDATE_PASSWORD,
    body,
  };
}

export function newUpdateRecoveryEmailRequest(
  body: UpdateRecoveryEmailRequestBody,
): ClientRequestInterface<UpdateRecoveryEmailResponse> {
  return {
    descriptor: UPDATE_RECOVERY_EMAIL,
    body,
  };
}

export function newCreateAccountRequest(
  body: CreateAccountRequestBody,
): ClientRequestInterface<CreateAccountResponse> {
  return {
    descriptor: CREATE_ACCOUNT,
    body,
  };
}

export function newSwitchAccountRequest(
  body: SwitchAccountRequestBody,
): ClientRequestInterface<SwitchAccountResponse> {
  return {
    descriptor: SWITCH_ACCOUNT,
    body,
  };
}

export function newListAccountsRequest(
  body: ListAccountsRequestBody,
): ClientRequestInterface<ListAccountsResponse> {
  return {
    descriptor: LIST_ACCOUNTS,
    body,
  };
}

export function newUpdateAccountRequest(
  body: UpdateAccountRequestBody,
): ClientRequestInterface<UpdateAccountResponse> {
  return {
    descriptor: UPDATE_ACCOUNT,
    body,
  };
}

export function newUploadAccountAvatarRequest(
  body: Blob,
): ClientRequestInterface<UploadAccountAvatarResponse> {
  return {
    descriptor: UPLOAD_ACCOUNT_AVATAR,
    body,
  };
}

export function newGetAccountAndUserRequest(
  body: GetAccountAndUserRequestBody,
): ClientRequestInterface<GetAccountAndUserResponse> {
  return {
    descriptor: GET_ACCOUNT_AND_USER,
    body,
  };
}

export function newGetVideoPlayerSettingsRequest(
  body: GetVideoPlayerSettingsRequestBody,
): ClientRequestInterface<GetVideoPlayerSettingsResponse> {
  return {
    descriptor: GET_VIDEO_PLAYER_SETTINGS,
    body,
  };
}

export function newSaveVideoPlayerSettingsRequest(
  body: SaveVideoPlayerSettingsRequestBody,
): ClientRequestInterface<SaveVideoPlayerSettingsResponse> {
  return {
    descriptor: SAVE_VIDEO_PLAYER_SETTINGS,
    body,
  };
}
