import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Vehicle } from '../../models/vehicle.types';

export interface VehicleState extends EntityState<Vehicle> {
  loading: boolean;
  error: any;
}

export const vehicleAdapter: EntityAdapter<Vehicle> =
  createEntityAdapter<Vehicle>();

export const initialVehicleState: VehicleState = vehicleAdapter.getInitialState(
  {
    loading: false,
    error: null,
  }
);
