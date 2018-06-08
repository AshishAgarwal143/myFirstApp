import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { error } from 'util';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private emp: any = {};
  private emps: any[] = [];
  private btnStatus: Boolean = true;
  private key:number;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://ecom-b9716.firebaseio.com/users.json').subscribe(
      (res: Response) => {
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

  save() {
    console.log(this.emp)
    this.http.post('https://ecom-b9716.firebaseio.com/users.json', this.emp).subscribe(
      (res: Response) => {
        console.log('Save Status is ')
        console.log(res)
      },
      (err) => {
        console.log(error)
      }
    )
    this.emp = {}
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
    console.log('value for x is ' + x.data.nm)
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
        console.log(error)
      }
    )
  }
}
