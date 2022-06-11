import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token:String | null = window.localStorage.getItem(`${environment.app_id}_token`);
      if(token == null || token == ''){
        window.localStorage.removeItem(`${environment.app_id}_token`);
        this.router.navigateByUrl('/auth/login');
        return false;
      }
      return true;
  }

}
