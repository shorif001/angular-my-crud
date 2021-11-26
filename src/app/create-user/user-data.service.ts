import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) { }

   url = "http://localhost:3000/posts";
  getDataFromApi(){
    return this.http.get(this.url);
  }

  saveUsers(Muser:any){
    // return this.http.post(this.url.json)
    return this.http.post(this.url+"/uploadImages/"+Muser, {})
  }
}
