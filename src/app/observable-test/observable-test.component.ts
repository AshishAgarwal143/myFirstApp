import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { error } from 'util';

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {

  private ob :any={"id":1,"name":"Ashish"};

  constructor() { }

  ngOnInit() {
    let x= new Observable(function(y:Observer<Number>){
      setTimeout(function(){
        y.next(10);
      },2000);
      setTimeout(function () {
        y.next(20);
      }, 3000);
      // setTimeout(function () {
      //   y.error('The error comes here');
      // }, 5000)
      setTimeout(function () {
        y.error("error occured");
      }, 5000)
      setTimeout(function () {
        y.next(30);
      }, 5000)
    })
    x.subscribe(
      (data)=>{
        console.log('The Data is ');
        console.log(data);
      },
      (error)=>{
        console.log(error);
      },
      ()=>{
        console.log("Inside complete block")
      }
    )
  }

}
