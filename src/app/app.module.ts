import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { MyuserComponent } from './myuser/myuser.component';
import { CreateMyuserComponent } from './create-myuser/create-myuser.component';
import { HomeComponent } from './home/home.component';
import { NewComponentComponent } from './new-component/new-component.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserInfoComponent,
    CreateUserComponent,
    MyuserComponent,
    CreateMyuserComponent,
    HomeComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
