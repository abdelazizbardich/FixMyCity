import { Administration } from './../../Objects/Administration';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {
  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<HttpResponse<Administration[]>>(`/administration/`,{ observe: 'response' })
  }
  add(body:Administration):any{
    return this.http.post<HttpResponse<any>>(`/administration/`,body,{ observe: 'response' })
  }
  update(admin:Administration):any{
    return this.http.put<HttpResponse<any>>(`/administration/`,admin,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<HttpResponse<any>>(`/administration/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<HttpResponse<any>>(`/administration/${id}`,{ observe: 'response' })
  }

}
