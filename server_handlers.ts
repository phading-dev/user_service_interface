import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, GET_USER_INFO, GetUserInfoRequestBody, GetUserInfoResponse, UPLOAD_AVATAR, UploadAvatarResponse, GET_USER_INFO_CARD, GetUserInfoCardRequestBody, GetUserInfoCardResponse, SET_USER_RELATIONSHIP, SetUserRelationshipRequestBody, SetUserRelationshipResponse } from './interface';
import { UserSession } from './user_session';
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

export abstract class GetUserInfoHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_USER_INFO;
  public abstract handle(
    requestId: string,
    body: GetUserInfoRequestBody,
    auth: UserSession,
  ): Promise<GetUserInfoResponse>;
}

export abstract class UploadAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: UserSession,
  ): Promise<UploadAvatarResponse>;
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
