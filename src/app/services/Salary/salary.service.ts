import { Injectable } from '@angular/core';
import { DaService } from './da.service';
import { HraService } from './hra.service';
import { TaService } from './ta.service';
import { LtaService } from './lta.service';

@Injectable()
export class SalaryService {

  constructor(private da:DaService,private hra:HraService,private ta:TaService,private lta:LtaService) { }

getSalary(a){
  return (a+this.da.getDa(a)+this.hra.getHra(a)+this.lta.getLta(a)-this.ta.getTa(a));
}

}
