import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { 
  }

  async getUsers():Promise<Iuser[]>{
    const res = await this.http.get<Iuser[]>(this.url).toPromise()
    return res.filter((item) => item.id > 5)
    // return res
  }
}

export interface Iuser {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string
  address: object,
  company: object
}
