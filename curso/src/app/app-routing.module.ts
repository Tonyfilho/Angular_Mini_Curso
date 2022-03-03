import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRealComponent } from './dummy/api-real/api-real.component';
import { ApiUsersComponent } from './dummy/api-users/api-users.component';
import { HomeComponent } from './home/home.component';
import { HttpErrorHandlingComponent } from './dummy/http-error-handling/http-error-handling.component';
import { PipeAsyncComponent } from './dummy/pipe-async/pipe-async.component';
import { PipeComponent } from './dummy/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './dummy/pipe-customs/pipe-customs.component';
import { AboutComponent } from './users/about/about.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { UserAddressComponent } from './users/users/user/user-address/user-address.component';
import { UserCompanyComponent } from './users/users/user/user-company/user-company.component';
import { UserComponent } from './users/users/user/user.component';
import { UsersComponent } from './users/users/users.component';
import { AdminAuthGuard } from './_services/auth/admin-auth.guard';
import { AuthGuard } from './_services/auth/auth.guard';
import { AddUserComponent } from './users/users/add-user/add-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Define uma rota de start, Tem que pode pathMatch, como full
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivateChild: [AdminAuthGuard],
    children: [
      // {path: '', redirectTo:'address', pathMatch: 'full' },
      { path: 'address', component: UserAddressComponent },
      { path: 'company', component: UserCompanyComponent },
    ],
  },
  { path: 'addUser', component: AddUserComponent ,  canActivate: [AdminAuthGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: 'home' }, //Protege contra links desconhecidos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
