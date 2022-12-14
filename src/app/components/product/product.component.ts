import { Component, Input } from '@angular/core';
import { Iproduct } from 'src/app/modules/Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export default class ProductComponent {
  @Input() product: Iproduct;

  details = false;
}
