import { SignUpRequestBody, SIGN_UP, SignUpResponse, SignInRequestBody, SIGN_IN, SignInResponse, UpdatePasswordRequestBody, UPDATE_PASSWORD, UpdatePasswordResponse, UpdateUsernameRequestBody, UPDATE_USERNAME, UpdateUsernameResponse, UpdateRecoveryEmailRequestBody, UPDATE_RECOVERY_EMAIL, UpdateRecoveryEmailResponse, CreateAccountRequestBody, CREATE_ACCOUNT, CreateAccountResponse, SwitchAccountRequestBody, SWITCH_ACCOUNT, SwitchAccountResponse, ListAccountsRequestBody, LIST_ACCOUNTS, ListAccountsResponse, UpdateAccountRequestBody, UPDATE_ACCOUNT, UpdateAccountResponse, UPLOAD_ACCOUNT_AVATAR, UploadAccountAvatarResponse, GetAccountAndUserRequestBody, GET_ACCOUNT_AND_USER, GetAccountAndUserResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { Readable } from 'stream';

export abstract class SignUpHandlerInterface implements WebHandlerInterface {
  public descriptor = SIGN_UP;
  public abstract handle(
    loggingPrefix: string,
    body: SignUpRequestBody,
  ): Promise<SignUpResponse>;
}

export abstract class SignInHandlerInterface implements WebHandlerInterface {
  public descriptor = SIGN_IN;
  public abstract handle(
    loggingPrefix: string,
    body: SignInRequestBody,
  ): Promise<SignInResponse>;
}

export abstract class UpdatePasswordHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    loggingPrefix: string,
    body: UpdatePasswordRequestBody,
    auth: ClientSession,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class UpdateUsernameHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_USERNAME;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateUsernameRequestBody,
    auth: ClientSession,
  ): Promise<UpdateUsernameResponse>;
}

export abstract class UpdateRecoveryEmailHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_RECOVERY_EMAIL;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateRecoveryEmailRequestBody,
    auth: ClientSession,
  ): Promise<UpdateRecoveryEmailResponse>;
}

export abstract class CreateAccountHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateAccountRequestBody,
    auth: ClientSession,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements WebHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: SwitchAccountRequestBody,
    auth: ClientSession,
  ): Promise<SwitchAccountResponse>;
}

export abstract class ListAccountsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountsRequestBody,
    auth: ClientSession,
  ): Promise<ListAccountsResponse>;
}

export abstract class UpdateAccountHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAccountRequestBody,
    auth: ClientSession,
  ): Promise<UpdateAccountResponse>;
}

export abstract class UploadAccountAvatarHandlerInterface implements WebHandlerInterface {
  public descriptor = UPLOAD_ACCOUNT_AVATAR;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    auth: ClientSession,
  ): Promise<UploadAccountAvatarResponse>;
}

export abstract class GetAccountAndUserHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_ACCOUNT_AND_USER;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountAndUserRequestBody,
    auth: ClientSession,
  ): Promise<GetAccountAndUserResponse>;
}
