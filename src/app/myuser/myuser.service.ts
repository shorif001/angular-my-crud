import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyuserService {

  private myUserUrl = "http://localhost:3000/posts";
  constructor(private http:HttpClient) { }


  getMyuserList():Observable<Muser>{
    return this.http.get<Muser>(this.myUserUrl);
  }

  createUser(users:Muser):Observable<any>{
    return this.http.post<any>(this.myUserUrl, users);
  }

  
}

export interface Muser{
  username:string;
  email:string
  
}