import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  
// interpolation start 

appName = "This is app";
name="shorif"

getName(){
  return "This is function"
}

obj={
  name: "This is object name",
  age: 20
}

arr=['this is array name', 'this is array name1', 'this is array name2']

siteUrl = window.location.href;

// interpolation end 

// function on button click
getName1(paramiterPass:any){
  alert(paramiterPass)
}

// event

getVal(){
  console.log("shorif");
}

getData(val:string){
  console.log(val);
}




  constructor() { }

  ngOnInit(): void {
  }

}
