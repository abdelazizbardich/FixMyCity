import { AccessGuardService } from 'src/app/Services/access-guard/access-guard.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanAccessGuard implements CanActivate {

  constructor(private router:Router,private accessGuardService:AccessGuardService) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let roles = route.data['roles'] as string[];
      let haveRole = roles.find(role => {
        return role == this.accessGuardService.getRole();
      }) != null;
      if(haveRole && this.accessGuardService.isAdmin()) return true;
      if(haveRole && this.accessGuardService.isAdministration()) return true;
      alert('You dont have access to this page');
      return false;
  }

}
