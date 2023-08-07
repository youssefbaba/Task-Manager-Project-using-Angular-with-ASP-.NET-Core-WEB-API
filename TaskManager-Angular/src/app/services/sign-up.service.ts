import { Injectable } from '@angular/core';
import { SignUpViewModel } from '../models/sign-up-view-model';
import { Observable, map } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpBackend: HttpBackend, private httpClient: HttpClient) { }

  signUp(signUpViewModel: SignUpViewModel): Observable<any> {

    this.httpClient = new HttpClient(this.httpBackend);  // httpClient represents HttpClient without Interceptors

    return this.httpClient.post<any>('api/account/register', signUpViewModel, { responseType: 'json' })
      .pipe(map(
        (user: any) => {
          if (user != null) {
            //this.currentUserName = user.userName;
            // after the user in loged JWT token will be generated on the server an the same will be sent to de browser and stored in Session Storage
            sessionStorage['currentUser'] = JSON.stringify(user);
          }
          return user;
        }
      ));
  }

  getUserByEmail(email: string): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);  // httpClient represents HttpClient without Interceptors
    return this.httpClient.get<any>(`api/account/getUserByEmail/${email}`, { responseType: 'json' });
  }

  getAllCountries(): Observable<Country[]> {
    this.httpClient = new HttpClient(this.httpBackend);  // httpClient represents HttpClient without Interceptors
    return this.httpClient.get<Country[]>(`api/account`, { responseType: 'json' });
  }


}
