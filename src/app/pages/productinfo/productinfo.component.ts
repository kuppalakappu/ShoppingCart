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

}
