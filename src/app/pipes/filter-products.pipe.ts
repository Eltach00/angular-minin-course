import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../models/Iproduct';

@Pipe({
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Iproduct[], search: string): Iproduct[] {
    return products.filter((pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
