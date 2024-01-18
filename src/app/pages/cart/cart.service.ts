import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, Product } from './cart.types';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getAllCart() {
    const userId= localStorage.getItem('userId') || ''
  
    return this.http
      .get<Cart>('https://fakestoreapi.com/carts/'+JSON.parse(userId).sub);

  }

  
  getAllProducts() {
    return this.http
      .get<Product[]>('https://fakestoreapi.com/products');

  }

}
