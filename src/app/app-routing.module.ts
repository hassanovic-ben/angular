import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ClientComponent} from "./client/client.component";
import { UserComponent} from "./admin/admin.component";
import { AdminSpaceComponent } from "./admin-space/adminspace.component";
import { ClientSpaceComponent} from "./client-space/client-space.component";
import { FormBookComponent} from "./form-book/form-book.component";
import { FormAdminComponent} from "./form-admin/form-admin.component";
import { FormClientComponent} from "./form-client/form-client.component";
import { UpdateAdminComponent} from "./update-admin/update-admin.component";
import { StatisticComponent} from "./statistic/statistic.component";

const routes: Routes = [


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path: 'formBook', component: FormBookComponent },
  { path: 'formAdmin', component: FormAdminComponent },
  { path: 'formClient', component: FormClientComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'admins', component: UserComponent },
  { path: 'admin-space', component: AdminSpaceComponent },
  { path: 'client-space', component: ClientSpaceComponent },
  { path: 'update-admin', component: UpdateAdminComponent },
  { path: 'statistic', component: StatisticComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
