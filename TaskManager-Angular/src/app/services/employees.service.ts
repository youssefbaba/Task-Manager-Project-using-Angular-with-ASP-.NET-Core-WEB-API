import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient : HttpClient) { }

  public getAllEmployees():Observable<any[]>{
    return this.httpClient?.get<any[]>("api/Account/getallemployees", {responseType:'json'});
  }

}
