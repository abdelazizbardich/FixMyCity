import { AdministrationService } from './../../Services/administration/administration.service';
import { Administration } from 'src/app/Objects/Administration';
import { User } from 'src/app/Objects/User';
import { Specialisation } from 'src/app/Objects/Specialisation';
import { Admin } from './../../Objects/Admin';
import { ProblemService } from './../../Services/problem/problem.service';
import { Problem } from './../../Objects/Problem';
import { Report } from './../../Objects/Report';
import { ReportService } from './../../Services/report/report.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user/user.service';
import { AdminService } from 'src/app/Services/admin/admin.service';
import { SpecialisationService } from 'src/app/Services/specialisation/specialisation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  reports:Report[] = [];
  reportsTable:any[] = [];
  problems:Problem[] = [];
  admins:Admin[] = [];
  administrations:Administration[] = [];
  specialisations:Specialisation[] = [];
  users:User[] = [];
  activeReport:any = null;

  isViewing:boolean = false;

  constructor(
    private reportService:ReportService,
    private problemService:ProblemService,
    private adminService:AdminService,
    private userService:UserService,
    private specialisationService:SpecialisationService,
    private administrationService:AdministrationService
  ) { }

  ngOnInit(): void {
    this.problemService.get().subscribe((data: any) => {this.problems = data.body})
    this.reportService.get().subscribe((data: any) => {
      this.reports = data.body;
      this.setTableData();
    })
    this.adminService.get().subscribe((data: any) => {this.admins = data.body})
    this.userService.get().subscribe((data: any) => {this.users = data.body})
    this.specialisationService.get().subscribe((data: any) => {this.specialisations = data.body})
    this.administrationService.get().subscribe((data: any) => {this.administrations = data.body})
  }


  setTableData(){
    this.reportsTable = this.reports.map(report => {
      // const status  = report.status ? 'Solved' : 'Pending';

      return [
        {key:'problem',val:report.problem?.name}, // problem
        {key:'map',val:[report.lat,report.lan]},  // localisation
        {key:'boolean',val:report.status,labels:["Solved",'Pending']}, // status
        {key:'note',val:report.note?.substring(0,70)+"..."},  // note
        {key:'created_at',val:moment(report.createdAt).format('YYYY-MM-DD hh:mm:ss')}, // created_at
        {key:'actions',actions:[  // actions
          {action:"view",id:report.id}
        ]}
      ]
    })
  }

  callView(id:any){
    this.activeReport = this.reports.find(report => report.id == id);
    this.isViewing = true;
  }

  callClose(){
    this.isViewing = false;
  }

}
