// vehicle.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { vehicleAdapter, VehicleState } from './vehicle.state';

export const selectVehicleState =
  createFeatureSelector<VehicleState>('vehicles');

export const { selectAll: selectAllVehicles, selectEntities } =
  vehicleAdapter.getSelectors(selectVehicleState);

export const selectVehicleById = (id: string) =>
  createSelector(selectEntities, (entities) => entities[id] || null);

export const selectVehicleLoading = createSelector(
  selectVehicleState,
  (state) => state.loading
);

export const selectVehicleError = createSelector(
  selectVehicleState,
  (state) => state.error
);
