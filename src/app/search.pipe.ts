import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure:false
})
export class SearchPipe implements PipeTransform {

  transform(t1: any[], t2: any): any {
    console.log(t1);
    let newProducts = [];
    console.log('The product search is ');
    console.log(t2)
    for (let i = 0; i < t1.length; i++) {
      if (t1[i].name.includes(t2)) {
        newProducts.push(t1[i]);
      } else {
        console.log('not matched');
      }
    
    }
    
    return newProducts;
  }

}
