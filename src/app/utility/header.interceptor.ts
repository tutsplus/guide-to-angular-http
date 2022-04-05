import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { 
    console.log("Inside Intercept");     
    const ANGULAR_TUTS_INTERCEPTOR = '123456';
    return next.handle(httpRequest.clone({ setHeaders: { ANGULAR_TUTS_INTERCEPTOR } }));
  }
}