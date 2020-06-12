import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class HttpReqInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!(request.url.indexOf('login') > -1)) {
      const token = sessionStorage.getItem('token');
      if (token) {
        request = request.clone({
          headers: request.headers.set('X-Access-Token', token)
        });
      } else {
        console.log('error inside token');
      }
    }
    return next.handle(request).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          console.log(evt);
        }
      }, err => {
        return throwError(err);
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);

      }));
  }
}
