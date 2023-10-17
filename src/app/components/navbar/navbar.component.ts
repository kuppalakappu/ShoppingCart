import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() navItems: string[] = [];
  selectedMenu: string = '';
  @Output() menuEvent=new EventEmitter<string>()
  selectMenu(menu: string) {
    this.selectedMenu = menu;
    this.menuEvent.emit(this.selectedMenu);
  }
}
