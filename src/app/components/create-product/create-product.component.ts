import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  productForm: FormGroup;
  constructor() {
    this.productForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  get title() {
    return this.productForm.controls.title as FormControl;
  }

  onSubmit() {
    console.log(this.productForm.value);
  }
}
