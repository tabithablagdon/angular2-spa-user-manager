import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="container">
     <div class="row row-offcanvas row-offcanvas-right">

       <div class="col-xs-12 col-sm-9">
         <p class="pull-right visible-xs">
           <button type="button" class="btn btn-primary btn-xs" data-toggle="offcanvas">Toggle nav</button>
         </p>
         <div class="jumbotron">
           <h1>foo.com</h1>
           <p>User Manager</p>
         </div>
         <div class="row">
           <div class="col-lg-8">
             <h4>{{ date }}</h4>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
           </div>
           <div class="col-xs-6 col-lg-4">
             <h2>Internal News</h2>
             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
             <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
           </div><!--/.col-xs-6.col-lg-4-->
           <div class="col-xs-6 col-lg-4">
             <h2>User Data</h2>
             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
             <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
           </div><!--/.col-xs-6.col-lg-4-->
           <div class="col-xs-6 col-lg-4">
             <h2>How To Use</h2>
             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
             <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
           </div><!--/.col-xs-6.col-lg-4-->
           <div class="col-xs-6 col-lg-4">
             <h2>Troubleshooting</h2>
             <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
             <p><a class="btn btn-default" href="#" role="button">View details &raquo;</a></p>
           </div><!--/.col-xs-6.col-lg-4-->
         </div><!--/row-->
       </div><!--/.col-xs-12.col-sm-9-->
     </div><!--/row-->

   </div><!--/.container-->
  `
})

export class HomeComponent {

date = (new Date()).toLocaleDateString();

}
