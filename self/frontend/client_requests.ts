import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, UpdateUsernameRequestBody, UpdateUsernameResponse, UPDATE_USERNAME, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, UPDATE_RECOVERY_EMAIL, CreateAccountRequestBody, CreateAccountResponse, CREATE_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, SWITCH_ACCOUNT, ListAccountsRequestBody, ListAccountsResponse, LIST_ACCOUNTS, UpdateAccountRequestBody, UpdateAccountResponse, UPDATE_ACCOUNT, UploadAccountAvatarResponse, UPLOAD_ACCOUNT_AVATAR, GetAccountAndUserRequestBody, GetAccountAndUserResponse, GET_ACCOUNT_AND_USER } from './interface';

export function signUp(
  client: WebServiceClientInterface,
  body: SignUpRequestBody,
): Promise<SignUpResponse> {
  return client.send({
    descriptor: SIGN_UP,
    body,
  });
}

export function signIn(
  client: WebServiceClientInterface,
  body: SignInRequestBody,
): Promise<SignInResponse> {
  return client.send({
    descriptor: SIGN_IN,
    body,
  });
}

export function updatePassword(
  client: WebServiceClientInterface,
  body: UpdatePasswordRequestBody,
): Promise<UpdatePasswordResponse> {
  return client.send({
    descriptor: UPDATE_PASSWORD,
    body,
  });
}

export function updateUsername(
  client: WebServiceClientInterface,
  body: UpdateUsernameRequestBody,
): Promise<UpdateUsernameResponse> {
  return client.send({
    descriptor: UPDATE_USERNAME,
    body,
  });
}

export function updateRecoveryEmail(
  client: WebServiceClientInterface,
  body: UpdateRecoveryEmailRequestBody,
): Promise<UpdateRecoveryEmailResponse> {
  return client.send({
    descriptor: UPDATE_RECOVERY_EMAIL,
    body,
  });
}

export function createAccount(
  client: WebServiceClientInterface,
  body: CreateAccountRequestBody,
): Promise<CreateAccountResponse> {
  return client.send({
    descriptor: CREATE_ACCOUNT,
    body,
  });
}

export function switchAccount(
  client: WebServiceClientInterface,
  body: SwitchAccountRequestBody,
): Promise<SwitchAccountResponse> {
  return client.send({
    descriptor: SWITCH_ACCOUNT,
    body,
  });
}

export function listAccounts(
  client: WebServiceClientInterface,
  body: ListAccountsRequestBody,
): Promise<ListAccountsResponse> {
  return client.send({
    descriptor: LIST_ACCOUNTS,
    body,
  });
}

export function updateAccount(
  client: WebServiceClientInterface,
  body: UpdateAccountRequestBody,
): Promise<UpdateAccountResponse> {
  return client.send({
    descriptor: UPDATE_ACCOUNT,
    body,
  });
}

export function uploadAccountAvatar(
  client: WebServiceClientInterface,
  body: Blob,
): Promise<UploadAccountAvatarResponse> {
  return client.send({
    descriptor: UPLOAD_ACCOUNT_AVATAR,
    body,
  });
}

export function getAccountAndUser(
  client: WebServiceClientInterface,
  body: GetAccountAndUserRequestBody,
): Promise<GetAccountAndUserResponse> {
  return client.send({
    descriptor: GET_ACCOUNT_AND_USER,
    body,
  });
}
