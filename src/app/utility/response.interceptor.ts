import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                event = event.clone({ body: this.handleResponse(event) })
            }
            return event;
        })
    )
  }
  private handleResponse(event: any): any {
      //  override http response body here
      const body = { ...event.body, "projectCode": "angular_tuts_http" };
      return body;
  }  
}