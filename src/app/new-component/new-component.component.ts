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

getname11:any= '';
getName11(data:any){
  console.log(data);
  this.getname11 = data;
}


inputFieldData(data:any){
  console.log(data);
}



addMeFirst(data:any){
 console.log(data); 
}




  constructor() { }

  ngOnInit(): void {
  }

}
