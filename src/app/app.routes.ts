import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'vehicle/:id',
    loadComponent: () =>
      import('./pages/vehicle/vehicle.component').then(
        (m) => m.VehicleComponent
      ),
  },
];
