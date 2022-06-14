import { User } from 'src/app/Objects/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<any[]>(`/user/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<any>(`/user/`,{},{ observe: 'response' })
  }
  update(user:User):any{
    return this.http.put<any>(`/user/`,user,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<any>(`/user/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<any>(`/user/${id}`,{ observe: 'response' })
  }
}
