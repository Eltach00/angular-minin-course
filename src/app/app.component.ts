import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Iproduct } from './models/Iproduct';
import ProductService from './services/product.service';
import { ErrorService } from './services/error.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular app';
  products$: Observable<Iproduct[]>;
  loading = false;
  loadText = 'Loading...';
  term = '';

  constructor(
    private productService: ProductService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productService
      .getAll()
      .pipe(tap(() => (this.loading = false)));
  }
}
