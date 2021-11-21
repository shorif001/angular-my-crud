import { Component, OnInit } from '@angular/core';
import {Iuser, UserService} from '../user-info/user.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  users:Iuser[] = []
  constructor(private userData:UserService) { 
    this.userData.getData().subscribe((data: Iuser[])=>{
      console.log(data);
      this.users = data;
    })
  }

  ngOnInit(): void {
  }

}
