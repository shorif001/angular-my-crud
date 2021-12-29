import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  
  getUsers(){
    this.userService.getUsers().then((users) => {
      console.log(users)
    }).catch((error) => {
      console.log(error)
    })
  }

}
