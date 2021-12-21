import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMyuserComponent } from './create-myuser/create-myuser.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { MyuserComponent } from './myuser/myuser.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  
  {
    path:"home", component:HomeComponent
  },
  {
    path:"new", component:NewComponentComponent
  },
  {
    path:"user", component:UserComponent
  },
  {
    path:"userinfo", component:UserInfoComponent
  },
  {
    path:"createuser", component:CreateUserComponent
  },
  {
    path:"myuser", component:MyuserComponent
  },
  {
    path:"create-myuser", component:CreateMyuserComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
