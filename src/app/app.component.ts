import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  parentData = 5;
  updateData(){
    this.parentData=Math.floor(Math.random()*10);
  }
}
