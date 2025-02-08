import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-set-password',
  imports: [],
  templateUrl: './set-password.component.html',
  styleUrl: './set-password.component.scss',
})
export class SetPasswordComponent {
  isSignIn: boolean = true;
  forgetPass: boolean = false;
  verify: boolean = false;
  setPass: boolean = false;

  @Output() changeState = new EventEmitter<string>(); // Event emitter to notify parent

  setPassword() {
    this.changeState.emit('login');
  }
}
