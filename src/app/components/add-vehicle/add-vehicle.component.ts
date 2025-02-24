import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Vehicle } from '../../models/vehicle.types';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import * as VehicleActions from '../../store/vehicle/vehicle.actions';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css',
})
export class AddVehicleComponent {
  @Input() isOpen = signal(false);
  @Output() closeModal = new EventEmitter<void>();

  private vehiclesService = inject(VehiclesService);
  private formBuilder = inject(FormBuilder);
  private store = inject(Store);

  newVehicle: FormGroup;

  constructor() {
    this.newVehicle = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      model: ['', Validators.required],
      fuel: ['', Validators.required],
      type: ['', Validators.required],
      vin: ['', Validators.required],
      color: [''],
      mileage: [''],
    });
  }

  close() {
    this.closeModal.emit();
  }

  addVehicle() {
    if (this.newVehicle.valid) {
      const vehicle: Vehicle = this.newVehicle.value;
      this.store.dispatch(VehicleActions.addVehicle({ vehicle }));
      this.close();
    }
  }
}
