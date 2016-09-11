import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {AddUserComponent} from './users/addUser.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './home/navbar.component';
import {NotFoundComponent} from './home/not-found.component';
import {PostsComponent} from './posts/posts.component';
import {UsersComponent} from './users/users.component';
import {UserAnalyticsComponent} from './user-analytics/useranalytics.component';


@RouteConfig([
  {path: '/', name: 'Home', component: HomeComponent},
  {path: '/posts', name: 'Posts', component: PostsComponent},
  {path: '/users', name: 'Users', component: UsersComponent},
  {path: '/users/:id', name: 'EditUser', component: AddUserComponent},
  {path: '/users/add', name: 'AddUser', component: AddUserComponent},
  {path: '/user-analytics', name: 'UserAnalytics', component: UserAnalyticsComponent},
  {path: '/not-found', name: 'NotFound', component: NotFoundComponent},
  {path: '/*other', name: 'Other', redirectTo: ['Home']}
])

@Component({
  selector: 'my-app',
  template: `
    <nav-bar></nav-bar>

    <div class="container">
      <router-outlet></router-outlet>
       <hr>
       <footer><p>&copy; 2016 Foo, Inc.</p></footer>
    </div>
  `,
  directives: [NavbarComponent, ROUTER_DIRECTIVES]

})

export class AppComponent {

}
