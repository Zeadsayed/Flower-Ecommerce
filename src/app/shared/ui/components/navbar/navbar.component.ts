import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ModalService } from '../../../services/modal.service';
import { localStorageKeys } from '../../../../core/interfaces/localStorageKeys';
import { AuthApiService } from 'auth-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  submitted: boolean = false;
  loading: boolean = false;
  subscription: Subscription[] = [];

  private modalService = inject(ModalService);
  private _AuthApiService = inject(AuthApiService);

  openLoginModal() {
    this.modalService.open('login');
  }

  ngOnInit(): void {
    initFlowbite();
    if (localStorage.getItem(localStorageKeys.JWT)) {
      this.isLogin = true;
    }
  }

  //#region logout
  logout() {
    this.submitted = true;
    this.loading = true;
    let sub = this._AuthApiService.logout().subscribe({
      next: (res) => {
        if (res.message === 'success') {
          localStorage.removeItem(localStorageKeys.JWT);
          this.submitted = false;
          this.loading = false;
          window.location.reload();
        }
      },
      error: (err) => {
        this.loading = false;
        this.submitted = false;
      },
    });
    this.subscription.push(sub);
  }
  //#endregion
}
