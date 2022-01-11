import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {


  @Input() myInput:any
  @Output() even: EventEmitter<string> = new EventEmitter();
// @Input() receivedParent:any
// @Output() even: EventEmitter<string> = new EventEmitter();

sendToParent(){
  
}

childData="I am Child";

getParentDataField = '';

getParentData(){
this.myInput = this.getParentDataField;
console.log("object");
}

  constructor() { }

  ngOnInit(): void {
    console.log(this.myInput);
  }

}
