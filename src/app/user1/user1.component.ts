import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  private user: any[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
    this.getPlayers();
  }


  getPlayers() {
    return this.http.get('https://ecom-b9716.firebaseio.com/players.json').subscribe(
      (res: Response) => {
        // console.log(JSON.stringify(res));
        console.log(res.json())
        console.log('------')
        var t = res.json();
        var records = Object.keys(t).map(function (key) {
          if (t[key]) {
            console.log('Inside if')
            return { key: key, name: t[key].name, age: t[key].age, desc: t[key].desc, logo: t[key].logo }
          }
        })
        console.log('***************')
        console.log(records)
        this.user=records;
      }
    )
  }

}
