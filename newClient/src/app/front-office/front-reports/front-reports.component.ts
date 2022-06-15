import { Report } from './../../Objects/Report';
import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/Services/front/reports.service';
@Component({
  selector: 'app-front-reports',
  templateUrl: './front-reports.component.html',
  styleUrls: ['./front-reports.component.scss']
})
export class FrontReportsComponent implements OnInit {


  constructor(private reportsService:ReportsService) { }

  projects:any = [];

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
