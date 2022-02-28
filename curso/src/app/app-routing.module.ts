import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRealComponent } from './api/api-real/api-real.component';
import { ApiUsersComponent } from './api/api-users/api-users.component';
import { HttpErrorHandlingComponent } from './http-error-handling/http-error-handling.component';
import { PipeAsyncComponent } from './pipes/pipe-async/pipe-async.component';
import { PipeComponent } from './pipes/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './pipes/pipe-customs/pipe-customs.component';
import { UsersComponent } from './users/users/users.component';
/**
 * 1º nav pertence a aula routing do ROUTING Compoment 
 */
// const routes: Routes = [
//   {path: '', redirectTo:'apiUserPipeAsync', pathMatch: 'full' }, // Define uma rota de start, Tem que pode pathMatch, como full
//   {path: 'pipesComuns', component: PipeComponent}, 
//   {path: 'pipeCustoms', component: PipeCustomsComponent},
//   {path: 'apiReal', component: ApiRealComponent},
//   {path: 'apiUser', component: ApiUsersComponent},
//   {path: 'apiUserPipeAsync', component: PipeAsyncComponent},
//   {path: 'httpError', component: HttpErrorHandlingComponent},
//   {path: '**', redirectTo: 'apiUserPipeAsync'}, //Protege contra links desconhecidos
// ];
const routes: Routes = [
  {path: '', redirectTo:'users', pathMatch: 'full' }, // Define uma rota de start, Tem que pode pathMatch, como full
  {path: 'users', component: UsersComponent}, 
  {path: 'about', component: PipeCustomsComponent},
  {path: 'contact', component: ApiRealComponent}, 
  {path: '**', redirectTo: 'apiUserPipeAsync'}, //Protege contra links desconhecidos
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
