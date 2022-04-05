import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentHttpService } from './parent/parent.service';
import { ResponseInterceptor } from './utility/response.interceptor';
import { HeaderInterceptor } from './utility/header.interceptor';
import { ErrorInterceptor } from './utility/error.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }, 
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    ParentHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
