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
  addToCard(id:number){
const payload = {
  userId:1,
  date:new Date(),
  products:[{productId:id,quantity:1}]

}
    return this.http
    .post("https://fakestoreapi.com/carts",payload)
  }
}
