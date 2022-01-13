import { Component,  Input,  OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

  
@Input() parentData:any
@Output() event: EventEmitter<string> = new EventEmitter();


childData="I am Child";
sendData(){
  this.event.emit(this.childData);
  console.log("object");
}




  constructor() { }

  ngOnInit(): void {
    
  }

}
