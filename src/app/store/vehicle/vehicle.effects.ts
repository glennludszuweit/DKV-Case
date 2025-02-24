import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import * as VehicleActions from './vehicle.actions';

@Injectable()
export class VehicleEffects {
  private actions$ = inject(Actions);
  private vehiclesService = inject(VehiclesService);

  loadVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleActions.loadVehicles),
      mergeMap(() =>
        this.vehiclesService.getVehicles().pipe(
          map((vehicles) => VehicleActions.loadVehiclesSuccess({ vehicles })),
          catchError((error) =>
            of(VehicleActions.loadVehiclesFailure({ error }))
          )
        )
      )
    )
  );

  loadVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleActions.loadVehicle),
      mergeMap(({ id }) =>
        this.vehiclesService.getVehicle(id).pipe(
          map((vehicle) => VehicleActions.loadVehicleSuccess({ vehicle })),
          catchError((error) =>
            of(VehicleActions.loadVehicleFailure({ error }))
          )
        )
      )
    )
  );

  addVehicle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehicleActions.addVehicle),
      mergeMap(({ vehicle }) =>
        this.vehiclesService.addVehicle(vehicle).pipe(
          map((newVehicle) =>
            VehicleActions.addVehicleSuccess({ vehicle: newVehicle })
          ),
          catchError((error) => of(VehicleActions.addVehicleFailure({ error })))
        )
      )
    )
  );
}
