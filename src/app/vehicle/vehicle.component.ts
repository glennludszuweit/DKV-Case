import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';
import { Vehicle } from '../models/vehicle.types';
import { VehiclesService } from '../services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent implements OnInit {
  vehiclesService = inject(VehiclesService);
  vehicle = signal<Vehicle | null>(null);
  vehicleId = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.vehicleId.set(this.route.snapshot.paramMap.get('id'));

    this.vehiclesService
      .getVehicle(this.vehicleId()!)
      .pipe(
        catchError((err) => {
          console.error('Error fetching vehicle', err);
          throw err;
        })
      )
      .subscribe((el) => this.vehicle.set(el));
  }
}
