import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {


@Input() receivedParent:any
@Output() even: EventEmitter<string> = new EventEmitter();

sendToParent(){
  
}

childData="I am Child";


  constructor() { }

  ngOnInit(): void {
  }

}
