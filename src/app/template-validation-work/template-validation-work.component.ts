import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-validation-work',
  templateUrl: './template-validation-work.component.html',
  styleUrls: ['./template-validation-work.component.css']
})
export class TemplateValidationWorkComponent implements OnInit {
@ViewChild('f') frm:NgForm;
  constructor() { }

  ngOnInit() {
  }

  checkLogin(){
    console.log("Printing from the checkLogin block")
    console.log(this.frm.value)
  }
  clear(){
this.frm.reset();
  }

}
