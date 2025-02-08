import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  imports: [],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  isSignIn: boolean = true;
  forgetPass: boolean = false;
  verify: boolean = false;
  setPass: boolean = false;

  @Output() changeState = new EventEmitter<string>(); // Event emitter to notify parent

  recoverPassword() {
    this.changeState.emit('verify');
  }
}
