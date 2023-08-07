import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient : HttpClient) { }

  getAllCountries() : Observable<Country[]>{
    return this.httpClient.get<Country[]>('api/Countries', {responseType:'json'});
  }

  getCountryByCountryID(countryID: number) : Observable<Country>{
    return this.httpClient.get<Country>(`api/Countries/${countryID}`, {responseType:'json'});
  }

  insertCountry(newCountry: Country) : Observable<Country>{
    return this.httpClient.post<Country>('api/Countries', newCountry, {responseType:'json'});
  }

  updateCountry(existingCountry: Country, countryID: number) : Observable<Country>{
    return this.httpClient.put<Country>(`api/Countries/${countryID}`, existingCountry, {responseType:'json'});
  }

  deleteCountry(countryID: number) : Observable<void>{
    return this.httpClient.delete<void>(`api/Countries/${countryID}`);
  }

}
