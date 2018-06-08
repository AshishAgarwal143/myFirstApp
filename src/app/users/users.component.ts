import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/Http';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private users:any[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://reqres.in/api/users=2").subscribe(
      (res: Response)=>{
        console.log("The response is")
        console.log(res);
      },
      ()=>{}

    )
  }

}
