import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyuserService {

  constructor(private http:HttpClient) { }

  getMyuserList(): observable<Muser[]>{
  let myUserUrl = "http://localhost:3000/posts";
  return this.http.get<Muser[]>(myUserUrl);

}


  
}

export interface Muser{
  
  username:string;
  email:string
  
}