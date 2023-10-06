import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public isLoading: boolean = false;
  public countries: Country[] = [];
  public regions: Region[] = ['Asia', 'Americas', 'Africa', 'Antarctic', 'Europe', 'Oceania'];
  public selectedRegion?: Region;

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    const { region, countries } = this.countriesService.cacheStore.byRegion;
    this.selectedRegion = region;
    this.countries = countries;
  }

  searchByRegion( region: Region ): void{
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region)
      .subscribe((countries:Country[]) => {
        this.countries = countries;
        this.isLoading = false;
      });

  }
}
