import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

title = "Multiple condition or else if";
// color="red";
color="green";


//switch case

color1 = 'green';


//Form

getData(data:NgForm){
  console.log(data);
}


// todo list

list:any=[];

addTask(item:string){
  console.log(item);
  this.list.push({id:this.list.length,name:item})
  console.log(this.list);
}

removeTask(id:number){
  console.log(id);
  this.list=this.list.filter((item: { id: number; })=>item.id!==id);
}














  constructor() { }

  ngOnInit(): void {
  }

}
