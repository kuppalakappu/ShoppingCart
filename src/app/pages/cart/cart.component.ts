import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Cart, Product, CartItem, ProductDesc } from './cart.types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products:Product[]=[]
  cart :Cart|null=null;
  cartItems:CartItem[]=[]

  constructor(
    private cartService: CartService,

  ) {}
  ngOnInit() {
    this.cartService.getAllCart().subscribe((res:Cart) => {
   this.cart=res;
   this.cartService.getAllProducts().subscribe((res:Product[]) => {
    this.products=res;
    console.log(this.cart,this.products)
  
       this.cartItems=this.cart?.products.map((entry:ProductDesc)=>{
       return {
 quantity:entry.quantity,
 product:this.products.find((ele:Product)=>ele.id===entry.productId),
 date:this.cart?.date||''
       }        
    
     
       }) || []

       console.log(this.cartItems)
     })
    })



}
}
