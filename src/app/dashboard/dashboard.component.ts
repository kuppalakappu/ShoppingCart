import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allProducts: any = [];
  constructor(private dashboardService: DashboardService) {}
  searchData() {}
  ngOnInit() {
    this.dashboardService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.allProducts = res;
    });
  }
  filterProducts(searchKey: string) {
    this.allProducts= this.allProducts.filter((ele:any) =>
      ele.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    console.log(this.allProducts,'kkk')
  }
}
