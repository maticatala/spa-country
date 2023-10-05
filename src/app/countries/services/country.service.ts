import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Country, CountryOptions } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchFrom(options: CountryOptions): Observable<Country[]> {
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

}
