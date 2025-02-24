import { createAction, props } from '@ngrx/store';
import { Vehicle } from '../../models/vehicle.types';

export const loadVehicles = createAction('[Vehicle] Load Vehicles');
export const loadVehiclesSuccess = createAction(
  '[Vehicle] Load Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);
export const loadVehiclesFailure = createAction(
  '[Vehicle] Load Vehicles Failure',
  props<{ error: any }>()
);

export const addVehicle = createAction(
  '[Vehicle] Add Vehicle',
  props<{ vehicle: Vehicle }>()
);
export const addVehicleSuccess = createAction(
  '[Vehicle] Add Vehicle Success',
  props<{ vehicle: Vehicle }>()
);
export const addVehicleFailure = createAction(
  '[Vehicle] Add Vehicle Failure',
  props<{ error: any }>()
);

export const loadVehicle = createAction(
  '[Vehicle] Load Vehicle',
  props<{ id: string }>()
);
export const loadVehicleSuccess = createAction(
  '[Vehicle] Load Vehicle Success',
  props<{ vehicle: Vehicle }>()
);
export const loadVehicleFailure = createAction(
  '[Vehicle] Load Vehicle Failure',
  props<{ error: any }>()
);
