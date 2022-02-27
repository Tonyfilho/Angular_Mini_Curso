import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PipeComponent } from './main/pipe/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './main/pipe/pipe-customs/pipe-customs.component';
import { CustomPipe } from './main/pipe/pipe-customs/custom.pipe';
import { ApiRealComponent } from './api/api-real/api-real.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeAsyncComponent } from './main/pipe/pipe-async/pipe-async.component';
import { ApiUsersComponent } from './api/api-users/api-users.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PipeComponent,
    PipeCustomsComponent,
    CustomPipe,
    ApiRealComponent,
    PipeAsyncComponent,
    ApiUsersComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
