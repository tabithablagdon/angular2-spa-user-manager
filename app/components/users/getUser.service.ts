import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {UserInterface} from './userInterface';

@Injectable()

export class GetUsersService {
  private _url = "http://jsonplaceholder.typicode.com/users/";

  constructor(private _http: Http){}

  getUsers(){
    return this._http.get(this._url)
      .map(res => res.json());
  }

  getUser(id){
    return this._http.get(this._url + id)
      .map(res => res.json());
  }

  addUser(userInterface: UserInterface) {
    return this._http.post(this._url, JSON.stringify(userInterface))
      .map(newUser => newUser.json());
  }

  updateUser(id, userInterface: UserInterface) {
    return this._http.put(this._url+id, JSON.stringify(userInterface))
      .map(newUser => newUser.json());
  }

  deleteUser(id){
    console.log('deleted ' + id);
    return this._http.delete(this._url + id)
      .map(deleted => deleted.json());
  }

}
