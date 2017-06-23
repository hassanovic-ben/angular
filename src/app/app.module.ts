import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';*/

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroSearchComponent } from './hero/hero-search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BookComponent } from './book/book-list.component';
import {BookService} from "./book/books.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600},)
  ],

  declarations: [
    AppComponent,
    WelcomeComponent,
    BookComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    HeroDetailComponent,
  ],
  providers: [HeroService,BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
