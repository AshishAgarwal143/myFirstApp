import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  private company: any = {};
  private emp: any;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  save() {
    console.log();
    this.http.post('https://ecom-5dda9.firebaseio.com/users.json', this.emp).subscribe(
      (res: Response) => {
        console.log('Save Status is ')
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )
    this.emp = {}
  }

}
