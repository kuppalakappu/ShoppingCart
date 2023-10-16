import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allProducts: any = []
  filteredProducts:any=[]
  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}
  searchData() {}
  ngOnInit() {
    this.dashboardService.getAllProducts().subscribe((res) => {
      this.allProducts = res;
      this.filteredProducts=res;
    });
  }
  onSearch(searchKey: string) {
    this.filteredProducts = this.allProducts.filter((ele: any) =>
      ele.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }
  editProduct(id: number) {
    this.router.navigate(['updateProduct/'+id]);
  }
}
