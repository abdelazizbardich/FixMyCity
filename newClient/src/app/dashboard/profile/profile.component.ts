import { UserService } from './../../Services/user/user.service';
import { environment } from './../../../environments/environment';
import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/Objects/Role';
import { User } from 'src/app/Objects/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:any =  {
    firstName:"",
    lastName:"",
    email:"",
    login:"",
  }
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    const user = localStorage.getItem(environment.app_id+'_user')
    if(user != null && user != undefined){
      const {firstName,lastName,email} = JSON.parse(user).user;
      this.profile.firstName = firstName as String;
      this.profile.lastName = lastName as String;
      this.profile.email = email as String;
      this.profile.login = JSON.parse(user).username as String;
    }
  }

  setValue(name:any,event:any){
    this.profile[name] = event.target.value as String
  }

  update($event:any){
    $event.preventDefault();
    if(this.profile.password !== this.profile.password_conf){
      alert("Passwords do not match")
      return;
    }
    this.userService.update(this.profile).subscribe((res:any)=>{
      console.log(res);
    })
  }
}
