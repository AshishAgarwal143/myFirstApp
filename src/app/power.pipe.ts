import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(b: any, x: any): any {
    console.log(b);
    console.log(x);
    let p=1;
    for(var i=1;i<=x;i++){
      p=p*b;
    }
    console.log(p);
    return p;

  }

}
