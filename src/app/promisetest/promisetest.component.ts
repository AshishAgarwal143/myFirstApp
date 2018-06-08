import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';
import { error } from 'util';

@Component({
  selector: 'app-promisetest',
  templateUrl: './promisetest.component.html',
  styleUrls: ['./promisetest.component.css']
})
export class PromisetestComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    // var x = this.add(5, 6);
    // console.log('The sum is ' + x);

    //   this.add(1, 6).then(function(res) {
    //     console.log('The Response is ' + res);
    //   })
    //     .catch(function(reject) {
    //       console.log('the error is ' + error)
    //     })


    // }
    // // add(a, b) {
    // //   setTimeout(function () {
    // //     return (a + b);
    // //   }, 4000);
    // // }

    // add(a, b) {
    //   var x = new Promise(function(resolve, reject) {
    //     setTimeout(function() {
    //       resolve(a + b)
    //     }, 4000);
    //   });
    //   return x;
    // }


  }
}