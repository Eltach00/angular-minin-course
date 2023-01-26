import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/Iproduct';
import { ErrorService } from 'src/app/services/error.service';
import { ModalService } from 'src/app/services/modal.service';
import ProductService from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent implements OnInit {
  title = 'angular app';
  products: Iproduct[];
  // products$: Observable<Iproduct[]>;
  loading = false;
  loadText = 'Loading...';
  term = '';

  constructor(
    public productService: ProductService,
    private errorService: ErrorService,
    public modalService: ModalService
  ) {}

  // filterProducts(products: Iproduct[], search: string): Iproduct[] {
  //   return products.filter((pr) =>
  //     pr.title.toLowerCase().includes(search.toLowerCase())
  //   );
  // }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getAll().subscribe((resp) => {
      this.loading = false;
      this.products = resp;
    });
    // this.products$ = this.productService
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));
  }
}
