import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent {
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private modalService: ModalService
  ) {
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
    this.productService
      .create({
        title: this.productForm.controls.title.value,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
          rate: 3,
          count: 3,
        },
      })
      .subscribe(() => this.modalService.close());
  }
}
