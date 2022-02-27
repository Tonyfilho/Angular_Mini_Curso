import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiRealComponent } from './api/api-real/api-real.component';
import { ApiUsersComponent } from './api/api-users/api-users.component';
import { PipeAsyncComponent } from './main/pipe/pipe-async/pipe-async.component';
import { PipeComponent } from './main/pipe/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './main/pipe/pipe-customs/pipe-customs.component';

const routes: Routes = [
  {path: 'pipesComuns', component: PipeComponent},
  {path: 'pipeCustoms', component: PipeCustomsComponent},
  {path: 'apiReal', component: ApiRealComponent},
  {path: 'apiUser', component: ApiUsersComponent},
  {path: 'apiUserPipeAsync', component: PipeAsyncComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
