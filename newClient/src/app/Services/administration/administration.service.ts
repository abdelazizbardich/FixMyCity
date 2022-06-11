import { Administration } from './../../Objects/Administration';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  headers:any = {headers:{
    "Content-Type":"application/json",
    "Accept":"application/json"
  }}

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<HttpResponse<Administration[]>>(`/administration/`,this.headers)
  }
  add():any{
    return this.http.post<HttpResponse<any>>(`/administration/`,{},this.headers)
  }
  update(admin:Administration):any{
    return this.http.put<HttpResponse<any>>(`/administration/`,admin,this.headers)
  }
  delete(id:number):any{
    return this.http.delete<HttpResponse<any>>(`/administration/${id}`,this.headers)
  }
  find(id:number):any{
    return this.http.get<HttpResponse<any>>(`/administration/${id}`,this.headers)
  }

}
