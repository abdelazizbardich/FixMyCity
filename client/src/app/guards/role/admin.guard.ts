import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let user:any = window.localStorage.getItem(`${environment.app_id}_user`);
      if(user == null || user == ''){
        window.localStorage.removeItem(`${environment.app_id}_user`);
        this.router.navigateByUrl('/auth/login');
        return false;
      }else{
        user = JSON.parse(user);
        if(user.authorities.filter((authority:any) => {return authority.authority == 'ROLE_ADMIN';}).length > 0){
          return true;
        }else{
          alert('Vous n\'avez pas les droits pour accéder à cette page');
          return false;
        }
      }


  }

}
