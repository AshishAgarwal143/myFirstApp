import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablefilter',
  templateUrl: './tablefilter.component.html',
  styleUrls: ['./tablefilter.component.css']
})
export class TablefilterComponent implements OnInit {
private key:any;
private n:Number;
private products:any[]=[
  {name:"apple",cost:20,brand:"brand1"},
  { name: "banana", cost: 30, brand: "brand2" },
  { name: "Guava", cost: 40, brand: "brand3" },
   { name: "grapes", cost: 50, brand: "brand4" },
  { name: "pomegranate", cost: 60, brand: "brand5" },
  { name: "apricot", cost: 70, brand: "brand6" }
];

  constructor() { }

  ngOnInit() {
  }

}
