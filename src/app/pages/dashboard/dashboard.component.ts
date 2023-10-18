import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  allProducts: any = [];
  filteredProducts: any = [];
  categories: any = [];
  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  searchData() {}
  ngOnInit() {
    this.dashboardService.getAllProducts().subscribe((res) => {
      this.allProducts = res;
      this.filteredProducts = res;
      this.categories = this.filteredProducts.map((ele: any) => ele.category);
      this.categories = new Set<string>(this.categories);
      this.route.queryParams.subscribe((params: any) => {
        this.filterBySelectedMenu(params['category']);
      });
    });
  }
  onSearch(searchKey: string) {
    this.filteredProducts = this.allProducts.filter((ele: any) =>
      ele.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }
  editProduct(id: number) {
    this.router.navigate(['updateProduct/' + id]);
  }
  filterBySelectedMenu(menu: string) {
    this.filteredProducts = this.allProducts.filter(
      (ele: any) => ele.category.toLowerCase() === menu.toLowerCase()
    );
  }
}
