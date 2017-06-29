import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InputTextModule } from  'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book-list.component';
import { BookService } from "./book/books.service";
import { ClientComponent } from "./client/client.component";
import { ClientService } from "./client/client.service";
import { LoginFormComponent } from './login-form/login-form.component';
import { UserService } from "./admin/admin.service";
import { UserComponent} from "./admin/admin.component";
import { AdminSpaceComponent} from "./admin-space/adminspace.component";
import { ClientSpaceComponent } from './client-space/client-space.component';
import { CommonModule} from "@angular/common";
import { SharedModule} from "primeng/components/common/shared";
import { FormBookComponent } from './form-book/form-book.component';
import { FormAdminComponent } from './form-admin/form-admin.component';
import { FormClientComponent } from './form-client/form-client.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { StatisticComponent } from './statistic/statistic.component';
import { PageComponent } from './page/page.component';
import {PageService} from "./page/pageService";
import { SaleComponent } from './sale/sale.component';




@NgModule({

  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    CommonModule,
    SharedModule,
  ],

  declarations: [

    AppComponent,
    BookComponent,
    ClientComponent,
    LoginFormComponent,
    UserComponent,
    AdminSpaceComponent,
    ClientSpaceComponent,
    BookComponent,
    FormBookComponent,
    FormAdminComponent,
    FormClientComponent,
    UpdateAdminComponent,
    StatisticComponent,
    PageComponent,
    SaleComponent
  ],
  providers: [BookService,ClientService,UserService,PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
