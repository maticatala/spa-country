import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { Country, CountryOptions } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchBy(options: CountryOptions): Observable<Country[]> {
    const { query, endpoint } = options;

    const url = `${this.apiUrl}/${endpoint}/${query}`;
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
         })
      );
  }

  searchByAlphaCode(code: string): Observable<Country | null> {
    const url = `${this.apiUrl}/alpha/${code}`

    return this.http.get<Country[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      )
  }
}
