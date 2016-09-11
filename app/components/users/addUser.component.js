System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', '@angular/http', '../../shared/formValidators', './getUser.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, http_1, formValidators_1, getUser_service_1;
    var AddUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (formValidators_1_1) {
                formValidators_1 = formValidators_1_1;
            },
            function (getUser_service_1_1) {
                getUser_service_1 = getUser_service_1_1;
            }],
        execute: function() {
            AddUserComponent = (function () {
                function AddUserComponent(fb, _router, _usersService, _routeParams) {
                    this._router = _router;
                    this._usersService = _usersService;
                    this._routeParams = _routeParams;
                    this.userDataLoaded = false;
                    this.id = this._routeParams.get('id');
                    this.user = {
                        name: '',
                        phone: '',
                        email: '',
                        address: {
                            street: '',
                            suite: '',
                            city: '',
                            zipcode: ''
                        }
                    };
                    this.addUserForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['', formValidators_1.FormValidators.validEmail],
                        phone: [''],
                        address: fb.group({
                            street: [''],
                            suite: [''],
                            city: [''],
                            zip: ['']
                        })
                    });
                }
                AddUserComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.title = this.id ? 'Edit User' : 'New User';
                    if (this.id) {
                        this._usersService.getUser(this.id)
                            .subscribe(function (user) {
                            _this.userDataLoaded = true;
                            _this.user = user;
                            console.log(user);
                        }, function (res) {
                            if (res.status === 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    }
                    else {
                        return;
                    }
                };
                AddUserComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (this.addUserForm.dirty) {
                        return confirm("Are you sure you want to leave this page?");
                    }
                    else {
                        return true;
                    }
                };
                AddUserComponent.prototype.save = function () {
                    var _this = this;
                    var result;
                    console.log(this.addUserForm.value);
                    result = this.id ? this._usersService.updateUser(this.id, this.addUserForm.value) : this._usersService.addUser(this.addUserForm.value);
                    result.subscribe(function (data) {
                        alert("User changes have been saved.");
                        _this._router.navigate(['Users']);
                    });
                };
                AddUserComponent = __decorate([
                    core_1.Component({
                        selector: 'add-user',
                        templateUrl: 'app/components/users/addUser.component.html',
                        providers: [getUser_service_1.GetUsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, router_deprecated_1.Router, getUser_service_1.GetUsersService, router_deprecated_1.RouteParams])
                ], AddUserComponent);
                return AddUserComponent;
            }());
            exports_1("AddUserComponent", AddUserComponent);
        }
    }
});
//# sourceMappingURL=addUser.component.js.map