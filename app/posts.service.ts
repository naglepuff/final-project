import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{

    URL: string = "http://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http){
    }

    getPosts(){
        return this._http.get(this.URL).map(res => res.json());
    }

    getCommentsByPostId(id: number){
      return this._http.get(this.commentUrl(id)).map(res => res.json());
    }

    getPostsByUserId(id: number){
      return this._http.get(this.postsByUserUrl(id)).map(res => res.json());
    }

    //helper method for making comments URL
    commentUrl(id: number){
      return this.URL + "/" + id + "/comments";
    }

    //helper method for making posts by user URL
    postsByUserUrl(id: number){
      return this.URL + "?userId=" + id;
    }
}
