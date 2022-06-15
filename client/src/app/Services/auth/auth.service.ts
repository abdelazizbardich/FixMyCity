import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(login:String,password:String):any{
    return this.http.post<any>(`/auth/login`,{"login":login,"password":password},{ observe: 'response' })
  }

  register(firstName:String,lastname:String,login:String,password:String):any{
    return this.http.post<any>(`/auth/register`,{"firstName":firstName,"lastname":lastname,"login":login,"password":password},{ observe: 'response' })
  }
}
