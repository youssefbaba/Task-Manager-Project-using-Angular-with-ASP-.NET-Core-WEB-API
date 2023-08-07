import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root' // by default it is injected in root level
})
export class RedirectionGuardService implements CanActivate {

  constructor(private loginService : LoginService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    if (this.loginService.isAuthenticated()) {
        if (this.loginService.getCurrentUser()?.role == "Admin") {
          this.router.navigate(['/admin', 'dashboard']);
          return true;
        }else{
          this.router.navigate(['/employee', 'tasks']);
          return true;
        }
    } else {
      return true;
    }
}
}
