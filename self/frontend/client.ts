import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, UpdateUsernameRequestBody, UpdateUsernameResponse, UPDATE_USERNAME, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, UPDATE_RECOVERY_EMAIL, CreateAccountRequestBody, CreateAccountResponse, CREATE_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, SWITCH_ACCOUNT, ListAccountsRequestBody, ListAccountsResponse, LIST_ACCOUNTS, UpdateAccountRequestBody, UpdateAccountResponse, UPDATE_ACCOUNT, UploadAccountAvatarResponse, UPLOAD_ACCOUNT_AVATAR, GetAccountAndUserRequestBody, GetAccountAndUserResponse, GET_ACCOUNT_AND_USER } from './interface';
import { WebClientInterface, WebClientOptions } from '@selfage/service_descriptor/client_interface';

export function signUp(
  client: WebClientInterface,
  body: SignUpRequestBody,
  options?: WebClientOptions,
): Promise<SignUpResponse> {
  return client.send(
    {
      descriptor: SIGN_UP,
      body,
    },
    options,
  );
}

export function signIn(
  client: WebClientInterface,
  body: SignInRequestBody,
  options?: WebClientOptions,
): Promise<SignInResponse> {
  return client.send(
    {
      descriptor: SIGN_IN,
      body,
    },
    options,
  );
}

export function updatePassword(
  client: WebClientInterface,
  body: UpdatePasswordRequestBody,
  options?: WebClientOptions,
): Promise<UpdatePasswordResponse> {
  return client.send(
    {
      descriptor: UPDATE_PASSWORD,
      body,
    },
    options,
  );
}

export function updateUsername(
  client: WebClientInterface,
  body: UpdateUsernameRequestBody,
  options?: WebClientOptions,
): Promise<UpdateUsernameResponse> {
  return client.send(
    {
      descriptor: UPDATE_USERNAME,
      body,
    },
    options,
  );
}

export function updateRecoveryEmail(
  client: WebClientInterface,
  body: UpdateRecoveryEmailRequestBody,
  options?: WebClientOptions,
): Promise<UpdateRecoveryEmailResponse> {
  return client.send(
    {
      descriptor: UPDATE_RECOVERY_EMAIL,
      body,
    },
    options,
  );
}

export function createAccount(
  client: WebClientInterface,
  body: CreateAccountRequestBody,
  options?: WebClientOptions,
): Promise<CreateAccountResponse> {
  return client.send(
    {
      descriptor: CREATE_ACCOUNT,
      body,
    },
    options,
  );
}

export function switchAccount(
  client: WebClientInterface,
  body: SwitchAccountRequestBody,
  options?: WebClientOptions,
): Promise<SwitchAccountResponse> {
  return client.send(
    {
      descriptor: SWITCH_ACCOUNT,
      body,
    },
    options,
  );
}

export function listAccounts(
  client: WebClientInterface,
  body: ListAccountsRequestBody,
  options?: WebClientOptions,
): Promise<ListAccountsResponse> {
  return client.send(
    {
      descriptor: LIST_ACCOUNTS,
      body,
    },
    options,
  );
}

export function updateAccount(
  client: WebClientInterface,
  body: UpdateAccountRequestBody,
  options?: WebClientOptions,
): Promise<UpdateAccountResponse> {
  return client.send(
    {
      descriptor: UPDATE_ACCOUNT,
      body,
    },
    options,
  );
}

export function uploadAccountAvatar(
  client: WebClientInterface,
  body: Blob,
  options?: WebClientOptions,
): Promise<UploadAccountAvatarResponse> {
  return client.send(
    {
      descriptor: UPLOAD_ACCOUNT_AVATAR,
      body,
    },
    options,
  );
}

export function getAccountAndUser(
  client: WebClientInterface,
  body: GetAccountAndUserRequestBody,
  options?: WebClientOptions,
): Promise<GetAccountAndUserResponse> {
  return client.send(
    {
      descriptor: GET_ACCOUNT_AND_USER,
      body,
    },
    options,
  );
}
