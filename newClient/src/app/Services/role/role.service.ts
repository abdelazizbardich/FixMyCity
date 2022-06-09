import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<any[]>(`/role/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<any>(`/role/`,{},{ observe: 'response' })
  }
  update(role:any):any{
    return this.http.put<any>(`/role/`,role,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<any>(`/role/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<any>(`/role/${id}`,{ observe: 'response' })
  }
  
}
