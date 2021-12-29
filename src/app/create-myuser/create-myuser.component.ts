import { Component, OnInit } from '@angular/core';
import { Muser, MyuserService } from '../myuser/myuser.service';

@Component({
  selector: 'app-create-myuser',
  templateUrl: './create-myuser.component.html',
  styleUrls: ['./create-myuser.component.css']
})
export class CreateMyuserComponent implements OnInit {

  
  users = {
    userName: '',
    email: ''
  }
  constructor(private myuserService:MyuserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.users);
  }

}
