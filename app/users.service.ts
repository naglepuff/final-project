import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

    URL: string = "http://jsonplaceholder.typicode.com/users/";

    constructor(private _http: Http){}
    
    getUsers(){
        return this._http.get(this.URL).map(res =>res.json());
    }

    getUser(id){
        return this._http.get(this.URL + id).map(res => res.json());
    }

    addUser(user){
        return this._http.post(this.URL, user);
    }

    updateUser(id, user){
        return this._http.put(this.URL + id, JSON.stringify(user)).map(res => res.json());
    }

    deleteUser(id){
        return this._http.delete(this.URL + id).map(res => res.json());
    }
}