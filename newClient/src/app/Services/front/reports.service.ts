import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  getReports(){
    return this.http.get<any[]>('/public/reports',{ observe: 'response' })
  }
  getReport(id:number){
    return this.http.get<any[]>(`/public/reports/`+id,{ observe: 'response' })
  }
}
