import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  allCountries: any = [];
  filteredCountries:any=[]
  cardStyle="height:200px"
  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe((res: any) => {
      console.log(res)
      this.allCountries=res;
      this.filteredCountries=res;
    });
  }
  editCard(id:number){}

  onSearch(searchKey: string) {
    this.filteredCountries = this.allCountries.filter((ele: any) =>
      ele.name.official.toLowerCase().includes(searchKey.toLowerCase())
    );

  }
}
