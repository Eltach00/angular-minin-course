import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Iproduct } from '../models/Iproduct';
import { Observable, delay, catchError, throwError, retry } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getAll(): Observable<Iproduct[]> {
    return this.http
      .get<Iproduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5),
      })
      .pipe(retry(2), catchError(this.errorHandler.bind(this)));
  }

  private errorHandler(err: HttpErrorResponse) {
    this.errorService.handle(err.message);
    return throwError(() => err.message);
  }
}
