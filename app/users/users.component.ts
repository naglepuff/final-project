import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {UsersService} from './users.service';

@Component({
    selector: 'users',
    templateUrl: 'app/users/users.component.html',
    providers: [UsersService, HTTP_PROVIDERS],
    directives: [ROUTER_DIRECTIVES]
})
export class UsersComponent implements OnInit{
    users: any[];

    constructor(private _usersService: UsersService){

    }

    ngOnInit(){
        this._usersService.getUsers().subscribe(users => {
            this.users = users;
            //console.log(users);
        });
    }

    deleteUser(user){
        if(confirm("Are you sure you want to delete this user?") == false){
            return;
        }else{
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._usersService.deleteUser(user.id)
                .subscribe(null,
                    err => {
                        alert("Could not delete user");
                        this.users.splice(index, 0, user);
                    });
        }
    }
}
