import { Component,  Input,  OnInit} from '@angular/core';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.css']
})
export class DumbComponent implements OnInit {

  @Input() videos:any;
  constructor() { }

  ngOnInit(): void {
  }

}
