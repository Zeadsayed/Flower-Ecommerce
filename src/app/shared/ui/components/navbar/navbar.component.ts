import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  private modalService = inject(ModalService);

  openLoginModal() {
    this.modalService.open('login');
  }

  ngOnInit(): void {
    initFlowbite();
  }
}
