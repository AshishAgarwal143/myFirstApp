import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'empSearch',
  pure:true
})
export class EmpSearchPipe implements PipeTransform {

  transform(emps: any[], sal: number): any[] {
    var res = emps.filter(function (x) {
      console.log(x);
      return x.data.sal == sal;
    })

    return res;
  }

}
