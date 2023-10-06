import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { TermCountries } from '../../interfaces/cache-store.interface';

@Component({
  selector: 'app-by-captial-page',
  templateUrl: './by-captial-page.component.html',
  styles: [
  ]
})
export class ByCaptialPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    const {countries, term}:TermCountries = this.countriesService.cacheStore.byCapital;
    this.countries = countries
    this.initialValue = term;
  }

  searchByCaptial( term: string ): void {

    this.isLoading = true;

    this.countriesService.searchByCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      })

  }

}
