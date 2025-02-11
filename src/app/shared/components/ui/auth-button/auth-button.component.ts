import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auth-button',
  imports: [],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.scss',
})
export class AuthButtonComponent {
  @Input() label: string = 'Login'; // Default button text
  @Output() clicked = new EventEmitter<void>(); // Event to emit click action

  onClick(): void {
    this.clicked.emit(); // Emit event when button is clicked
  }
}
