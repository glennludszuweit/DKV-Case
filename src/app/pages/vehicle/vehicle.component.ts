import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError } from 'rxjs';
import { Vehicle } from '../../models/vehicle.types';
import * as VehicleActions from '../../store/vehicle/vehicle.actions';
import {
  selectVehicleById,
  selectVehicleError,
  selectVehicleLoading,
} from '../../store/vehicle/vehicle.selectors';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css',
})
export class VehicleComponent implements OnInit {
  private store = inject(Store);
  private route = inject(ActivatedRoute);
  vehicle = signal<Vehicle | null>(null);
  vehicleId = signal<string | null>(null);
  vehicleLoading = this.store.select(selectVehicleLoading);
  vehicleError = this.store.select(selectVehicleError);

  ngOnInit(): void {
    this.vehicleId.set(this.route.snapshot.paramMap.get('id'));

    if (this.vehicleId()) {
      this.store.dispatch(
        VehicleActions.loadVehicle({ id: this.vehicleId()! })
      );

      this.store
        .select(selectVehicleById(this.vehicleId()!))
        .pipe(
          catchError((err) => {
            console.error('Error loading vehicle', err);
            throw err;
          })
        )
        .subscribe((vehicle) => {
          this.vehicle.set(vehicle);
        });
    }
  }
}
