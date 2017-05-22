"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var backand = require("@backand/vanilla-sdk");
var BackandService = (function () {
    function BackandService() {
    }
    BackandService.prototype.init = function (config) {
        var _this = this;
        backand.init(config);
        if (config.observable) {
            Object.keys(backand).forEach(function (key) {
                _this[key] = rxjs_1.Observable.fromPromise(backand[key]);
            });
        }
        else {
            Object.keys(backand).forEach(function (key) {
                _this[key] = backand[key];
            });
        }
    };
    // auth
    BackandService.prototype.useAnonymousAuth = function () { };
    ;
    BackandService.prototype.signin = function (username, password) { };
    ;
    BackandService.prototype.signup = function (firstName, lastName, email, password, confirmPassword, parameters) { };
    ;
    BackandService.prototype.socialSignin = function (provider) { };
    ;
    BackandService.prototype.socialSigninWithToken = function (provider, token) { };
    ;
    BackandService.prototype.socialSignup = function (provider, email) { };
    ;
    BackandService.prototype.requestResetPassword = function (username) { };
    ;
    BackandService.prototype.resetPassword = function (newPassword, resetToken) { };
    ;
    BackandService.prototype.changePassword = function (oldPassword, newPassword) { };
    ;
    BackandService.prototype.signout = function () { };
    ;
    BackandService.prototype.getSocialProviders = function () { };
    ;
    // socket
    BackandService.prototype.on = function (eventName, callback) { };
    ;
    return BackandService;
}());
BackandService = __decorate([
    core_1.Injectable()
], BackandService);
exports.BackandService = BackandService;
var Response = (function () {
    function Response() {
    }
    return Response;
}());
exports.Response = Response;
//# sourceMappingURL=backand.service.js.map