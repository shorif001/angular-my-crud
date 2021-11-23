import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts=[
    {
      username: "Shorif",
      email: "test@test.com"
    },
    {
      username: "Shorif",
      email: "test@test.com"
    }
  ]


  onAddUser(username:any, email:any){
    this.posts.push({
      username:username.value,
      email:email.value,
      
    });
  }

}
