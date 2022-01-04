import { Component, OnInit, Input } from '@angular/core';

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

  ngOnInit(): void {
  }

}
