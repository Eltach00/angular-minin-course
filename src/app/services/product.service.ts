import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Iproduct } from '../modules/Iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams().append('limit', 5),
    });
  }
}
