import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  constructor(private http: HttpClient) {}

  getProduct(id:number) {
    return this.http
      .get('https://fakestoreapi.com/products/'+id);

  }
}
