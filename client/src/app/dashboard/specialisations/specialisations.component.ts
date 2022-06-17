import { map } from 'rxjs';
import { Specialisation } from './../../Objects/Specialisation';
import { SpecialisationService } from './../../Services/specialisation/specialisation.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-specialisations',
  templateUrl: './specialisations.component.html',
  styleUrls: ['./specialisations.component.scss']
})
export class SpecialisationsComponent implements OnInit {

  cols:String[] = ['','Name','created at','Actions'];
  specialisations:any[] = [];

  specialisationsTable:any[] = [];
  activeSpecialisation:Specialisation = {}
  formData:any = {};
  isViewing:boolean = false;
  isCreating:boolean = false;
  isDeletting:boolean = false;
  isEditing:boolean = false;

  constructor(private specialisationService:SpecialisationService) { }

  ngOnInit(): void {
    this.specialisationService.get().subscribe((res:any)=>{
      this.specialisations = res.body
      this.specialisationsTable = this.specialisations.map((sp:any)=>{
        return [
          {key:'image',val:sp.name,path:sp.icon}, // image
          {key:'name',val:sp.name}, // name
          {key:'created_at',val:moment(sp.createdAt).format('YYYY-MM-DD HH:mm:ss')}, // created_at
          {key:'actions',actions:[  // actions
            {action:"view",id:sp.id},
            {action:"edit",id:sp.id}
          ]}
        ]
      })
    })
  }

  callView(id:any){
    this.activeSpecialisation = this.specialisations.find(specialisation => specialisation.id == id) as Specialisation;
    this.isViewing = true;
  }

  callCreate(){
    this.isCreating = true;
  }

  callEdit(id:any){
    this.activeSpecialisation = this.specialisations.find(specialisation => specialisation.id == id) as Specialisation;
    this.isEditing = true;
  }

  callDelete(id:any){
    this.activeSpecialisation = this.specialisations.find(specialisation => specialisation.id == id) as Specialisation;
    this.isDeletting = true;
  }

  callClose(){
    this.isViewing = false;
    this.isCreating = false;
    this.isEditing = false;
  }

  delete(){
    this.specialisationService.delete(this.activeSpecialisation.id as number).subscribe((res:any)=>{
      this.callClose();
      this.ngOnInit();
    })
  }

  create(){
    this.specialisationService.add({
        id: this.activeSpecialisation.id,
        name: this.formData.name,
        icon: this.formData.icon,
        createdAt: this.activeSpecialisation.createdAt
    }).subscribe((res:any)=>{
      this.callClose();
      this.ngOnInit();
    })
  }
  edit(){
    this.specialisationService.update({
        id: this.activeSpecialisation.id,
        name: this.formData.name,
        icon: this.formData.icon,
        createdAt: this.activeSpecialisation.createdAt
    }).subscribe((res:any)=>{
      this.callClose();
      this.ngOnInit();
    })
  }

  setValue(key:any,val:any){
    this.formData[key] = val.target.value;
  }

}
