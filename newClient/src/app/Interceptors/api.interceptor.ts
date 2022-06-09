import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private router:Router) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers:any = {};
    const token:String | null = window.localStorage.getItem(`${environment.app_id}_token`);
    if(token != null && token != ''){
      headers = {
        Authorization : `Bearer ${token}`
      };
    }else if (httpRequest.clone().url.split('/')[1] !== 'auth'){
      this.router.navigateByUrl('/auth/login')
    }
    // Clone the request to add the new header and url
    return next.handle(httpRequest.clone({url:environment.api_base+httpRequest.clone().url,setHeaders:headers})).pipe(
      catchError( response => {
        // Send to login page if unauthorized
        if(response.status === 403) {
          this.router.navigateByUrl('/auth/login');
        }
        return throwError(response.error);
      })
      );
   }
}
