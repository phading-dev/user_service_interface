import { SignUpRequestBody, SIGN_UP, SignUpResponse, SignInRequestBody, SIGN_IN, SignInResponse, UpdatePasswordRequestBody, UPDATE_PASSWORD, UpdatePasswordResponse, UpdateRecoveryEmailRequestBody, UPDATE_RECOVERY_EMAIL, UpdateRecoveryEmailResponse, CreateAccountRequestBody, CREATE_ACCOUNT, CreateAccountResponse, SwitchAccountRequestBody, SWITCH_ACCOUNT, SwitchAccountResponse, ListAccountsRequestBody, LIST_ACCOUNTS, ListAccountsResponse, UpdateAccountRequestBody, UPDATE_ACCOUNT, UpdateAccountResponse, UPLOAD_ACCOUNT_AVATAR, UploadAccountAvatarResponse, GetAccountAndUserRequestBody, GET_ACCOUNT_AND_USER, GetAccountAndUserResponse, GetVideoPlayerSettingsRequestBody, GET_VIDEO_PLAYER_SETTINGS, GetVideoPlayerSettingsResponse, SaveVideoPlayerSettingsRequestBody, SAVE_VIDEO_PLAYER_SETTINGS, SaveVideoPlayerSettingsResponse, GetUISettingsRequestBody, GET_U_I_SETTINGS, GetUISettingsResponse, SaveUISettingsRequestBody, SAVE_U_I_SETTINGS, SaveUISettingsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';
import { Readable } from 'stream';

export abstract class SignUpHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SIGN_UP;
  public abstract handle(
    loggingPrefix: string,
    body: SignUpRequestBody,
  ): Promise<SignUpResponse>;
}

export abstract class SignInHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SIGN_IN;
  public abstract handle(
    loggingPrefix: string,
    body: SignInRequestBody,
  ): Promise<SignInResponse>;
}

export abstract class UpdatePasswordHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    loggingPrefix: string,
    body: UpdatePasswordRequestBody,
    authStr: string,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class UpdateRecoveryEmailHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_RECOVERY_EMAIL;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateRecoveryEmailRequestBody,
    authStr: string,
  ): Promise<UpdateRecoveryEmailResponse>;
}

export abstract class CreateAccountHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: CreateAccountRequestBody,
    authStr: string,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: SwitchAccountRequestBody,
    authStr: string,
  ): Promise<SwitchAccountResponse>;
}

export abstract class ListAccountsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountsRequestBody,
    authStr: string,
  ): Promise<ListAccountsResponse>;
}

export abstract class UpdateAccountHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPDATE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: UpdateAccountRequestBody,
    authStr: string,
  ): Promise<UpdateAccountResponse>;
}

export abstract class UploadAccountAvatarHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = UPLOAD_ACCOUNT_AVATAR;
  public abstract handle(
    loggingPrefix: string,
    body: Readable,
    authStr: string,
  ): Promise<UploadAccountAvatarResponse>;
}

export abstract class GetAccountAndUserHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_AND_USER;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountAndUserRequestBody,
    authStr: string,
  ): Promise<GetAccountAndUserResponse>;
}

export abstract class GetVideoPlayerSettingsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_VIDEO_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: GetVideoPlayerSettingsRequestBody,
    authStr: string,
  ): Promise<GetVideoPlayerSettingsResponse>;
}

export abstract class SaveVideoPlayerSettingsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SAVE_VIDEO_PLAYER_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: SaveVideoPlayerSettingsRequestBody,
    authStr: string,
  ): Promise<SaveVideoPlayerSettingsResponse>;
}

export abstract class GetUISettingsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_U_I_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: GetUISettingsRequestBody,
    authStr: string,
  ): Promise<GetUISettingsResponse>;
}

export abstract class SaveUISettingsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SAVE_U_I_SETTINGS;
  public abstract handle(
    loggingPrefix: string,
    body: SaveUISettingsRequestBody,
    authStr: string,
  ): Promise<SaveUISettingsResponse>;
}
