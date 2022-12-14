import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from './modules/Iproduct';
import ProductService from './services/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
  title = 'angular app';

  products: Iproduct[] = [];
}
