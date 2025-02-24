import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Vehicle } from '../../models/vehicle.types';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  apiUrl = environment.carsApiUrl;
  http = inject(HttpClient);

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles`);
  }

  getVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicles/${id}`);
  }

  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.apiUrl}/vehicles`, vehicle);
  }
}
