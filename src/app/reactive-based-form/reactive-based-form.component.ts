import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-based-form',
  templateUrl: './reactive-based-form.component.html',
  styleUrls: ['./reactive-based-form.component.css']
})
export class ReactiveBasedFormComponent implements OnInit {
  private frm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.frm = new FormGroup(
      {
        fname: new FormControl('',[Validators.required,Validators.minLength(5)]),
        lname: new FormControl('',[Validators.minLength(2)]),
        email: new FormControl('', [Validators.required])
      }
    )
  }

}
