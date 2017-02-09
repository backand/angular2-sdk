import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import * as backand from '@backand/vanilla-sdk'

@Injectable()
export class BackandService {
  init(config: any): void {
    backand.init(config);
    if (config.observable) {
      Object.keys(backand).forEach(key => {
        this[key] = Observable.fromPromise(backand[key]);
      });
    }
    else {
      Object.keys(backand).forEach(key => {
        this[key] = backand[key];
      });
    }
  }
  constants: any;
  helpers: any;
  defaults: any;
  object: any;
  file: any;
  query: any;
  user: any;
  socket: any;
  // auth
  useAnonymousAuth (): any {};
  signin (username: string, password: string): any {};
  signup (firstName: string, lastName: string, email: string, password: string, confirmPassword: string, parameters?: any): any {};
  socialSignin (provider: string): any {};
  socialSigninWithToken (provider: string, token: string): any {};
  socialSignup (provider: string, email: string): any {};
  requestResetPassword (username: string): any {};
  resetPassword (newPassword: string, resetToken: string): any {};
  changePassword (oldPassword: string, newPassword: string): any {};
  signout (): any {};
  getSocialProviders (): any {};
  // socket
  on (eventName: string, callback?: (response?: any) => void): void {};
}

export class Response {
  status: number;
  statusText: string;
  headers: any;
  config: any;
  data: any;
}
