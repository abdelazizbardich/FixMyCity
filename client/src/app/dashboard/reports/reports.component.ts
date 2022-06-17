import { AccessGuardService } from 'src/app/Services/access-guard/access-guard.service';
import { ReportService } from './../../Services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/Objects/Report';
import * as moment from 'moment';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  cols:String[] = ['','Problem','Localisation','Status','Note','created at','Actions'];
  reports:Report[] = [];
  reportsTable:any[] = [];
  activeReport:Report  = {
    id:null,
    status:null,
    problem:{
      name:null
    }
  };
  isViewing:boolean = false;
  isDeletting:boolean = false;
  isEditing:boolean = false;

  constructor(private reportService:ReportService,private accessGuardService:AccessGuardService) { }

  ngOnInit(): void {
    this.reportService.get().subscribe((data: any) => {
      this.reports = data.body;
      this.setTableData();
    })
  }

  setTableData(){
    this.reportsTable = this.reports.map(report => {
      return [
        {key:'image',val:report.problem?.name,path:report.problem?.icon}, // problem
        {key:'problem',val:report.problem?.name}, // problem
        {key:'map',val:[report.lat,report.lan]},  // localisation
        {key:'boolean',val:report.status,labels:["Solved",'Pending']}, // status
        {key:'note',val:report.note?.substring(0,70)+"..."},  // note
        {key:'created_at',val:moment(report.createdAt).format('YYYY-MM-DD hh:mm:ss')}, // created_at
        {key:'actions',actions:[  // actions
          {action:"view",id:report.id},
          {action:"edit",id:report.id},
          (this.accessGuardService.isAdmin()) ? {action:"delete",id:report.id} : null
        ]}
      ]
    })
  }

  callView(id:any){
    this.activeReport = this.reports.find(report => report.id == id) as Report;
    this.isViewing = true;
  }

  callEdit(id:any){
    this.activeReport = this.reports.find(report => report.id == id) as Report;
    this.isEditing = true;
  }

  callDelete(id:any){
    if(this.accessGuardService.isAdmin()) return;
    this.activeReport.id = id;
    this.isDeletting = true;
  }

  callClose(){
    this.isViewing = false;
    this.isEditing = false;
    this.isDeletting = false;
  }

  delete(){
    if(this.accessGuardService.isAdmin()) return;
    this.reportService.delete(this.activeReport.id as number).subscribe((data: any) => {
    this.reports = this.reports.filter(report => report.id != this.activeReport.id);
    this.setTableData();
    this.isDeletting = false;
    })
  }

  edit(){
    this.reportService.update(this.activeReport).subscribe((data: any) => {
      this.isEditing = false;
      this.setTableData();
    })
  }

  setStatus(value:any){
    (value.target.value) == '1' ? this.activeReport.status = true : this.activeReport.status = false;
  }
}
