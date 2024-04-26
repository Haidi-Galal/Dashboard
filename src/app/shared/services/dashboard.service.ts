import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http:HttpClient) { }
  
  getUsersData(pageNo:number):Observable<any>{
    return this._http.get(`https://reqres.in/api/users?page=${pageNo}`);
  }
}
