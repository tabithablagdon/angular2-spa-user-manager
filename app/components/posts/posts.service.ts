import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()

export class PostsService{

  private _url = 'http://jsonplaceholder.typicode.com/posts/';

  constructor(private _http: Http){}

  getPosts(filter?){
    let url = this._url;

    if (filter && filter.userId){
      url += "?userId=" + filter.userId;
    }

    return this._http.get(url)
      .map(posts => posts.json());
  }

  getComments(id){
    return this._http.get(this._url + id + '/comments')
      .map(comments => comments.json());
  }

}
