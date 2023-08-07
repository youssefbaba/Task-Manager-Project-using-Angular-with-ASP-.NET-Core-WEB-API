import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'  // by default it is injected in root level
})

export class CanActivateGuardService implements CanActivate {  // Executes automatically before entering to the requested route

  constructor(private loginService: LoginService,
    private router: Router,
    private jwtHelperService: JwtHelperService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //console.log(route.url);

    var token = (sessionStorage.getItem("currentUser") != null) ?
    JSON.parse(sessionStorage.getItem("currentUser") as string).token : null;


    if (this.loginService.isAuthenticated() &&
    route.data['expectedRoles'].includes(this.jwtHelperService.decodeToken(token).role)) { 
      return true;  // the user can navigate to the particular route
    } else {
      this.router.navigate(['/login']);
      return false; // the user can't navigate to the particular route
    }
  }

}
