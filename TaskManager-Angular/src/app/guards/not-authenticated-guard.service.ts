import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'  // by default it is injected in root level
})
export class NotAuthenticatedGuardService implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.loginService.isAuthenticated()) {
      // If user is not authenticated, allow access to the route
      return true;
    } else {
      // If user is authenticated, doesn't allow you access to the particular route
      return false;
    }
  }


}
