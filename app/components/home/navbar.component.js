System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var NavbarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            NavbarComponent = (function () {
                function NavbarComponent(_router) {
                    this._router = _router;
                }
                NavbarComponent.prototype.isCurrentRoute = function (route) {
                    var instruction = this._router.generate(route);
                    return this._router.isRouteActive(instruction);
                };
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'nav-bar',
                        template: "\n    <nav class=\"navbar navbar-default\" role=\"navigation\">\n      <div class=\"container-fluid\">\n\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" [routerLink]=\"['Home']\">foo.com | User Manager</a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n          <li [class.active]=\"isCurrentRoute(['Home'])\">\n            <a [routerLink]=\"['Home']\">Home</a>\n          </li>\n            <li [class.active]=\"isCurrentRoute(['Users'])\">\n              <a [routerLink]=\"['Users']\">Manage Users</a>\n            </li>\n            <li [class.active]=\"isCurrentRoute(['Posts'])\">\n              <a [routerLink]=\"['Posts']\">Manage User Posts</a>\n            </li>\n            <li [class.active]=\"isCurrentRoute(['UserAnalytics'])\">\n              <a [routerLink]=\"['UserAnalytics']\">User Analytics <span class=\"label label-primary\">Coming Soon</span></a>\n            </li>\n          </ul>\n        </div>\n\n      </div>\n      </nav>\n  ",
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object])
                ], NavbarComponent);
                return NavbarComponent;
                var _a;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map