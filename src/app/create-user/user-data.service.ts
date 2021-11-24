import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

  getDataFromApi(){
    let url = "http://localhost:3000/posts";
    return this.http.get(url);
  }
}
