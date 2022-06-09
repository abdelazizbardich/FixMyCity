import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<any[]>(`/report/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<any>(`/report/`,{},{ observe: 'response' })
  }
  update(report:any):any{
    return this.http.put<any>(`/report/`,report,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<any>(`/report/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<any>(`/report/${id}`,{ observe: 'response' })
  }
}
