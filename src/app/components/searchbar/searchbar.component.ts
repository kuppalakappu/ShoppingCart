import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  searchKey: string = '';
  @Input() searchData?: (args: string) => void;
  search() {
    if (this.searchData) {
      console.log(this.searchKey,this.searchData)
      this.searchData(this.searchKey);
    }
  }
}
