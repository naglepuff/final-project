System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', './posts.service', 'app/users/users.service', './spinner.component'], function(exports_1, context_1) {
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
    var core_1, http_1, posts_service_1, users_service_1, spinner_component_1;
    var PostsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            }],
        execute: function() {
            PostsComponent = (function () {
                function PostsComponent(_postsService, _usersService) {
                    this._postsService = _postsService;
                    this._usersService = _usersService;
                    this.showDetail = false;
                    this.commentsLoading = true;
                    this.selected = { title: "", body: "" };
                    this.ngOnInit();
                }
                PostsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.callServerForPosts();
                    this._usersService.getUsers()
                        .subscribe(function (users) {
                        _this.users = users;
                    });
                };
                PostsComponent.prototype.callServerForPosts = function () {
                    this.postsLoading = true;
                    this.getAllPosts();
                };
                PostsComponent.prototype.getAllPosts = function () {
                    var _this = this;
                    this._postsService.getPosts()
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        _this.allPosts = posts;
                        _this.postsLoading = false;
                    });
                };
                PostsComponent.prototype.getPostsByUserId = function (id) {
                    var _this = this;
                    this.postsLoading = true;
                    this._postsService.getPostsByUserId(id)
                        .subscribe(function (posts) {
                        _this.posts = posts;
                        console.log(posts);
                        _this.postsLoading = false;
                    });
                };
                PostsComponent.prototype.selectPost = function (id) {
                    console.log(id);
                    this.showDetail = true;
                    this.selected = this.allPosts[id - 1];
                    console.log(this.selected);
                    this.getCommentsForSelected(id);
                };
                PostsComponent.prototype.getCommentsForSelected = function (id) {
                    var _this = this;
                    this.commentsLoading = true;
                    this._postsService.getCommentsByPostId(id)
                        .subscribe(function (comments) {
                        _this.selectedComments = comments;
                        _this.commentsLoading = false;
                    });
                };
                PostsComponent.prototype.filterByUserId = function (id) {
                    console.log(id);
                    this.showDetail = false;
                    if (!id) {
                        this.posts = this.allPosts;
                    }
                    else {
                        this.getPostsByUserId(id);
                    }
                };
                PostsComponent = __decorate([
                    core_1.Component({
                        selector: 'posts',
                        templateUrl: 'app/posts.component.html',
                        providers: [posts_service_1.PostsService, users_service_1.UsersService, http_1.HTTP_PROVIDERS],
                        directives: [spinner_component_1.SpinnerComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostsService, (typeof (_a = typeof users_service_1.UsersService !== 'undefined' && users_service_1.UsersService) === 'function' && _a) || Object])
                ], PostsComponent);
                return PostsComponent;
                var _a;
            }());
            exports_1("PostsComponent", PostsComponent);
        }
    }
});
//# sourceMappingURL=posts.component.js.map