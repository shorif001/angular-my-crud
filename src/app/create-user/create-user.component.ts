import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userDataFromService:UserDataService) { }


  ngOnInit(): void {
    this.getDataFromApi()
  }

  userData:any=[];

  getDataFromApi(){
    this.userDataFromService.getDataFromApi().subscribe((dataOne)=>{
      console.log(dataOne);
      this.userData = dataOne;
    });
  }
 


  // posts=[
  //   {
  //     username: "Shorif",
  //     email: "test@test.com"
  //   },
  //   {
  //     username: "Shorif",
  //     email: "test@test.com"
  //   }
  // ]


  onAddUser(username:any, email:any){
    // this.posts.push({
      this.userData.push({
      username:username.value,
      email:email.value,
    });
    username.value = '';
    email.value = '';
  }

  onDeleteUser(id:number){
    if(confirm('Do you want to delete this user?')){
      // this.posts.splice(id,1);
      this.userData.splice(id,1);
    }
  }

}



  


  