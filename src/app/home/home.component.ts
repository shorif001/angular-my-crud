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


// input field value

title = 'shorif'

displayVal="";
getValue(val:string){
  console.log(val);
  this.displayVal=val
}
// click value
displayVal1="";
getValue1(val:string){
  console.log(val);
  this.displayVal1=val
}



// counter example
count = 0;
counter(type:string){
// this.count++
type==='plus'?this.count++:this.count--
}


count1=0;
counter1(type1:string){
  // this.count1++
  type1==='plus1'?this.count1++:this.count1--
}

// property binding
name1:string="shorif";
disable=true;

// if else 

show=false


//ngFor

// users=['shorif', 'rohim', 'korim'];


// users=[
//   {name: "shorif", email: "a@B.com", phone: "010101"},
//   {name: "rohim", email: "r@r.com", phone: "010102"}
// ];


//nested loop

nestedLoop = [
  {name: "a",phone:"1111", email:"a@a.com", accounts:['facebook', 'gmail', 'yahoomail']},
  {name: "b",phone:"2222", email:"b@b.com", accounts:['youtube', 'instagram', 'ymail']},
  {name: "c",phone:"3333", email:"c@c.com", accounts:['linkedin', 'gmail', 'aolmail']}
]











  constructor() { }

  ngOnInit(): void {
  }

}
