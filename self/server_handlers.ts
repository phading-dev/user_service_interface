import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, GET_AUTH_SETTINGS, GetAuthSettingsRequestBody, GetAuthSettingsResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_USERNAME, UpdateUsernameRequestBody, UpdateUsernameResponse, UPDATE_RECOVERY_EMAIL, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, CREATE_ACCOUNT, CreateAccountRequestBody, CreateAccountResponse, SWITCH_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, GET_ACCOUNT_TYPE, GetAccountTypeRequestBody, GetAccountTypeResponse, LIST_ACCOUNTS, ListAccountsRequestBody, ListAccountsResponse, UPDATE_ACCOUNT, UpdateAccountRequestBody, UpdateAccountResponse, UPLOAD_ACCOUNT_AVATAR, UploadAccountAvatarResponse, GET_ACCOUNT, GetAccountRequestBody, GetAccountResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';
import { Readable } from 'stream';

export abstract class SignUpHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SIGN_UP;
  public abstract handle(
    requestId: string,
    body: SignUpRequestBody,
  ): Promise<SignUpResponse>;
}

export abstract class SignInHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SIGN_IN;
  public abstract handle(
    requestId: string,
    body: SignInRequestBody,
  ): Promise<SignInResponse>;
}

export abstract class GetAuthSettingsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_AUTH_SETTINGS;
  public abstract handle(
    requestId: string,
    body: GetAuthSettingsRequestBody,
    auth: WebClientSession,
  ): Promise<GetAuthSettingsResponse>;
}

export abstract class UpdatePasswordHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    requestId: string,
    body: UpdatePasswordRequestBody,
    auth: WebClientSession,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class UpdateUsernameHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_USERNAME;
  public abstract handle(
    requestId: string,
    body: UpdateUsernameRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateUsernameResponse>;
}

export abstract class UpdateRecoveryEmailHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_RECOVERY_EMAIL;
  public abstract handle(
    requestId: string,
    body: UpdateRecoveryEmailRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateRecoveryEmailResponse>;
}

export abstract class CreateAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: CreateAccountRequestBody,
    auth: WebClientSession,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: SwitchAccountRequestBody,
    auth: WebClientSession,
  ): Promise<SwitchAccountResponse>;
}

export abstract class GetAccountTypeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT_TYPE;
  public abstract handle(
    requestId: string,
    body: GetAccountTypeRequestBody,
    auth: WebClientSession,
  ): Promise<GetAccountTypeResponse>;
}

export abstract class ListAccountsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    requestId: string,
    body: ListAccountsRequestBody,
    auth: WebClientSession,
  ): Promise<ListAccountsResponse>;
}

export abstract class UpdateAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: UpdateAccountRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateAccountResponse>;
}

export abstract class UploadAccountAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_ACCOUNT_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: WebClientSession,
  ): Promise<UploadAccountAvatarResponse>;
}

export abstract class GetAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetAccountRequestBody,
    auth: WebClientSession,
  ): Promise<GetAccountResponse>;
}
