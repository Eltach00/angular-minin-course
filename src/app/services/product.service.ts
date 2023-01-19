import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Iproduct } from '../models/Iproduct';
import { Observable, delay, catchError, throwError, retry, tap } from 'rxjs';
import { ErrorService } from './error.service';
import products from '../data/products';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  products: Iproduct[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<Iproduct[]> {
    return this.http
      .get<Iproduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(
        retry(2),
        tap((products: Iproduct[]) => (this.products = products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message);
    return throwError(() => err.message);
  }

  create(product: Iproduct): Observable<Iproduct> {
    return this.http
      .post<Iproduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap((response) => {
          this.products.push(response);
        })
      );
  }
}
