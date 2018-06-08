import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router, private route: ActivatedRoute) { }
	private stt:boolean=true;
	//private myColor:string='green';
	private username: String;
	private password: String;
	ngOnInit() {
		localStorage.setItem("user","0")
	}

	login() {
		console.log("username" + this.username + " Password" + this.password)
		if (this.username == "admin" && this.password == "admin") {
			localStorage.setItem("user","1");
			this.router.navigate(['/home']);
		}
		else {
			alert('Please provide correct username and password')
			this.router.navigate(['/login']);
		}

	}

}
