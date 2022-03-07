import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './_main/main.component';
import { PipeComponent } from './dummy/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './dummy/pipe-customs/pipe-customs.component';
import { CustomPipe } from './dummy/pipe-customs/custom.pipe';
import { ApiRealComponent } from './dummy/api-real/api-real.component';
import { HttpClientModule } from '@angular/common/http';
import { PipeAsyncComponent } from './dummy/pipe-async/pipe-async.component';
import { ApiUsersComponent } from './dummy/api-users/api-users.component';
import { HttpErrorHandlingComponent } from './dummy/http-error-handling/http-error-handling.component';
import { RoutingComponent } from './dummy/_routing/routing.component';
import { UsersComponent } from './users/users/users.component';
import { AboutComponent } from './users/about/about.component';
import { ContactsComponent } from './users/contacts/contacts.component';
import { UserComponent } from './users/users/user/user.component';
import { UserCompanyComponent } from './users/users/user/user-company/user-company.component';
import { UserAddressComponent } from './users/users/user/user-address/user-address.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from './_services/auth/admin-auth.guard';
import { AddUserComponent } from './users/users/add-user/add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalServicesComponent } from './_services/modal-services/modal-services.component';



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
    UserCompanyComponent,
    UserAddressComponent,
    HomeComponent,    
    AddUserComponent,
    ModalServicesComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
