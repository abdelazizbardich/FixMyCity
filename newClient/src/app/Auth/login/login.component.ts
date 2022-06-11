import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:String = "";
  password:String = "";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  setLogin(event:any){
    this.login = event.target.value;
  }
  setPassword(event:any){
    this.password = event.target.value;
  }

  loginUser(event:any){
    event.preventDefault();
    this.auth.login(this.login,this.password).subscribe((res:any,err:any) =>{
      window.localStorage.setItem(`${environment.app_id}_token`,res.body.token);
      window.localStorage.setItem(`${environment.app_id}_user`,JSON.stringify(res.body.user));
      this.router.navigateByUrl('/dashboard');
    })
  }

}
