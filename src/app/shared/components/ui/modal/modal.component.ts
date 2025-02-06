import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { Modal, ModalOptions } from 'flowbite';
import { ModalService } from '../../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @ViewChild('modalEl') modalElement!: ElementRef;
  modalInstance!: Modal;

  private modalSubscription!: Subscription;

  @Input() modalId: string = 'default-modal'; // Unique ID for multiple modals
  @Input() closable: boolean = false; // Allow closing via clicking outside

  private modalService = inject(ModalService);

  ngAfterViewInit() {
    const modalOptions: ModalOptions = {
      placement: 'center',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
      closable: this.closable,
    };

    // Initialize the Flowbite modal instance
    this.modalInstance = new Modal(
      this.modalElement.nativeElement,
      modalOptions
    );

    this.modalSubscription = this.modalService.modalState$.subscribe(
      ({ id, isOpen }) => {
        if (id === this.modalId) {
          isOpen ? this.modalInstance.show() : this.modalInstance.hide();
        }
      }
    );
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }
}
