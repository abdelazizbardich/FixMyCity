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

  reports:any = [];
  thisYear:number = new Date().getFullYear();
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.get().subscribe((res:any) =>{
      console.log(res);
    })
  }

  logoutUser(){
    window.localStorage.removeItem(`${environment.app_id}_token`);
    this.router.navigateByUrl('/auth/login');
  }

}
