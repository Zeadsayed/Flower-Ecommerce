import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthModalService {
  private modalState = new Subject<boolean>(); // State to track modal open/close
  modalState$ = this.modalState.asObservable(); // Observable to listen from other components

  open() {
    console.log('open');

    this.modalState.next(true);
  }
}
