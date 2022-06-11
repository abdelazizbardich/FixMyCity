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

  edit(id:any){
    alert("==> edit: "+id);

  }
  view(id:any){
    alert("==> View: "+id);
  }
  delete(id:any){
    alert("==> Delete: "+id);
  }


}
