import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'nav-bar',
  template: `
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">

        <div class="navbar-header">
          <a class="navbar-brand" [routerLink]="['Home']">foo.com | User Manager</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
          <li [class.active]="isCurrentRoute(['Home'])">
            <a [routerLink]="['Home']">Home</a>
          </li>
            <li [class.active]="isCurrentRoute(['Users'])">
              <a [routerLink]="['Users']">Manage Users</a>
            </li>
            <li [class.active]="isCurrentRoute(['Posts'])">
              <a [routerLink]="['Posts']">Manage User Posts</a>
            </li>
            <li [class.active]="isCurrentRoute(['UserAnalytics'])">
              <a [routerLink]="['UserAnalytics']">User Analytics <span class="label label-primary">Coming Soon</span></a>
            </li>
          </ul>
        </div>

      </div>
      </nav>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent {

  constructor(private _router: Router){}

  isCurrentRoute(route){
    var instruction = this._router.generate(route);
    return this._router.isRouteActive(instruction);
  }

}
