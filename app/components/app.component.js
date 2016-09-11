System.register(['@angular/core', '@angular/router-deprecated', './users/addUser.component', './home/home.component', './home/navbar.component', './home/not-found.component', './posts/posts.component', './users/users.component', './user-analytics/useranalytics.component'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, addUser_component_1, home_component_1, navbar_component_1, not_found_component_1, posts_component_1, users_component_1, useranalytics_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (addUser_component_1_1) {
                addUser_component_1 = addUser_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (not_found_component_1_1) {
                not_found_component_1 = not_found_component_1_1;
            },
            function (posts_component_1_1) {
                posts_component_1 = posts_component_1_1;
            },
            function (users_component_1_1) {
                users_component_1 = users_component_1_1;
            },
            function (useranalytics_component_1_1) {
                useranalytics_component_1 = useranalytics_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/', name: 'Home', component: home_component_1.HomeComponent },
                        { path: '/posts', name: 'Posts', component: posts_component_1.PostsComponent },
                        { path: '/users', name: 'Users', component: users_component_1.UsersComponent },
                        { path: '/users/:id', name: 'EditUser', component: addUser_component_1.AddUserComponent },
                        { path: '/users/add', name: 'AddUser', component: addUser_component_1.AddUserComponent },
                        { path: '/user-analytics', name: 'UserAnalytics', component: useranalytics_component_1.UserAnalyticsComponent },
                        { path: '/not-found', name: 'NotFound', component: not_found_component_1.NotFoundComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Home'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav-bar></nav-bar>\n\n    <div class=\"container\">\n      <router-outlet></router-outlet>\n       <hr>\n       <footer><p>&copy; 2016 Foo, Inc.</p></footer>\n    </div>\n  ",
                        directives: [navbar_component_1.NavbarComponent, router_deprecated_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map