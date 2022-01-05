import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  parentData = 5;
  updateData(){
    this.parentData=Math.floor(Math.random()*10);
  }

pData="This is parent data";

outputString:string=""

getData3(value:any){
  this.outputString = value;
console.log(value);
}



updateData1(){
  this.pData="Parent data updated";
}


//for user-details (#27 reusable component)
userDetails=[
  {name:'shorif', email:'shorif@gmail.com'},
  {name:'rohim', email:'rohim@gmail.com'},
  {name:'korim', email:'korim@gmail.com'},
  {name:'jamil', email:'jamil@gmail.com'},
  {name:'faruk', email:'faruk@gmail.com'},
]

//child to parent

childDataReceived:string="";

receivedData(event: string){
console.log(event);
this.childDataReceived = event;
}


}
