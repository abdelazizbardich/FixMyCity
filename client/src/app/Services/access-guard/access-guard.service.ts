import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService {

  localUser:any;
  constructor() {
    this.localUser = window.localStorage.getItem(`${environment.app_id}_user`);
  }

  getRole(){
    if(this.localUser == null || this.localUser == '') return '';
    let user = JSON.parse(this.localUser);
    return user.authorities[0].authority;
  }

  isAdmin():boolean{
    if(this.localUser == null || this.localUser == '') return false;
    let user = JSON.parse(this.localUser);
    if(user.authorities.filter((authority:any) => {return authority.authority == 'ROLE_ADMIN';}).length > 0) return true;
    return false;
  }


  isAdministration():boolean{
    if(this.localUser == null || this.localUser == '') return false;
    let user = JSON.parse(this.localUser);
    if(user.authorities.filter((authority:any) => {return authority.authority == 'ROLE_ADMINISTRATION';}).length > 0) return true;
    return false;
  }
}
