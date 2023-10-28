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
  view: string = 'cards';
  tableData:any=[]
  tableHeaders:string[]=['image','title','description','price','rating'];
  tableWidth:string[]=['10%','20%','50%','10%','10%'];
  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  searchData() {}
  ngOnInit() {
    this.dashboardService.getAllProducts().subscribe((res) => {
      const data=Array.isArray(res) && res.map((entry:any)=>({...entry,rating:entry.rating.rate})) || [];
      this.allProducts = data;
      this.filteredProducts = data;
      this.tableData=data
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
    this.tableData=this.filteredProducts;
  }
  setView(view: string) {
    this.view = view;
  }
  filterBySelectedMenu(menu: string) {
    if (menu && menu.length)
      this.filteredProducts = this.allProducts.filter(
        (ele: any) => ele.category.toLowerCase() === menu.toLowerCase()
      );
  }
}
