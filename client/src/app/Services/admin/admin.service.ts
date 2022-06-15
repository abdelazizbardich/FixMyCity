import { Admin } from './../../Objects/Admin';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }


  get():any{
    return this.http.get<HttpResponse<any[]>>(`/admin/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<HttpResponse<any>>(`/admin/`,{},{ observe: 'response' })
  }
  update(admin:Admin):any{
    return this.http.put<HttpResponse<any>>(`/admin/`,admin,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<HttpResponse<any>>(`/admin/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<HttpResponse<any>>(`/admin/${id}`,{ observe: 'response' })
  }

}
