import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';

import { Country } from '../interfaces/country.interface';
import { cacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: cacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {countries: []},
  }

  constructor(private http: HttpClient) {
    this.loadFromLocaleStorage();
  }

  search(url: URL): Observable<Country[]> {
     return this.http.get<Country[]>(url.href)
      .pipe(
        catchError(error => { return of([]) })
      )
  }

  searchByCapital(term: string): Observable<Country[]> {
    const url = new URL(`${this.apiUrl}/capital/${term}`);
    return this.search(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term, countries }),
        tap(() => this.saveToLocaleStorage())
      )
  }

  searchByCountry(term: string): Observable<Country[]> {
    const url = new URL(`${this.apiUrl}/name/${term}`);
    return this.search(url)
      .pipe(
        tap(countries => this.cacheStore.byCountries = { term, countries }),
        tap(() => this.saveToLocaleStorage())
      )
  }

  searchByRegion( region: Region ): Observable<Country[]> {
    const url = new URL(`${this.apiUrl}/region/${region}`);
    return this.search(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => this.saveToLocaleStorage())
      )
  }

  searchByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null)),
      )
  }

  private saveToLocaleStorage():void {
    localStorage.setItem('cachStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocaleStorage() {
    const store = localStorage.getItem('cachStore');

    if (!store) return;

    this.cacheStore = JSON.parse(store);
  }
}
