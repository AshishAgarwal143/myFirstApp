import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
private player:any;
  
  constructor(private x:ActivatedRoute,private http:Http) { }

  ngOnInit() {
    this.x.params.subscribe(x=>{
      console.log('the parameter is '+x);
      this.http.get('https://ecom-b9716.firebaseio.com/players/'+x['id']+'.json').subscribe(
        (rec:Response)=>{
          this.player=rec.json();
        },
        (error)=>{
          console.log(error);
        }
      )
    })

  }

}
