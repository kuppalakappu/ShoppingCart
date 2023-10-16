import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateproductService } from './updateproduct.service';
@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.scss'],
})
export class UpdateproductComponent implements OnInit {
  id: number = 0;
  title: string = '';
  price: number = 0;
  description: string = '';
  category: string = '';
  image: string = '';
  status:string=''
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private updateproductService: UpdateproductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.id = params['id']));
    this.updateproductService.getProduct(this.id).subscribe((res: any) => {
      this.title = res.title;
      this.price = res.price;
      this.description = res.description;
      this.category = res.category;
      this.image = res.image;
    });
  }
  updateProduct() {
   const updatedProduct={
    title : this.title,
    price : this.price,
    description : this.description,
    category : this.category,
    image : this.image
   }
    this.updateproductService.updateProduct(this.id,updatedProduct).subscribe((res: any) => {
     this.status='Data updated successfully'
    });
    
  }
  cancelProduct(){
    this.router.navigate(['dashboard'])
  }
}
