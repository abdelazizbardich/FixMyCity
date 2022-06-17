import { SpecialisationService } from './../../Services/specialisation/specialisation.service';
import { map } from 'rxjs';
import { Specialisation } from './../../Objects/Specialisation';
import { ProblemService } from './../../Services/problem/problem.service';
import { Problem } from './../../Objects/Problem';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AccessGuardService } from 'src/app/Services/access-guard/access-guard.service';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.scss']
})
export class ProblemsComponent implements OnInit {

  cols:any[] = ["name","icon","specialisation","Reports","created at",'Actions']
  problems: Problem[] = []
  specialisations:Specialisation[] = []
  tableData: any = [];

  isViewing:boolean = false;
  isCreating:boolean = false;
  isEditing:boolean = false;
  isDeletting:boolean = false;

  activeProblem:Problem = {}

  formData:any = {};
  constructor(
    private problemService:ProblemService,
    private specialisationService:SpecialisationService,
    private accessGuardService:AccessGuardService
    ) { }

  ngOnInit(): void {
    this.problemService.get().subscribe((problems:any) => {
      this.problems = problems.body.map((problem:any) => {
        problem.createdAt = moment(problem.createdAt).format('YYYY-MM-DD HH:mm:ss')
        return problem as Problem
      })
      this.setTableData()
    })
    if(this.accessGuardService.isAdmin()){
      this.specialisationService.get().subscribe((specialisations:any) => {
        this.specialisations = specialisations.body.map((specialisation:any) => {
          return specialisation as Specialisation
        })
      })
    }
  }

  setTableData(){
    this.tableData = this.problems.map(problem => {
      return [
        {key:'name',val:problem.name},
        {key:'image',val:problem.name,path:problem.icon},
        {key:'link',val:problem.specialisation?.name,link:'/dashboard/specialisation/'+problem.specialisation?.id},
        {key:'reports',val:problem.reports?.length},
        {key:'created_at',val:moment(problem.createdAt).format('YYYY-MM-DD HH:mm:ss')},
          {key:'actions',actions:[
            {action:"view",id:problem.id},
            (this.accessGuardService.isAdmin()) ?{action:"edit",id:problem.id}:null,
            (this.accessGuardService.isAdmin()) ?{action:"delete",id:problem.id}:null
          ]}
      ]
    })
  }

  callView(id:any){
    this.isViewing = true;
    this.activeProblem = this.problems.find(problem => problem.id === id) as Problem;
  }

  callCreate(){
    if(this.accessGuardService.isAdmin()) return;
    this.isCreating = true;
  }

  callEdit(id:any){
    if(this.accessGuardService.isAdmin()) return;
    this.isEditing = true;
    this.activeProblem = this.problems.find(problem => problem.id === id) as Problem;
    this.formData = {
      name: this.activeProblem.name,
      icon: this.activeProblem.icon,
      specialisation: this.activeProblem.specialisation?.id,
      reports: this.activeProblem.reports?.length,
      createdAt: moment(this.activeProblem.createdAt).format('YYYY-MM-DD HH:mm:ss')
    }
  }

  callDelete(id:any){
    if(this.accessGuardService.isAdmin()) return;
    this.isDeletting = true;
    this.activeProblem.id = id as number;
  }

  callClose(){
    this.isViewing = false;
    this.isCreating = false;
    this.isEditing = false;
    this.isDeletting = false;
    this.formData = {};
  }

  setValue(key:any,val:any){
    if(this.accessGuardService.isAdmin()) return;
    this.formData[key] = val.target.value;
  }

  add(){
    if(this.accessGuardService.isAdmin()) return;
    const problem = {
      name:this.formData['name'],
      icon:this.formData['icon'],
      specialisation:{
          id:this.formData['specialisation']
      }
    }
    this.problemService.add(problem).subscribe((problem:any) => {
      this.problems.push(problem.body)
      this.ngOnInit()
      this.callClose()
    }
    )
  }

  edit(){
    if(this.accessGuardService.isAdmin()) return;
    const problem = {
      id:this.activeProblem.id,
      name:this.formData['name'],
      icon:this.formData['icon'],
      specialisation:{
        id:this.formData['specialisation']
      }
    }
    this.problemService.update(problem).subscribe(()=>{
      this.ngOnInit()
      this.callClose()
    }
    )
  }

  delete(){
    if(this.accessGuardService.isAdmin()) return;
    this.problemService.delete(this.activeProblem.id as number).subscribe(()=>{
      this.problems = this.problems.filter(problem => problem.id !== this.activeProblem.id)
      this.setTableData()
      this.callClose()
    }
    )
  }




}
