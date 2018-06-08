import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-form-array-test',
  templateUrl: './form-array-test.component.html',
  styleUrls: ['./form-array-test.component.css']
})
export class FormArrayTestComponent implements OnInit {
  private doctor: FormGroup;
  private patients: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.doctor = this.formBuilder.group({
      name: [''],
      specialization: [''],
      patients: this.formBuilder.array([this.createPatient()])
    })
  }

  createPatient(): FormGroup {
    return this.formBuilder.group({
      patientName: [''],
      page: [''],
      pdisease: ['']
    })
  }

  addPatientItem() {
    let arr = this.doctor.get('patients') as FormArray;
    arr.push(this.createPatient());
  }

  removePatient(i){
    let arr = this.doctor.get('patients') as FormArray;
    arr.removeAt(i);
  }


  save() {
    console.log(this.doctor.value);
  }

}
