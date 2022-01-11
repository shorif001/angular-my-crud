import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

childData = "hello i am child data";
  url="https://global-1bb0f.firebaseio.com/smartDumb.json";
    userData:any = '';
  // items:any = [];

  constructor(private http:HttpClient){
    this.http.get(this.url).toPromise().then(data=>{
      this.userData=data;
    })
  }

  ngOnInit(): void {
  }

}
