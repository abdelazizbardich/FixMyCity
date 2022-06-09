import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

  token:String | null = window.localStorage.getItem(`${environment.app_id}_token`);
  constructor(private router:Router) {}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers:any = {};
    // Add Auth token to headers if it's found on LocalStorage
    if(this.token){
      headers = {
        Authorization : `Bearer ${window.localStorage.getItem(`${environment.app_id}_token`)}`
      };
    }else{
      this.router.navigate(['/login'])
    }
    // set api abs url and headers
    return next.handle(httpRequest.clone({url:environment.api_base+httpRequest.clone().url,setHeaders:headers}));
  }
}
