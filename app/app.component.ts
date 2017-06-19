import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavBarComponent} from './navbar.component';
import {HomeComponent} from './home.component';
import {UsersComponent} from './users.component';
import {PostsComponent} from './posts.component';
import {NewUserFormComponent} from './newuserform.component';
import {NotFoundComponent} from './notfound.component';

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, NavBarComponent]
})
@RouteConfig([
    {path: '/', name: "Home", component: HomeComponent},
    {path: '/users', name: "Users", component: UsersComponent},
    {path: '/users/new', name: "NewUser", component: NewUserFormComponent},
    {path: '/users/:id', name: "EditUser", component: NewUserFormComponent},
    {path: '/posts', name: "Posts", component: PostsComponent},
    {path: '/notfound', name: "NotFound", component: NotFoundComponent},
    {path: '/*other', name: "Other", redirectTo: ['Home']}
])
export class AppComponent { }