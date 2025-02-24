import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routes } from './app.routes';
import { VehicleEffects } from './store/vehicle/vehicle.effects';
import { vehicleReducer } from './store/vehicle/vehicle.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ vehicles: vehicleReducer }),
    provideEffects([VehicleEffects]),
  ],
};
