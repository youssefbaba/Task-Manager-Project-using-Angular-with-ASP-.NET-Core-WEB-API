import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from '../models/login-view-model';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Properties
  //currentUserName: any = null;
  private httpClient: HttpClient | null = null;

  // Constructor
  constructor(private httpBackend: HttpBackend,
    private router: Router,
    private jwtHelperService: JwtHelperService) {
  }

  public login(loginViewModel: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend);  // httpClient represents HttpClient without Interceptors
    return this.httpClient.post<any>('api/account/authenticate', loginViewModel, { responseType: 'json' })
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

  public logout(): void {
    sessionStorage.removeItem('currentUser');
    //this.currentUserName = null;
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    var token = (sessionStorage.getItem("currentUser") != null) ?
      JSON.parse(sessionStorage.getItem("currentUser") as string).token : null;
    if (this.jwtHelperService.isTokenExpired(token)) {
      return false;   // token is invalid
    } else {
      return true; // token is valid
    }
  }

  public getCurrentUser(): any{
    var currentUser = (sessionStorage.getItem("currentUser") != null) ?
      JSON.parse(sessionStorage.getItem("currentUser") as string) : null;
      return currentUser;
  }
}
