import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
  pure:false
})
export class LimitPipe implements PipeTransform {

  transform(value: any[], arg1: Number): any {
    console.log(value+"----"+arg1)
    let ar2=[];
    for(let i=0;i<arg1;i++){
      ar2.push(value[i])
    }
    return ar2;
  }

}
