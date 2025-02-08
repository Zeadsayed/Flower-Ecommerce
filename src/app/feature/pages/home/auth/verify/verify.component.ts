import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-verify',
  imports: [],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss',
})
export class VerifyComponent {
  isSignIn: boolean = true;
  forgetPass: boolean = false;
  verify: boolean = false;
  setPass: boolean = false;

  @Output() changeState = new EventEmitter<string>(); // Event emitter to notify parent

  verifyCode() {
    this.changeState.emit('setPassword');
  }
}
