import { SignUpRequestBody, SIGN_UP, SignUpResponse, SignInRequestBody, SIGN_IN, SignInResponse, UpdatePasswordRequestBody, UPDATE_PASSWORD, UpdatePasswordResponse, UpdateRecoveryEmailRequestBody, UPDATE_RECOVERY_EMAIL, UpdateRecoveryEmailResponse, CreateAccountRequestBody, CREATE_ACCOUNT, CreateAccountResponse, SwitchAccountRequestBody, SWITCH_ACCOUNT, SwitchAccountResponse, ListAccountsRequestBody, LIST_ACCOUNTS, ListAccountsResponse, UpdateAccountRequestBody, UPDATE_ACCOUNT, UpdateAccountResponse, UPLOAD_ACCOUNT_AVATAR, UploadAccountAvatarResponse, GetAccountAndUserRequestBody, GET_ACCOUNT_AND_USER, GetAccountAndUserResponse, GetVideoPlayerSettingsRequestBody, GET_VIDEO_PLAYER_SETTINGS, GetVideoPlayerSettingsResponse, SaveVideoPlayerSettingsRequestBody, SAVE_VIDEO_PLAYER_SETTINGS, SaveVideoPlayerSettingsResponse } from './interface';
import { WebHandlerInterface } from '@selfage/service_descriptor/handler_interface';
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
    sessionStr: string,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class UpdateRecoveryEmailHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_RECOVERY_EMAIL;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateRecoveryEmailRequestBody,
    sessionStr: string,
  ): Promise<UpdateRecoveryEmailResponse>;
}

export abstract class CreateAccountHandlerInterface implements WebHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateAccountRequestBody,
    sessionStr: string,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements WebHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: SwitchAccountRequestBody,
    sessionStr: string,
  ): Promise<SwitchAccountResponse>;
}

export abstract class ListAccountsHandlerInterface implements WebHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountsRequestBody,
    sessionStr: string,
  ): Promise<ListAccountsResponse>;
}

export abstract class UpdateAccountHandlerInterface implements WebHandlerInterface {
  public descriptor = UPDATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAccountRequestBody,
    sessionStr: string,
  ): Promise<UpdateAccountResponse>;
}

export abstract class UploadAccountAvatarHandlerInterface implements WebHandlerInterface {
  public descriptor = UPLOAD_ACCOUNT_AVATAR;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    sessionStr: string,
  ): Promise<UploadAccountAvatarResponse>;
}

export abstract class GetAccountAndUserHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_ACCOUNT_AND_USER;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountAndUserRequestBody,
    sessionStr: string,
  ): Promise<GetAccountAndUserResponse>;
}

export abstract class GetVideoPlayerSettingsHandlerInterface implements WebHandlerInterface {
  public descriptor = GET_VIDEO_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoPlayerSettingsRequestBody,
    sessionStr: string,
  ): Promise<GetVideoPlayerSettingsResponse>;
}

export abstract class SaveVideoPlayerSettingsHandlerInterface implements WebHandlerInterface {
  public descriptor = SAVE_VIDEO_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: SaveVideoPlayerSettingsRequestBody,
    sessionStr: string,
  ): Promise<SaveVideoPlayerSettingsResponse>;
}
