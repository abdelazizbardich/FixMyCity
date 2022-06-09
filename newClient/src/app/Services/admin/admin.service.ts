import { Admin } from './../../Objects/Admin';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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


  get():any{
    return this.http.get<HttpResponse<any[]>>(`/admin/`,this.headers)
  }
  add():any{
    return this.http.post<HttpResponse<any>>(`/admin/`,{},this.headers)
  }
  update(admin:Admin):any{
    return this.http.put<HttpResponse<any>>(`/admin/`,admin,this.headers)
  }
  delete(id:number):any{
    return this.http.delete<HttpResponse<any>>(`/admin/${id}`,this.headers)
  }
  find(id:number):any{
    return this.http.get<HttpResponse<any>>(`/admin/${id}`,this.headers)
  }

}
