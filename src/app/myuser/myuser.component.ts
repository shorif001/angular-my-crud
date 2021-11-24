import { Component, OnInit } from '@angular/core';
// import { MyuserService } from './myuser.service';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css']
})
export class MyuserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getMyuserList();
  }

  // getMyuserList(){
  //   this.MyuserService.getMyuserList().subscribe((datat:any)=>{
  //     console.log(datat);
  //   })
  // }

}



