import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMyuserComponent } from './create-myuser/create-myuser.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DumbComponent } from './dumb/dumb.component';
import { HomeComponent } from './home/home.component';
import { MyuserComponent } from './myuser/myuser.component';
import { NewChildComponent } from './new-child/new-child.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewParentComponent } from './new-parent/new-parent.component';
import { SmartComponent } from './smart/smart.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // {
  //   path:"", redirectTo:'home',pathMatch: "full"
  // },
  
  {
    path:"home", component:HomeComponent
  },
  {
    path:"child", component:NewChildComponent
  },
  {
    path:"smart", component:SmartComponent
  },
  {
    path:"dumb", component:DumbComponent
  },
  {
    path:"parent", component:NewParentComponent
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
