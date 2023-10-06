import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.service';
import { TermCountries } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public isLoading: boolean = false;
  public countries: Country[] = [];
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    const {countries, term}:TermCountries = this.countriesService.cacheStore.byCountries;
    this.countries = countries
    this.initialValue = term;
  }

  searchByCountry( term: string ): void {
    this.isLoading = true;
    this.countriesService.searchByCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })
  }

}
