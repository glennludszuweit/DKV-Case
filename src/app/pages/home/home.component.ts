import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs';
import { Vehicle } from '../../models/vehicle.types';
import * as VehicleActions from '../../store/vehicle/vehicle.actions';
import {
  selectAllVehicles,
  selectVehicleError,
  selectVehicleLoading,
} from '../../store/vehicle/vehicle.selectors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private store = inject(Store);
  vehicles = signal<Vehicle[]>([]);
  vehicleLoading = this.store.select(selectVehicleLoading);
  vehicleError = this.store.select(selectVehicleError);

  ngOnInit(): void {
    this.store.dispatch(VehicleActions.loadVehicles());

    this.store
      .select(selectAllVehicles)
      .pipe(
        catchError((err) => {
          console.error('Error loading vehicles', err);
          throw err;
        })
      )
      .subscribe((vehicles) => {
        const sortedVehicles = [...vehicles].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        this.vehicles.set(sortedVehicles);
      });
  }
}
