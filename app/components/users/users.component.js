System.register(['@angular/core', '@angular/http', '@angular/router-deprecated', './getUser.service', '../../shared/loading.component'], function(exports_1, context_1) {
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
    var core_1, http_1, router_deprecated_1, getUser_service_1, loading_component_1;
    var UsersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (getUser_service_1_1) {
                getUser_service_1 = getUser_service_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            }],
        execute: function() {
            UsersComponent = (function () {
                function UsersComponent(_getUsersService) {
                    this._getUsersService = _getUsersService;
                    this.isLoading = true;
                }
                UsersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._getUsersService.getUsers()
                        .subscribe(function (user) {
                        _this.userList = user;
                        _this.isLoading = false;
                    });
                };
                UsersComponent.prototype.deleteUser = function (user) {
                    var _this = this;
                    var willDelete = confirm("Are you sure you want to delete " + user.name + "?");
                    if (willDelete) {
                        var userPosition_1 = this.userList.indexOf(user);
                        this.userList.splice(userPosition_1, 1);
                        this._getUsersService.deleteUser(user.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete user.");
                            _this.userList.splice(userPosition_1, 0, user);
                        });
                    }
                };
                UsersComponent = __decorate([
                    core_1.Component({
                        selector: 'users',
                        templateUrl: "app/components/users/users.component.html",
                        providers: [http_1.HTTP_PROVIDERS, getUser_service_1.GetUsersService],
                        directives: [router_deprecated_1.RouterLink, loading_component_1.LoadingComponent]
                    }), 
                    __metadata('design:paramtypes', [getUser_service_1.GetUsersService])
                ], UsersComponent);
                return UsersComponent;
            }());
            exports_1("UsersComponent", UsersComponent);
        }
    }
});
//# sourceMappingURL=users.component.js.map