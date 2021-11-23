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
    username.value = '';
    email.value = '';
  }

  onDeleteUser(id:number){
    if(confirm('Do you want to delete this user?')){
      this.posts.splice(id,1);
    }
  }

}
