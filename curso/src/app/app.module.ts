import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './_main/main.component';
import { PipeComponent } from './pipes/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './pipes/pipe-customs/pipe-customs.component';
import { CustomPipe } from './pipes/pipe-customs/custom.pipe';
import { ApiRealComponent } from './api/api-real/api-real.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeAsyncComponent } from './pipes/pipe-async/pipe-async.component';
import { ApiUsersComponent } from './api/api-users/api-users.component';
import { HttpErrorHandlingComponent } from './http-error-handling/http-error-handling.component';
import { RoutingComponent } from './_routing/routing.component';
import { UsersComponent } from './users/users/users.component';
import { AboutComponent } from './users/about/about.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { UserComponent } from './users/users/user/user.component';



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
    HttpErrorHandlingComponent,
    RoutingComponent,
    UsersComponent,
    AboutComponent,
    ContactsComponent,
    UserComponent,
   
   
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
