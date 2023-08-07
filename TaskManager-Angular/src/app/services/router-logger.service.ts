import { HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouterLoggerService {

  // Constructor
  constructor(private httpBackend: HttpBackend,
    private httpClient: HttpClient) { }

  // Methods
  log(logMessage: string): Observable<void>{
    this.httpClient = new HttpClient(this.httpBackend);  // httpClient represents HttpClient without Interceptors
    return this.httpClient.post<void>('api/RouterLogger', logMessage, {headers: new HttpHeaders().set("content-type", "text/plain")});
  }
}
