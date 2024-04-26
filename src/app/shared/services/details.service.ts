import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http:HttpClient) { }
  getUserDetails(id:number):Observable<any>{
    return this.http.get(`https://reqres.in/api/users/${id}`);
  }
}
