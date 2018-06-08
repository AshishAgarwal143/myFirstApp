import { Component, OnInit, Output } from '@angular/core';
import { OrgDropDown } from '../../models/orgDropDown';
import { EventEmitter } from 'events';
import { Organisations } from '../../models/organisations';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  private dropDownList:OrgDropDown[]=[];
  private org:any;
 // @Output() fireOrg = new EventEmitter<Organisations>();

  ngOnInit() {

    var org1 = new OrgDropDown('tcs', 'TCS');
    var org2 = new OrgDropDown('wipro', 'WIPRO');
    var org3 = new OrgDropDown('infosys', 'INFOSYS');

    this.dropDownList = [org1, org2, org3];
  }
  searchCompany($event){
    console.log('selected company name: ')
  }

}
