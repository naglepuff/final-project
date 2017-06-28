import {Component, Input, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {PostsService} from './posts.service';
import {UsersService} from 'app/users/users.service';
import {SpinnerComponent} from './spinner.component';

@Component({
    selector: 'posts',
    templateUrl: 'app/posts.component.html',
    providers: [PostsService, UsersService, HTTP_PROVIDERS],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit{
    allPosts: any[];
    posts: any[];
    users: any[];
    postsLoading: boolean;

    showDetail = false;
    commentsLoading = true;
    selected = {title: "", body: ""};
    selectedComments: any[];

    constructor(private _postsService: PostsService, private _usersService: UsersService){
        this.ngOnInit();
    }

    ngOnInit(){
      this.callServerForPosts();
      this._usersService.getUsers()
        .subscribe(users => {
          this.users = users;
        });
    }

    callServerForPosts(){
      this.postsLoading = true;
      this.getAllPosts();
    }

    getAllPosts(){
      this._postsService.getPosts()
          .subscribe(posts => {
            this.posts = posts;
            this.allPosts = posts;
            this.postsLoading = false;
          });
    }

    getPostsByUserId(id: number){
      this.postsLoading = true;
      this._postsService.getPostsByUserId(id)
        .subscribe(posts => {
          this.posts = posts;
          console.log(posts);
          this.postsLoading = false;
        });
    }

    selectPost(id: number){
      console.log(id);
      this.showDetail= true;
      this.selected = this.allPosts[id - 1];
      console.log(this.selected);
      this.getCommentsForSelected(id);
    }

    getCommentsForSelected(id: number){
      this.commentsLoading = true;
      this._postsService.getCommentsByPostId(id)
        .subscribe(comments => {
          this.selectedComments = comments;
          this.commentsLoading = false;
        });
    }

    filterByUserId(id: number){
      console.log(id);
      this.showDetail = false;
      if(!id){
        this.posts = this.allPosts;
      }else{

        this.getPostsByUserId(id);
      }
    }
}
