import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetest',
  templateUrl: './pipetest.component.html',
  styleUrls: ['./pipetest.component.css']
})
export class PipetestComponent implements OnInit {

  private a:Number =10;
  private b:Number = 2;
  private x:Number=5;

  private table:any[]=[
    {productname:'xyz',cost:123},
    { productname: 'abc', cost: 1234},
    { productname: 'ABC', cost: 1235 },
    { productname: 'DEF', cost: 12346 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
