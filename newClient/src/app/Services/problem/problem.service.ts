import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private http:HttpClient) { }

  get():any{
    return this.http.get<any[]>(`/problem/`,{ observe: 'response' })
  }
  add():any{
    return this.http.post<any>(`/problem/`,{},{ observe: 'response' })
  }
  update(problem:any):any{
    return this.http.put<any>(`/problem/`,problem,{ observe: 'response' })
  }
  delete(id:number):any{
    return this.http.delete<any>(`/problem/${id}`,{ observe: 'response' })
  }
  find(id:number):any{
    return this.http.get<any>(`/problem/${id}`,{ observe: 'response' })
  }

}
