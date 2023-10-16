import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdateproductService {

  constructor(private http:HttpClient) { }
  getProduct(id:number) {
    return this.http
      .get('https://fakestoreapi.com/products/'+id);

  }
  updateProduct(id:number,product:any){
    return this.http
    .put('https://fakestoreapi.com/products/'+id,product);
  }
}
