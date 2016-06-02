System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var GetUsersService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            GetUsersService = (function () {
                function GetUsersService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/users/";
                }
                GetUsersService.prototype.getUsers = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                GetUsersService.prototype.getUser = function (id) {
                    return this._http.get(this._url + id)
                        .map(function (res) { return res.json(); });
                };
                GetUsersService.prototype.addUser = function (userInterface) {
                    return this._http.post(this._url, JSON.stringify(userInterface))
                        .map(function (newUser) { return newUser.json(); });
                };
                GetUsersService.prototype.updateUser = function (id, userInterface) {
                    return this._http.put(this._url + id, JSON.stringify(userInterface))
                        .map(function (newUser) { return newUser.json(); });
                };
                GetUsersService.prototype.deleteUser = function (id) {
                    console.log('deleted ' + id);
                    return this._http.delete(this._url + id)
                        .map(function (deleted) { return deleted.json(); });
                };
                GetUsersService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
                ], GetUsersService);
                return GetUsersService;
                var _a;
            }());
            exports_1("GetUsersService", GetUsersService);
        }
    }
});
//# sourceMappingURL=getUser.service.js.map