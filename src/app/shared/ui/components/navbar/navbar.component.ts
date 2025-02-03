import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite, Modal, ModalOptions } from 'flowbite';
import { AuthModalService } from '../../../services/auth-modal.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;

  private modalService = inject(AuthModalService);

  openModal() {
    this.modalService.open();
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
