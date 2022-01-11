import { Component, Input, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-new-child',
  templateUrl: './new-child.component.html',
  styleUrls: ['./new-child.component.css']
})
export class NewChildComponent implements OnInit {

  @Input() sendData:any


sendToParent(){
  
}

childData="I am Child";


  constructor() { }

  ngOnInit(): void {
    
  }

}
