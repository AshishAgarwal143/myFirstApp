import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { EmployeeTest } from '../models/employeeTest'

@Component({
	selector: 'app-userview',
	templateUrl: './userview.component.html',
	styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {

	private employeeTest: EmployeeTest;
	private user: any = {};
	constructor(private x: ActivatedRoute, private http: Http) { }

	ngOnInit() {
		this.x.params.subscribe(x => {
			console.log('The parameter is ')
			console.log(x['id']);
			this.http.get('https://myproject3-3a407.firebaseio.com/users/' + x['id'] + '.json').subscribe(
				(res: Response) => {
					console.log(res.json());
					//this.user = res._body;
				},
				(error) => {
					console.log(error);
				});
		})
	}



}
