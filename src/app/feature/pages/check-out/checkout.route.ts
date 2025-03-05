import { PaymentInfoComponent } from './payment-info/payment-info.component';
// home.route.ts
import { Routes } from '@angular/router';
import { CheckOutComponent } from './check-out.component';

export const routes: Routes = [
  {
    path: '',
    component: CheckOutComponent,
    children: [
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart/cart.component').then((c) => c.CartComponent),
      },
      {
        path: 'belling-address',
        loadComponent: () =>
          import('./belling-address/belling-address.component').then((c) => c.BellingAddressComponent),
      },
      {
        path: 'payment-info',
        loadComponent: () =>
          import('./payment-info/payment-info.component').then((c) => c.PaymentInfoComponent),
      },
    ],
  },
];
