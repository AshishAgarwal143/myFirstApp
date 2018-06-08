import { Component, OnInit } from '@angular/core';
import { Organisations } from '../models/organisations';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.css']
})
export class OrganisationsComponent implements OnInit {

  private orgs: Organisations[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
    // this.http.get('https://ecom-b9716.firebaseio.com/users.json').subscribe(
    //   (data: Response) => {
    //     console.log('The Response is :');
    //     let records = data.json();
    //     this.orgs = Object.keys(records).map(function (key) {
    //       return new Organisations(records[key].nm, records[key].nos, records[key].type, records[key].logo, records[key].add);
    //     })
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // )

    var org1 = new Organisations('1', 'TCS', '23', 'IT', 'adha', 'asdhakd');
    var org2 = new Organisations('2', 'wipro', '23', 'IT', 'adha', 'asdhakd');
    var org3 = new Organisations('3', 'INFOSYS', '23', 'IT', 'adha', 'asdhakd');
    this.orgs = [org1, org2, org3];

  }

}
