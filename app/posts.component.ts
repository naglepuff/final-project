import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PostsService} from './posts.service';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts.component.html',
    providers: [PostsService, HTTP_PROVIDERS]
})
export class PostsComponent{
    posts: any[];

    constructor(private _postsService: PostsService){
        this._postsService.getPosts()
            .subscribe(posts => this.posts = posts);
    }
}