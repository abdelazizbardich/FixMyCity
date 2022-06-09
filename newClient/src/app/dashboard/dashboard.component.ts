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
  token:String = '';
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.findAll(this.token).subscribe((res:any) =>{
      console.log(res);

    })
  }

}
