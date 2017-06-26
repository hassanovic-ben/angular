import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule } from  'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroService } from './hero/hero.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroSearchComponent } from './hero/hero-search.component';
import { WelcomeComponent } from './login/login.component';
import { BookComponent } from './book/book-list.component';
import { BookService } from "./book/books.service";
import { ClientComponent } from "./client/client.component";
import { ClientService } from "./client/client.service";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {UserService} from "./user/user.service";


@NgModule({

  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],

  declarations: [
    AppComponent,
    WelcomeComponent,
    BookComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroesComponent,
    ClientComponent,
    HeroDetailComponent,
    HeaderComponent,
    FooterComponent,
    DashbordComponent,
    LoginFormComponent,
  ],
  providers: [HeroService,BookService,ClientService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
