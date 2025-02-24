import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddVehicleComponent } from '../add-vehicle/add-vehicle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, AddVehicleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isModalOpen = signal(false);

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
