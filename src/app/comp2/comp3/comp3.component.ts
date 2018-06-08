import { Component, OnInit } from '@angular/core';
import { MyeventService } from '../../services/myevent.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private myevent:MyeventService) { }

  ngOnInit() {

  }

  fire(n:number){
    this.myevent.emitEvent(n);
  }

}
