import {Component, OnInit} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {RouterLink} from '@angular/router-deprecated';

import {GetUsersService} from './getUser.service';
import {LoadingComponent} from '../../shared/loading.component'


@Component({
  selector: 'users',
  templateUrl: "app/components/users/users.component.html",
  providers: [HTTP_PROVIDERS, GetUsersService],
  directives: [RouterLink, LoadingComponent]
})

export class UsersComponent implements OnInit {

  userList: any[];
  isLoading = true;

  constructor(private _getUsersService: GetUsersService){}

  ngOnInit(){
    this._getUsersService.getUsers()
      .subscribe(user => {
        this.userList = user;
        this.isLoading = false;
      });
  }

  deleteUser(user){
    let willDelete = confirm("Are you sure you want to delete " + user.name + "?");

    if (willDelete) {
      let userPosition = this.userList.indexOf(user);
      this.userList.splice(userPosition, 1);
      this._getUsersService.deleteUser(user.id)
        .subscribe(null, err => {
          alert("Could not delete user.");
          this.userList.splice(userPosition, 0, user);
        })
    }
  }

}
