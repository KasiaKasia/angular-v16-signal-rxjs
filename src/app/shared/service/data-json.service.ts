import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flights } from 'app/common/models/flight-interface';
import { Observable,   } from 'rxjs';

 @Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  constructor(private httpClient: HttpClient) {}

  getFlights(): Observable<Flights> {
    return this.httpClient.get("assets/data-json/data.json");
  }
}
