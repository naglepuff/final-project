import {Component, OnInit} from 'angular2/core';
import {ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {ROUTER_DIRECTIVES, CanDeactivate, Router, RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {UsersService} from './users.service';
import {EmailValidators} from './email.validators';
import {User} from './user';

@Component({
    selector: 'new-user-form',
    templateUrl: 'app/users/newuserform.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService, HTTP_PROVIDERS]
})
export class NewUserFormComponent implements CanDeactivate, OnInit{
    newUserForm: ControlGroup;
    title: string;
    user = new User();
    NEW_TITLE = "New User";
    EDIT_TITLE = "Edit User";

    constructor(fb: FormBuilder,
        private _usersService: UsersService,
        private _router: Router,
        private _routeParams: RouteParams){
        this.newUserForm = fb.group({
            name: ['', Validators.required],
            email: ['',
                Validators.compose([
                    Validators.required,
                    EmailValidators.cannotBeInvalid
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

    ngOnInit(){
        var id = this._routeParams.get("id");
        if(id != null){
            this.title = this.EDIT_TITLE;
            this._usersService.getUser(id)
                .subscribe(user => this.user = user,
                    response => {
                        if(response.status == 404){
                            this._router.navigate(['NotFound']);
                        }
                    });
        }else{
            this.title = this.NEW_TITLE;
        }
    }

    routerCanDeactivate(next, prev){
        if(this.newUserForm.dirty){
            return confirm("You have unsaved changes. Are you sure you want to navigate away?");
        }
        return true;
    }

    onAddUser(){
        var result;
        if(this.title == this.NEW_TITLE){
            result = this._usersService.addUser(this.user)
        }else{
           result = this._usersService.updateUser(this._routeParams.get("id"), this.user);
        }
        result.subscribe(x => {
                    //mark as pristine
                    console.log(x);
                    this._router.navigate(['Users']);
                });
    }
}
