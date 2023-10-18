import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() navItems: string[] = [];
  selectedMenu: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(){
    this.route.queryParams.subscribe(params=>this.selectedMenu=params['category'])
  }
  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.router.navigate(['/dashboard'], { queryParams: { category: menu } });
  }
}
