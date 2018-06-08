import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Response } from '@angular/http';
import { error } from 'util';

@Component({
  selector: 'app-employee-with-service',
  templateUrl: './employee-with-service.component.html',
  styleUrls: ['./employee-with-service.component.css']
})
export class EmployeeWithServiceComponent implements OnInit {

  private emps:any[]=[];
  private emp:any={};
  private btnStatus: Boolean = true;
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.get().subscribe(
      (res:Response)=>{
        let userRes = res.json();

        console.log('Getting the response as ')
        console.log(JSON.stringify(userRes))
        let myRecords = Object.keys(userRes).map(function (key) {
          return { key: key, data: userRes[key] }
        });
        console.log(myRecords)
        this.emps = myRecords;

      },
      (err) => {
        console.log('The error is ')
        console.log(error)
      }
    )
  }

  save(emp){
    this.employeeService.save(this.emp);
  }
put(x){
  this.btnStatus=false;
  this.employeeService.put(x);
}
update(){
  this.employeeService.update();
}

delete(){
  this.employeeService.delete(this.emp.key);
}
}
