import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  private side1: String ="0";
  private side2: String ="0";
  private side3: String ="0";
  private area: String ="0";
  constructor() { }

  ngOnInit() {
    
  }

  computeArea(){
let t1= (parseInt(this.side1.valueOf())+parseInt(this.side2.valueOf())+parseInt(this.side3.valueOf()))/2;
this.area = Math.sqrt(t1*(t1-parseInt(this.side1.valueOf()))*(t1-parseInt(this.side2.valueOf()))*(t1-parseInt(this.side3.valueOf())))+"";

  }

}
