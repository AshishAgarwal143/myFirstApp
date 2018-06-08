import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sachin',
  templateUrl: './sachin.component.html',
  styleUrls: ['./sachin.component.css']
})
export class SachinComponent implements OnInit {

private firstName: String ="Sachin";
private lastName: String ="Tendulkar";
private sports: String ="Cricket";
private age: Number =40;
private odi: Number =400;
private image: String="http://i.cricketcb.com/stats/img/faceImages/25.jpg";

  constructor() { }

  ngOnInit() {
  }

}
