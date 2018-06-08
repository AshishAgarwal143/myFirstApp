import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor() { }
  private doctors: any[] = [
    { name: 'Doctor1', age: 21, specialization: 'ORTHOPAEDICS', address: 'bangalore1', pics: './assets/images/doctor1.png' },
    { name: 'Doctor2', age: 40, specialization: 'Radiologoy', address: 'Bangalore2', pics: './assets/images/doctor2.jpg' }
  ];
  private doctor: any = {};
  private docinfo: any = {};
  ngOnInit() {
  }

  deleteDoctor(index) {
    alert('Deleting the doctor');
    this.doctors.splice(index, 1)

  }
  viewDoctor(info) {
    this.docinfo = info;
  }

  addDoctor() {
    this.doctors.push(this.doctor);
    this.doctor = {};
    console.log(this.doctors)
  }

}
