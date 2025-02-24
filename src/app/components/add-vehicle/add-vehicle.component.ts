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
import * as VehicleActions from '../../store/vehicle/vehicle.actions';
import { selectVehicleError } from '../../store/vehicle/vehicle.selectors';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-add-vehicle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastComponent],
  templateUrl: './add-vehicle.component.html',
  styleUrl: './add-vehicle.component.css',
})
export class AddVehicleComponent {
  @Input() isOpen = signal(false);
  @Output() closeModal = new EventEmitter<void>();
  private formBuilder = inject(FormBuilder);
  private store = inject(Store);

  toastMessage = signal<string>('');
  toastType = signal<'success' | 'error' | 'warning' | 'info'>('info');
  toastVisible = signal<boolean>(false);

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

      this.store.select(selectVehicleError).subscribe((error) => {
        if (error) {
          this.toastMessage.set('Failed to add vehicle.');
          this.toastType.set('error');
        } else {
          this.toastMessage.set('Vehicle added successfully.');
          this.toastType.set('success');
        }
        this.toastVisible.set(true);
      });
    }
  }

  closeToast() {
    this.toastVisible.set(false);
  }
}
