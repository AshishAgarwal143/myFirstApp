import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TriangleService } from './services/triangle.service';
import { SalaryService } from './services/Salary/salary.service';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // private players: any[] = [
  //   { id: 1, playerName: "Sachin", matches: 500 },
  //   { id: 2, playerName: "Sehwag", matches: 400 },
  //   { id: 3, playerName: "Rahul", matches: 300 },
  //   { id: 4, playerName: "Ganguly", matches: 350 },
  //   { id: 5, playerName: "Virat", matches: 200 },
  // ]
private players:any[]=[];
  constructor(private http: Http) { }


  ngOnInit() {
    this.http.get('https://ecom-b9716.firebaseio.com/players.json').subscribe(
      (rec: Response) => {
        let records = rec.json();
        console.log(records);
        this.players=Object.keys(records).map(function(key){
          if(records[key]!==null){

         
          return{key:key,name:records[key].name,age:records[key].age,logo:records[key].logo,des:records[key].des}
          }else{
            return {};
          }})
      },
      (error) => {
        console.log('the error is ');
        console.log(error);
      }
    )
  }

}
