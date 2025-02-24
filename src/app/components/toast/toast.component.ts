import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
})
export class ToastComponent {
  @Input() message = signal<string>('');
  @Input() type = signal<'success' | 'error' | 'warning' | 'info'>('info');
  @Input() show = signal<boolean>(false);
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
