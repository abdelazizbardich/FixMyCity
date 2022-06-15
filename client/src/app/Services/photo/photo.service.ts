import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<any[]>(`/photo/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<any>(`/photo/`,{},{ observe: 'response' })
  }
  update(photo:any):any{
    return this.http.put<any>(`/photo/`,photo,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<any>(`/photo/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<any>(`/photo/${id}`,{ observe: 'response' })
  }
}
