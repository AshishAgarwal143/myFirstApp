import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../models/employee';
import { error } from 'util';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }
  private emp: any = {};
  private btnStatus: boolean;

  get(){
    return this.http.get('https://ecom-b9716.firebaseio.com/users.json');
  }


  save(emp: Employee) {
    console.log("Saving the employee");
    this.http.post('https://ecom-b9716.firebaseio.com/users.json', this.emp).subscribe(
      (res: Response) => {
        console.log('Save Status is ')
        console.log(res)
      },
      (error) => {
        console.log(error)
      }
    )
    this.emp = {};
  }

  delete(key) {
    console.log("value for key is " + key)
    console.log("Called the Delete function")
    this.http.delete('https://ecom-b9716.firebaseio.com/users/' + key + '.json').subscribe(
      (res: Response) => {
        console.log('Deleted the record')
        console.log(res)
      },
      (err) => {
        console.log(error)
      }
    )
  }

  put(x) {
    this.btnStatus = false;
    console.log('value for x is ' + x)
    console.log('Calling the put function')
    this.emp = x.data;
    this.emp.key = x.key;
  }

  update() {
    this.http.put('https://ecom-b9716.firebaseio.com/users/' + this.emp.key + '.json', this.emp).subscribe(
      (res: Response) => {
        console.log('Save Status is ')
        console.log(res)
      },
      (err) => {
        console.log(error);
      }
    )
  }


}