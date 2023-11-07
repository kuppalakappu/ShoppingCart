import { Component,OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ProductInfoService } from './productinfo.service';


@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {
productId:number=0
productInfo:any


productLabels:string[]=['title','price','description','category']
productRate:string[]=['rate','count']
cartUpdate:boolean=false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productInfoService:ProductInfoService
  ) {}

ngOnInit(){
  this.route.params.subscribe((res:any)=>this.productId = res["id"])
this.productInfoService.getProduct(this.productId).subscribe((res:any)=>this.productInfo = res)
  console.log(this.productInfo )

}

counter(i:number){
  
  return new Array(Number(i.toFixed(0)))
}
addToCart(){
  this.productInfoService.addToCard(this.productId).subscribe((res:any)=>this.cartUpdate=true)
}
}
