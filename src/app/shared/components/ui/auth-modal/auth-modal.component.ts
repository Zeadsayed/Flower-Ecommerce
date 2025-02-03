import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Modal, ModalOptions } from 'flowbite';
import { AuthModalService } from '../../../services/auth-modal.service';

@Component({
  selector: 'app-auth-modal',
  imports: [],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent implements AfterViewInit {
  @ViewChild('modalEl') modalElement!: ElementRef;
  modalInstance!: Modal;

  constructor(private authModalService: AuthModalService) {}

  ngAfterViewInit() {
    const modalOptions: ModalOptions = {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
      closable: true,
    };

    // Initialize the Flowbite modal instance
    this.modalInstance = new Modal(
      this.modalElement.nativeElement,
      modalOptions
    );

    // Subscribe to modalService to listen for open/close events
    this.authModalService.modalState$.subscribe((isOpen) => {
      console.log(isOpen);

      if (isOpen) {
        console.log('isOpen');

        this.modalInstance.show();
      }
    });
  }
}
