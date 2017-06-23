import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
              <h1>{{title}} </h1>
              <div class="header-bar"></div>
              <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/book" routerLinkActive="active">Books</a>
               <!-- <a routerLink="/adminPage" routerLinkActive="active">Admin Page</a>
                <a routerLink="/statPage" routerLinkActive="active">Statistic Page</a>-->
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                <a routerLink="/welcome" routerLinkActive="active">Welcome</a>
              </nav>
              <router-outlet></router-outlet>
           `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to book world welcome';

}
