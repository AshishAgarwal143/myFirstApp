import { Component, OnInit } from '@angular/core';
import { MyeventService } from '../services/myevent.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private myevent:MyeventService) { }

  ngOnInit() {
    this.myevent.getEvent().subscribe(
      (res)=>{
        console.log("Current value is "+res)
      }
    )
  }

}
