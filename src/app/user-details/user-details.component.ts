import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


@Input() item:{name:string, email:string}={name:'', email:''}


  constructor() { }

  ngOnInit(): void {
  }

}
