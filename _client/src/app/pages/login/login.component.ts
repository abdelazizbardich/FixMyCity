import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginData:any = { username:'',password:''}
  constructor() { }

  ngOnInit(): void {
  }

  setValue(key:String,value:any){
    this.loginData[key+''] = value
  }

  send(event:any){
    event.preventDefault()
    console.log(this.loginData);
  }

}
