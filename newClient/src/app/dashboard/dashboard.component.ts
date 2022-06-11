import { User } from './../Objects/User';
import { Router } from '@angular/router';
import { AdminService } from './../Services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Report } from '../Objects/Report';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  thisYear:number = new Date().getFullYear();
  constructor(private adminService:AdminService,private router:Router) { }
  user:User = {
    userId: 0,
    firstName: '',
    lastName: '',
    email: '',
    login: '',
    password: '',
    rememberToken: '',
    isActive: false,
    role: undefined,
    createdAt: undefined
  };
  ngOnInit(): void {
    const user = window.localStorage.getItem(`${environment.app_id}_user`);
    if(user != null && user != undefined){
      this.user = JSON.parse(user).user;
    }
  }

  logoutUser(){
    window.localStorage.removeItem(`${environment.app_id}_user`);
    window.localStorage.removeItem(`${environment.app_id}_token`);
    this.router.navigateByUrl('/auth/login');
  }

}
