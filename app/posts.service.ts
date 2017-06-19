import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService{

    URL: string = "http://jsonplaceholder.typicode.com/posts/";

    constructor(private _http: Http){

    }

    getPosts(){
        return this._http.get(this.URL).map(res => res.json());
    }
}