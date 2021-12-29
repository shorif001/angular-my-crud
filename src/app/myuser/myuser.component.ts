import { Component, OnInit } from '@angular/core';
import { Muser, MyuserService } from './myuser.service';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css']
})
export class MyuserComponent implements OnInit {

  constructor(private MyuserService:MyuserService) { }

  ngOnInit(): void {
    this.getMyuserList();
  }

  userData:any =  [];
  getMyuserList(){
    this.MyuserService.getMyuserList().subscribe((response)=>{
      console.log(response);
      this.userData = response;
    })
  }
  // getMyuserList(){
  //   this.MyuserService.getMyuserList().subscribe((datat:any)=>{
  //     console.log(datat);
  //   })
  // }

}



