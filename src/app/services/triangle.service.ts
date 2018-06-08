import { Injectable } from '@angular/core';
import { PerimeterService } from './perimeter.service';

@Injectable()
export class TriangleService {

  constructor(private perimeterService:PerimeterService) { }

  area(side1, side2,side3){
    let t1 = this.perimeterService.semiPerimeter(side1,side2,side3);
    var area= (Math.sqrt(t1 * (t1 - side1) * (t1 - side2) * (t1 - side3)));
    return area;
  }

}
