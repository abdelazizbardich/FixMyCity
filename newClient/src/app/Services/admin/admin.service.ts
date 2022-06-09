import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  headers:any = {headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    }}

  constructor(private http : HttpClient) { }


  findAll(token:String):any{
    return this.http.get<any>(`/admin/`)
  }
}
