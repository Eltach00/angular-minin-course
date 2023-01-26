import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../models/Iproduct';

@Pipe({
  name: 'filterProducts',
  pure: false /* ходит по массиву снова, иначе не будет показывать новые продукты */,
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: Iproduct[], search: string): Iproduct[] {
    if (!products) {
      return products;
    }
    return products.filter((pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
