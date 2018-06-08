import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-builderbased',
  templateUrl: './form-builderbased.component.html',
  styleUrls: ['./form-builderbased.component.css']
})
export class FormBuilderbasedComponent implements OnInit {
private frm:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
   this.frm = this.formbuilder.group(
      {
        fname:['', [Validators.required, Validators.minLength(5)]],
        lname:['', [Validators.minLength(2)]],
        email:['', [Validators.required]]
      }
    )
  }

}
