import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http
      .get('https://fakestoreapi.com/products');

  }

  deleteProduct(id:number) {
    return this.http
      .delete('https://fakestoreapi.com/products/'+id);

  }
}
