import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isSignIn: boolean = true;
  forgetPass: boolean = false;
  verify: boolean = false;
  setPass: boolean = false;

  @Output() changeState = new EventEmitter<string>(); // Event emitter to notify parent

  forgetPassword() {
    this.changeState.emit('forgetPassword');
  }
}
