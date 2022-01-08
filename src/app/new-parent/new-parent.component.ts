import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.css']
})
export class NewParentComponent implements OnInit {


  parentData="I am parent";

  // https://www.youtube.com/watch?v=2GH23ys0tdc&ab_channel=Let%27sProgram


  receivedChild(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
