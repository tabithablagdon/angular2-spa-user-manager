import {Component, OnInit} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {Router, CanDeactivate, RouteParams} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';

import {FormValidators} from '../../shared/formValidators';
import {GetUsersService} from './getUser.service';

@Component({
  selector: 'add-user',
  templateUrl: 'app/components/users/addUser.component.html',
  providers: [GetUsersService, HTTP_PROVIDERS]
})

export class AddUserComponent implements CanDeactivate, OnInit {

  addUserForm: ControlGroup;
  title: string;
  userDataLoaded = false;
  id = this._routeParams.get('id');
  user = { //blank user object
   name: '',
   phone: '',
   email: '',
   address: {
     street: '',
     suite: '',
     city: '',
     zipcode: ''
    }
  };

  constructor(
    fb: FormBuilder,
    private _router: Router,
    private _usersService: GetUsersService,
    private _routeParams: RouteParams
   ){
      this.addUserForm = fb.group({
          name: ['', Validators.required],
          email: ['', FormValidators.validEmail],
          phone: [''],
          address: fb.group({
            street: [''],
            suite: [''],
            city: [''],
            zip: ['']
          })
      });
  }

  ngOnInit(){
    this.title = this.id ? 'Edit User' : 'New User';

    if (this.id) {
      this._usersService.getUser(this.id)
        .subscribe(user => {
          this.userDataLoaded = true;
          this.user = user;
          console.log(user);
        }, res => {
          if (res.status === 404) {
            this._router.navigate(['NotFound']);
          }
        });
    } else {
      return;
    }
  }

  routerCanDeactivate(next, previous) {
    if (this.addUserForm.dirty) {
      return confirm("Are you sure you want to leave this page?");
    } else {
      return true;
    }
  }

  save(){
    let result;

    console.log(this.addUserForm.value);
    result = this.id ? this._usersService.updateUser(this.id, this.addUserForm.value) : this._usersService.addUser(this.addUserForm.value);

    result.subscribe(data => {
      this._router.navigate(['Users']);
    });
  }

}
