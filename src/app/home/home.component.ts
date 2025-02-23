import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError } from 'rxjs';
import { Vehicle } from '../models/vehicle.types';
import { VehiclesService } from '../services/vehicles/vehicles.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  vehiclesService = inject(VehiclesService);
  vehicles = signal<Vehicle[]>([]);

  ngOnInit(): void {
    this.vehiclesService
      .getVehicles()
      .pipe(
        catchError((err) => {
          console.error('Error fetching vehicles', err);
          throw err;
        })
      )
      .subscribe((el) => this.vehicles.set(el));
  }
}
