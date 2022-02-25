import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './main/pipe/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './main/pipe/pipe-customs/pipe-customs.component';

const routes: Routes = [
  {path: 'pipesComuns', component: PipeComponent},
  {path: 'pipeCustoms', component: PipeCustomsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
