import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  private player: any;
  constructor(private x: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    this.x.params.subscribe(x => {
      console.log('the parameter is ' + x);
      //   this.http.get('https://ecom-b9716.firebaseio.com/players/' + x['id'] + '.json').subscribe(
      //     (rec: Response) => {
      //       this.player = rec.json();
      //     },
      //     (error) => {
      //       console.log(error);
      //     }
      //   )
      })
    }

}
