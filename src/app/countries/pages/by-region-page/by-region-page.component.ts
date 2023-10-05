import { Component } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {
  }

  searchByRegion( query: string ): void{

    this.countriesService.searchFrom({ query, endpoint: 'region' })
      .subscribe(countries => {
        this.countries = countries;
      });

  }
}
