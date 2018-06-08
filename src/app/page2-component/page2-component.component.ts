import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

@Component({
	selector: 'app-page2-component',
	templateUrl: './page2-component.component.html',
	styleUrls: ['./page2-component.component.css']
})
export class Page2ComponentComponent implements OnInit {

	private users: any[] = [];
	constructor(private x: Http) { }

	ngOnInit() {
		this.x.get('https://myproject3-3a407.firebaseio.com/users.json').subscribe(
			(data: Response) => {
				let records = data.json();
				this.users = Object.keys(records).map(function(key) {
					return { key: key, name: records[key].nm, age: records[key].age, salary: records[key].salary }
				})
			},
			(error) => {
				console.log(error)
			}
		)
	}

}
