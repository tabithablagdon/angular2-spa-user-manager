System.register(['@angular/core', '../../shared/loading.component', './posts.service', '../users/getUser.service', '../../shared/pagination.component'], function(exports_1, context_1) {
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
    var core_1, loading_component_1, posts_service_1, getUser_service_1, pagination_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (getUser_service_1_1) {
                getUser_service_1 = getUser_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.posts = [];
                    this.pagedPosts = [];
                    this.users = [];
                    this.hasLoaded = false;
                    this.pageSize = 10;
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loadPosts();
                    this._usersService.getUsers()
                        .subscribe(function (user) { return _this.users = user; });
                };
                PostsComponent.prototype.displayPost = function (post) {
                    var _this = this;
                    this.selected = post;
                    var id = post.id;
                    this._postsService.getComments(id)
                        .subscribe(function (comment) {
                        console.log(comment);
                        _this.comments = comment;
                    });
                };
                PostsComponent.prototype.loadPosts = function (filter) {
                    var _this = this;
                    this.hasLoaded = false;
                    this._postsService.getPosts(filter)
                        .subscribe(function (post) {
                        console.log(post);
                        _this.posts = post;
                        _this.pagedPosts = _this.getPostsInPage(1);
                    }, null, function () { _this.hasLoaded = true; });
                };
                PostsComponent.prototype.onPageChanged = function (page) {
                    this.pagedPosts = this.getPostsInPage(page);
                };
                PostsComponent.prototype.getPostsInPage = function (page) {
                    var result = [];
                    var start = (page - 1) * this.pageSize;
                    var end = Math.min(start + this.pageSize, this.posts.length);
                    for (var i = start; i < end; i++) {
                        result.push(this.posts[i]);
                    }
                    return result;
                };
                PostsComponent.prototype.reloadPosts = function (filter) {
                    this.selected = null;
                    this.loadPosts(filter);
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/components/posts/posts.component.html',
                        styles: ["\n    .comment:hover {\n      background-color: #ccc;\n    }\n    img {\n      border-radius: 15px;\n    }\n  "],
                        directives: [loading_component_1.LoadingComponent, pagination_component_1.PaginationComponent],
                        providers: [posts_service_1.PostsService, getUser_service_1.GetUsersService]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, getUser_service_1.GetUsersService])
                ], PostsComponent);
                return PostsComponent;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map