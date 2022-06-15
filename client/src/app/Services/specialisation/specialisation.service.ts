import { Specialisation } from './../../Objects/Specialisation';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecialisationService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<HttpResponse<Specialisation[]>>(`/specialisation/`,{ observe: 'response' })
  }
  add(specialisation:Specialisation):any{
    return this.http.post<HttpResponse<Specialisation>>(`/specialisation/`,specialisation,{ observe: 'response' })
  }
  update(specialisation:any):any{
    return this.http.put<HttpResponse<Specialisation>>(`/specialisation/`,specialisation,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<HttpResponse<Specialisation>>(`/specialisation/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<HttpResponse<Specialisation>>(`/specialisation/${id}`,{ observe: 'response' })
  }
}
