import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentUser: any = { token: "" };
    if (sessionStorage["currentUser"] != null) {
      currentUser = JSON.parse(sessionStorage["currentUser"]);
    }
    
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + currentUser.token
      }
    });

    return next.handle(request);

  }
}
