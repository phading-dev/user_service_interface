import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, UPLOAD_AVATAR, UploadAvatarResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, DELETE_USER, DeleteUserRequestBody, DeleteUserResponse, GET_USER_PROFILE, GetUserProfileRequestBody, GetUserProfileResponse, GET_USER_INFO_CARD, GetUserInfoCardRequestBody, GetUserInfoCardResponse, SET_USER_RELATIONSHIP, SetUserRelationshipRequestBody, SetUserRelationshipResponse, REFRESH_USER_SESSION, RefreshUserSessionRequestBody, RefreshUserSessionResponse } from './interface';
import { Readable } from 'stream';
import { UserSession } from './user_session';

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

export abstract class UploadAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: UserSession,
  ): Promise<UploadAvatarResponse>;
}

export abstract class UpdatePasswordHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    requestId: string,
    body: UpdatePasswordRequestBody,
    auth: UserSession,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class DeleteUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = DELETE_USER;
  public abstract handle(
    requestId: string,
    body: DeleteUserRequestBody,
    auth: UserSession,
  ): Promise<DeleteUserResponse>;
}

export abstract class GetUserProfileHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_USER_PROFILE;
  public abstract handle(
    requestId: string,
    body: GetUserProfileRequestBody,
    auth: UserSession,
  ): Promise<GetUserProfileResponse>;
}

export abstract class GetUserInfoCardHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_USER_INFO_CARD;
  public abstract handle(
    requestId: string,
    body: GetUserInfoCardRequestBody,
    auth: UserSession,
  ): Promise<GetUserInfoCardResponse>;
}

export abstract class SetUserRelationshipHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SET_USER_RELATIONSHIP;
  public abstract handle(
    requestId: string,
    body: SetUserRelationshipRequestBody,
    auth: UserSession,
  ): Promise<SetUserRelationshipResponse>;
}

export abstract class RefreshUserSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = REFRESH_USER_SESSION;
  public abstract handle(
    requestId: string,
    body: RefreshUserSessionRequestBody,
    auth: UserSession,
  ): Promise<RefreshUserSessionResponse>;
}
