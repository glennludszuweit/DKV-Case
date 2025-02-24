import { createReducer, on } from '@ngrx/store';
import * as VehicleActions from './vehicle.actions';
import { initialVehicleState, vehicleAdapter } from './vehicle.state';

export const vehicleReducer = createReducer(
  initialVehicleState,
  on(VehicleActions.loadVehicles, (state) => ({ ...state, loading: true })),
  on(VehicleActions.loadVehiclesSuccess, (state, { vehicles }) =>
    vehicleAdapter.setAll(vehicles, { ...state, loading: false })
  ),
  on(VehicleActions.loadVehiclesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(VehicleActions.loadVehicle, (state) => ({ ...state, loading: true })),
  on(VehicleActions.loadVehicleSuccess, (state, { vehicle }) =>
    vehicleAdapter.upsertOne(vehicle, { ...state })
  ),
  on(VehicleActions.loadVehicleFailure, (state, { error }) => ({
    ...state,
    error,
  })),

  on(VehicleActions.addVehicle, (state) => ({ ...state, loading: true })),
  on(VehicleActions.addVehicleSuccess, (state, { vehicle }) =>
    vehicleAdapter.addOne(vehicle, { ...state, loading: false })
  ),
  on(VehicleActions.addVehicleFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
