import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { concatMap, delay, retryWhen } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    retryCount = 3;
    retryWaitTime = 1000;
    intercept(req: HttpRequest <any>, next: HttpHandler) {
        return next.handle(req).pipe(
            retryWhen(error =>
                error.pipe(
                    concatMap((error, count) => {
                        if (count <= this.retryCount && error.status == 404) {
                            return of(error);
                        }
                        return throwError(error);
                    }),
                    delay(this.retryWaitTime)
                )
            )
        );
    }
}