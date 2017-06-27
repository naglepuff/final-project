System.register(['angular2/core', 'angular2/common', 'angular2/router', 'angular2/http', './users.service', './email.validators', './user'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, http_1, users_service_1, email_validators_1, user_1;
    var NewUserFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (users_service_1_1) {
                users_service_1 = users_service_1_1;
            },
            function (email_validators_1_1) {
                email_validators_1 = email_validators_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            NewUserFormComponent = (function () {
                function NewUserFormComponent(fb, _usersService, _router, _routeParams) {
                    this._usersService = _usersService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.NEW_TITLE = "New User";
                    this.EDIT_TITLE = "Edit User";
                    this.newUserForm = fb.group({
                        name: ['', common_1.Validators.required],
                        email: ['',
                            common_1.Validators.compose([
                                common_1.Validators.required,
                                email_validators_1.EmailValidators.cannotBeInvalid
                            ])
                        ],
                        phone: [],
                        address: fb.group({
                            street: [],
                            suite: [],
                            city: [],
                            zipcode: []
                        })
                    });
                }
                NewUserFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._routeParams.get("id");
                    if (id != null) {
                        this.title = this.EDIT_TITLE;
                        this._usersService.getUser(id)
                            .subscribe(function (user) { return _this.user = user; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    }
                    else {
                        this.title = this.NEW_TITLE;
                    }
                };
                NewUserFormComponent.prototype.routerCanDeactivate = function (next, prev) {
                    if (this.newUserForm.dirty) {
                        return confirm("You have unsaved changes. Are you sure you want to navigate away?");
                    }
                    return true;
                };
                NewUserFormComponent.prototype.onAddUser = function () {
                    var _this = this;
                    var result;
                    if (this.title == this.NEW_TITLE) {
                        result = this._usersService.addUser(this.user);
                    }
                    else {
                        result = this._usersService.updateUser(this._routeParams.get("id"), this.user);
                    }
                    result.subscribe(function (x) {
                        //mark as pristine
                        console.log(x);
                        _this._router.navigate(['Users']);
                    });
                };
                NewUserFormComponent = __decorate([
                    core_1.Component({
                        selector: 'new-user-form',
                        templateUrl: 'app/users/newuserform.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [users_service_1.UsersService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, users_service_1.UsersService, router_1.Router, router_1.RouteParams])
                ], NewUserFormComponent);
                return NewUserFormComponent;
            }());
            exports_1("NewUserFormComponent", NewUserFormComponent);
        }
    }
});
//# sourceMappingURL=newuserform.component.js.map