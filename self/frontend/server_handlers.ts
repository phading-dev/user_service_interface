import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_USERNAME, UpdateUsernameRequestBody, UpdateUsernameResponse, UPDATE_RECOVERY_EMAIL, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, CREATE_ACCOUNT, CreateAccountRequestBody, CreateAccountResponse, SWITCH_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, LIST_ACCOUNTS, ListAccountsRequestBody, ListAccountsResponse, UPDATE_ACCOUNT, UpdateAccountRequestBody, UpdateAccountResponse, UPLOAD_ACCOUNT_AVATAR, UploadAccountAvatarResponse, GET_ACCOUNT_AND_USER, GetAccountAndUserRequestBody, GetAccountAndUserResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';
import { Readable } from 'stream';

export abstract class SignUpHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SIGN_UP;
  public abstract handle(
    loggingPrefix: string,
    body: SignUpRequestBody,
  ): Promise<SignUpResponse>;
}

export abstract class SignInHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SIGN_IN;
  public abstract handle(
    loggingPrefix: string,
    body: SignInRequestBody,
  ): Promise<SignInResponse>;
}

export abstract class UpdatePasswordHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    loggingPrefix: string,
    body: UpdatePasswordRequestBody,
    auth: ClientSession,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class UpdateUsernameHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_USERNAME;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateUsernameRequestBody,
    auth: ClientSession,
  ): Promise<UpdateUsernameResponse>;
}

export abstract class UpdateRecoveryEmailHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_RECOVERY_EMAIL;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateRecoveryEmailRequestBody,
    auth: ClientSession,
  ): Promise<UpdateRecoveryEmailResponse>;
}

export abstract class CreateAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateAccountRequestBody,
    auth: ClientSession,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: SwitchAccountRequestBody,
    auth: ClientSession,
  ): Promise<SwitchAccountResponse>;
}

export abstract class ListAccountsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountsRequestBody,
    auth: ClientSession,
  ): Promise<ListAccountsResponse>;
}

export abstract class UpdateAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAccountRequestBody,
    auth: ClientSession,
  ): Promise<UpdateAccountResponse>;
}

export abstract class UploadAccountAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_ACCOUNT_AVATAR;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    auth: ClientSession,
  ): Promise<UploadAccountAvatarResponse>;
}

export abstract class GetAccountAndUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT_AND_USER;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountAndUserRequestBody,
    auth: ClientSession,
  ): Promise<GetAccountAndUserResponse>;
}
