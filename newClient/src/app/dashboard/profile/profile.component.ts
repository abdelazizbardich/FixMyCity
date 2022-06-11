import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/Objects/Role';
import { User } from 'src/app/Objects/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile:{firstName: String,lastName: String,email: String,username: String,password: String,passwordConfirmation: String} = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  }
  constructor() { }

  ngOnInit(): void {
    const user = localStorage.getItem(environment.app_id+'_user')
    if(user != null && user != undefined){
      const {firstName,lastName,email} = JSON.parse(user).user;
      this.profile.firstName = firstName;
      this.profile.lastName = lastName;
      this.profile.email = email;
      this.profile.username = JSON.parse(user).username;
    }
  }


  setValue(name:any,event:any){
    // this.profile[name] = event.target.value as String
  }

  update($event:any){
    $event.preventDefault();
    console.log(this.profile);
  }
}
