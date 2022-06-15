import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<any[]>('/public/reports',{ observe: 'response' })
  }
}
