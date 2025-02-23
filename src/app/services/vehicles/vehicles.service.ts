import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Vehicle } from '../../models/vehicle.types';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  apiUrl = environment.carsApiUrl;
  http = inject(HttpClient);

  getVehicles() {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles`);
  }

  getVehicle(id: string) {
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicles/${id}`);
  }

  addVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(`${this.apiUrl}/vehicles`, vehicle);
  }
}
