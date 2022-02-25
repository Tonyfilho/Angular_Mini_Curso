import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PipeComponent } from './main/pipe/pipe-comuns/pipe.component';
import { PipeCustomsComponent } from './main/pipe/pipe-customs/pipe-customs.component';
import { CustomPipe } from './main/pipe/pipe-customs/custom.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PipeComponent,
    PipeCustomsComponent,
    CustomPipe,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
