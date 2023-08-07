import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientLocation } from '../models/client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationsService {

  constructor(private httpClient: HttpClient) { }

  getClientLocations(): Observable<ClientLocation[]> {
    return this.httpClient.get<ClientLocation[]>('api/ClientLocations', { responseType: 'json' });
  }

  getClientLocationByClientLocationID(clientLocationID: number): Observable<ClientLocation> {
    return this.httpClient.get<ClientLocation>(`api/ClientLocations/${clientLocationID}`, { responseType: 'json' });
  }

  insertClientLocation(newClientLocation: ClientLocation): Observable<ClientLocation> {
    return this.httpClient.post<ClientLocation>('api/ClientLocations', newClientLocation, { responseType: 'json' });
  }

  updateClientLocation(clientLocationID: number, existingClientLocation: ClientLocation): Observable<ClientLocation> {
    return this.httpClient.put<ClientLocation>(`api/ClientLocations/${clientLocationID}`, existingClientLocation, { responseType: 'json' });
  }

  deleteClientLocation(clientLocationID: number): Observable<void> {
    console.log("Service : ");
    console.log(clientLocationID);
    
    return this.httpClient.delete<void>(`api/ClientLocations/${clientLocationID}`);
  }


}
