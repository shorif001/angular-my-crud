import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() pData:any


  ngOnChanges(){
    console.log("Parent data updated");
  }


  onClick(){
    console.log("btn Clicked");
  }


  ngOnInit(): void {
  }

  //child to parent
  @Output() childStringData: EventEmitter<string> = new EventEmitter();

  childData:string = "hi i am child data";
  

  sendData(){
   this.childStringData.emit(this.childData);
  } 

}
