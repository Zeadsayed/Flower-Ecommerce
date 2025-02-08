import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userEmailSignal: WritableSignal<string | null> = signal(null);

  constructor() {}

  setUserEmail(email: string): void {
    this.userEmailSignal.set(email);
  }

  // Method to get the user's email signal
  getUserEmailSignal(): WritableSignal<string | null> {
    return this.userEmailSignal;
  }
}
