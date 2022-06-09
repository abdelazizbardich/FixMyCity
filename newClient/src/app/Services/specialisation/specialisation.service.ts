import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialisationService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<any[]>(`/specialisation/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<any>(`/specialisation/`,{},{ observe: 'response' })
  }
  update(specialisation:any):any{
    return this.http.put<any>(`/specialisation/`,specialisation,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<any>(`/specialisation/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<any>(`/specialisation/${id}`,{ observe: 'response' })
  }
}
