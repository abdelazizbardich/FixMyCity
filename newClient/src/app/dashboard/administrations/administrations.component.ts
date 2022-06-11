import { Administration } from 'src/app/Objects/Administration';
import { AdministrationService } from './../../Services/administration/administration.service';
import { Component, OnInit } from '@angular/core';
import { Specialisation } from 'src/app/Objects/Specialisation';

@Component({
  selector: 'app-administrations',
  templateUrl: './administrations.component.html',
  styleUrls: ['./administrations.component.scss']
})
export class AdministrationsComponent implements OnInit {

  cols:String[] = ["Username","Email","Phones","Geo localisation","Specialisation",'Actions'];
  isViewing:boolean = false;
  isCreating:boolean = false;
  isEditing:boolean = false;
  isDeletting:boolean = false;
  administrations:any[][] = [];

  constructor(private administrationService:AdministrationService) { }

  ngOnInit(): void {
    this.administrationService.get().subscribe((data:Administration[])=>{
      this.administrations = data.map(item=>{
        return [
          {key:'username',val:item.login},
          {key:'email',val:item.email},
          {key:'phones',val:item.phones},
          {key:'map',val:[item.lat,item.lan]},
          {key:'link',val:item.specialisation.name,link:'/dashboard/specialisation/'+item.specialisation.id},
          {key:'actions',actions:[
            {action:"view",id:item.userId},
            {action:"edit",id:item.userId},
            {action:"delete",id:item.userId}
          ]}
        ]
      });
    })
  }

  callView(id:any){
    this.isViewing = true;
  }
  callAdd(id:any){
    this.isCreating = true;
  }
  callEdit(id:any){
    this.isEditing = true;
  }
  callDelete(id:any){
    this.isDeletting = true;
  }

  callClose(){
    this.isViewing = false;
    this.isCreating = false;
    this.isEditing = false;
    this.isDeletting = false;
  }

  view(sumbit=false){
    alert("==> View: ");
  }
  add(){
    this.isCreating = true;
  }
  edit(sumbit=false){
    alert("==> edit: ");
  }
  delete(sumbit=false){
    alert("==> delete: ");
  }


}
