import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient:HttpClient) { }

  getCountries(){
   return this.httpClient.get('https://restcountries.com/v3.1/all')
  }
}
