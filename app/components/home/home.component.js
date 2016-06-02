System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.date = (new Date()).toLocaleDateString();
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        template: "\n    <div class=\"container\">\n     <div class=\"row row-offcanvas row-offcanvas-right\">\n\n       <div class=\"col-xs-12 col-sm-9\">\n         <p class=\"pull-right visible-xs\">\n           <button type=\"button\" class=\"btn btn-primary btn-xs\" data-toggle=\"offcanvas\">Toggle nav</button>\n         </p>\n         <div class=\"jumbotron\">\n           <h1>foo.com</h1>\n           <p>User Manager</p>\n         </div>\n         <div class=\"row\">\n           <div class=\"col-lg-8\">\n             <h4>{{ date }}</h4>\n             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n           </div>\n           <div class=\"col-xs-6 col-lg-4\">\n             <h2>Internal News</h2>\n             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n             <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n           </div><!--/.col-xs-6.col-lg-4-->\n           <div class=\"col-xs-6 col-lg-4\">\n             <h2>User Data</h2>\n             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n             <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n           </div><!--/.col-xs-6.col-lg-4-->\n           <div class=\"col-xs-6 col-lg-4\">\n             <h2>How To Use</h2>\n             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n             <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n           </div><!--/.col-xs-6.col-lg-4-->\n           <div class=\"col-xs-6 col-lg-4\">\n             <h2>Troubleshooting</h2>\n             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n             <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details &raquo;</a></p>\n           </div><!--/.col-xs-6.col-lg-4-->\n         </div><!--/row-->\n       </div><!--/.col-xs-12.col-sm-9-->\n     </div><!--/row-->\n\n   </div><!--/.container-->\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map