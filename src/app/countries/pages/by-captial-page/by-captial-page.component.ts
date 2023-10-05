import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-captial-page',
  templateUrl: './by-captial-page.component.html',
  styles: [
  ]
})
export class ByCaptialPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService) {}

  searchByCaptial(query: string): void {

    this.countriesService.searchBy({query, endpoint: 'capital'})
      .subscribe(countries => {
        this.countries = countries;
      })

  }

}
