import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Report } from 'src/app/Objects/Report';
import { ReportsService } from 'src/app/Services/front/reports.service';
@Component({
  selector: 'app-front-home',
  templateUrl: './front-home.component.html',
  styleUrls: ['./front-home.component.scss']
})
export class FrontHomeComponent implements OnInit {

  projects:any = [];

  constructor(private reportsService:ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getReports().subscribe((res:any)=>{
      this.projects = res.body.map((report:Report)=>{
        return {
          title:report.problem?.name,
          desc:report.note,
          img:report.problem?.icon,
          map:{lat:report.lat,lan:report.lan},
          url:"/report/"+report.id
        }
      })
    }
  )
  }

}
