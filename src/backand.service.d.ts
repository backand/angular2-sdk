export declare class BackandService {
    init(config: any): void;
    constants: any;
    helpers: any;
    defaults: any;
    object: any;
    file: any;
    query: any;
    user: any;
    useAnonymousAuth(): any;
    signin(username: string, password: string): any;
    signup(firstName: string, lastName: string, email: string, password: string, confirmPassword: string, parameters?: any): any;
    socialSignin(provider: string): any;
    socialSigninWithToken(provider: string, token: string): any;
    socialSignup(provider: string, email: string): any;
    requestResetPassword(username: string): any;
    resetPassword(newPassword: string, resetToken: string): any;
    changePassword(oldPassword: string, newPassword: string): any;
    signout(): any;
    getSocialProviders(): any;
    on(eventName: string, callback?: (response?: any) => void): void;
}
export declare class Response {
    status: number;
    statusText: string;
    headers: any;
    config: any;
    data: any;
}
