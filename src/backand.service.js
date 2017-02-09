"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const backand = require("@backand/vanilla-sdk");
let BackandService = class BackandService {
    init(config) {
        backand.init(config);
        Object.keys(backand).forEach(key => {
            this[key] = backand[key];
        });
    }
    // auth
    useAnonymousAuth() { }
    ;
    signin(username, password) { }
    ;
    signup(firstName, lastName, email, password, confirmPassword, parameters) { }
    ;
    socialSignin(provider) { }
    ;
    socialSigninWithToken(provider, token) { }
    ;
    socialSignup(provider, email) { }
    ;
    requestResetPassword(username) { }
    ;
    resetPassword(newPassword, resetToken) { }
    ;
    changePassword(oldPassword, newPassword) { }
    ;
    signout() { }
    ;
    getSocialProviders() { }
    ;
    // socket
    on(eventName, callback) { }
    ;
};
BackandService = __decorate([
    core_1.Injectable()
], BackandService);
exports.BackandService = BackandService;
class Response {
}
exports.Response = Response;
