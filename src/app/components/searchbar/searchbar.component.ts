import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  @Input() searchKey: string = '';
  @Output() searchEvent = new EventEmitter<string>();
  search() {
    this.searchEvent.emit(this.searchKey);
  }
}
