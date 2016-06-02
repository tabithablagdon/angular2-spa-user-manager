import {Component, OnInit} from '@angular/core';

import {LoadingComponent} from '../../shared/loading.component'
import {PostsService} from './posts.service';
import {GetUsersService} from '../users/getUser.service';
import {PaginationComponent} from '../../shared/pagination.component';


@Component({
  selector: 'posts',
  templateUrl: 'app/components/posts/posts.component.html',
  styles: [`
    .comment:hover {
      background-color: #ccc;
    }
    img {
      border-radius: 15px;
    }
  `],
  directives: [LoadingComponent, PaginationComponent],
  providers: [PostsService, GetUsersService]
})

export class PostsComponent implements OnInit {
  posts = [];
  pagedPosts = [];
  users = [];
  comments;
  selected;
  hasLoaded = false;
  pageSize = 10;

  constructor(
    private _postsService: PostsService,
    private _usersService: GetUsersService
  ){

  }

  ngOnInit(){
    this.loadPosts();

    this._usersService.getUsers()
      .subscribe(user => this.users = user);
  }

  displayPost(post){
    this.selected = post;
    let id = post.id;

    this._postsService.getComments(id)
      .subscribe(comment => {
        console.log(comment);
        this.comments = comment;
      });
  }

  loadPosts(filter?){
    this.hasLoaded = false;

    this._postsService.getPosts(filter)
      .subscribe(post => {
        console.log(post);
        this.posts = post;
        this.pagedPosts = this.getPostsInPage(1);
      }, null, () => { this.hasLoaded = true;});
  }

  onPageChanged(page){
    this.pagedPosts = this.getPostsInPage(page)
  }

  private getPostsInPage(page){
    let result = [];
    let start = (page - 1) * this.pageSize;
    let end = Math.min(start + this.pageSize, this.posts.length);

    for (let i = start; i < end; i++) {
      result.push(this.posts[i]);
    }

    return result;
  }

  reloadPosts(filter){
    this.selected = null;

    this.loadPosts(filter);
  }

}
