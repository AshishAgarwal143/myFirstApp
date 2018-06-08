import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

private a: String="0";
private b: String="0";
private c: String="0";
  constructor() { }

  ngOnInit() {
  }

  addNo(){
    
    let t1=parseInt(this.a.valueOf());
    let t2 = parseInt(this.b.valueOf());
    this.c = t1+t2+"";
  }

}
