import { map } from 'rxjs';
import { SpecialisationService } from './../../Services/specialisation/specialisation.service';
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

  servicesData:any[] = [];
  specialisations:Specialisation[] = [];
  cols:String[] = [
    "Username",
    "Email",
    "Phones",
    "Geo localisation",
    "Specialisation",
    'Actions'
  ];
  isViewing:boolean = false;
  isCreating:boolean = false;
  isEditing:boolean = false;
  isDeletting:boolean = false;
  administrations:any[][] = [];
  activeAdministration:any = {};
  formData:any = {
    username: null,
    email: null,
    phone_1: '',
    phone_2: '',
    phone_3: '',
    lat: null,
    lan: null,
    specialisation: null,
    password: null,
    password_confirmation: null
  };

  constructor(private administrationService:AdministrationService,private specialisationService:SpecialisationService) { }

  ngOnInit(): void {
    this.isCreating = this.isEditing = this.isDeletting = this.isViewing = false;
    this.specialisationService.get().subscribe((data:any) => {
        this.specialisations = data.body as Specialisation[];
      }
    );
    this.administrationService.get().subscribe((data:any)=>{
      this.servicesData = data.body as Administration[];
      this.administrations = this.servicesData.map(item=>{
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
    this.activeAdministration = this.servicesData.filter(item=>item.userId == id)[0];
    this.isViewing = true;
  }
  callAdd(){
    this.isCreating = true;
  }
  callEdit(id:any){
    this.activeAdministration = this.servicesData.filter(item=>item.userId == id)[0];
    this.formData.username = this.activeAdministration.login;
    this.formData.email = this.activeAdministration.email;
    this.formData.phone_1 = this.activeAdministration.phones[0];
    this.formData.phone_2 = this.activeAdministration.phones[1];
    this.formData.phone_3 = this.activeAdministration.phones[2];
    this.formData.lat = this.activeAdministration.lat;
    this.formData.lan = this.activeAdministration.lan;
    this.formData.specialisation = this.activeAdministration.specialisation.id;
    this.isEditing = true;
  }
  callDelete(id:any){
    this.activeAdministration.userId = id;
    this.isDeletting = true;
  }

  callClose(){
    this.isViewing = false;
    this.isCreating = false;
    this.isEditing = false;
    this.isDeletting = false;
  }

  setValue(key:any,val:any){
    this.formData[key] = val.target.value;
  }

  add(){
    if(this.formData.password != this.formData.password_confirmation){
      alert("Passwords do not match");
      return;
    }
    if(this.formData.username == null || this.formData.email == null || this.formData.password == null || this.formData.password_confirmation == null || this.formData.specialisation == null){
      alert("All fields are required");
      return;
    }
    const administration:Administration =
      {
        firstName: null,
        lastName: null,
        email: this.formData.email,
        phones: [this.formData.phone_1,this.formData.phone_2,this.formData.phone_3],
        lat: this.formData.lat,
        lan: this.formData.lan,
        login: this.formData.username,
        password: this.formData.password,
        specialisation:{
          id: +this.formData.specialisation
        }
      }
    this.administrationService.add(administration).subscribe((data:any)=>{
      this.ngOnInit();
    }
    );
  }
  edit(){
    if(this.formData.password != this.formData.password_confirmation){
      alert("Passwords do not match");
      return;
    }
    if(this.formData.username == null || this.formData.email == null || this.formData.specialisation == null){
      alert("All fields are required");
      return;
    }
    const administration:Administration =
      {
        userId: this.activeAdministration.userId,
        email: this.formData.email,
        phones: [this.formData.phone_1,this.formData.phone_2,this.formData.phone_3],
        lat: this.formData.lat,
        lan: this.formData.lan,
        login: this.formData.username,
        password: this.formData.password,
        specialisation:{
          id: +this.formData.specialisation
        }
      }
    this.administrationService.update(administration).subscribe((data:any)=>{
      this.ngOnInit();
    }
    );
  }
  delete(){
    this.administrationService.delete(this.activeAdministration.userId).subscribe((data:any)=>{
      this.ngOnInit();
    });
  }


}
