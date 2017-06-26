import { Component } from '@angular/core';


@Component({
  selector: 'my-root',
  template: `
              
             
                <!--<a routerLink="/books" routerLinkActive="active">Books</a>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
               
              
                <a routerLink="/clients" routerLinkActive="active">Statistic Page</a>
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>&ndash;&gt;
               <a routerLink="/welcome" routerLinkActive="active">Welcome</a>-->
              
             <router-outlet></router-outlet>
           
           `,
  styleUrls: ['./app.component.css']

})
export class AppComponent {


}
