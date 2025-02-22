import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutService } from '../../services/checkout/checkout.service';
import { CartSummaryComponent } from '../../../shared/components/ui/cart-summary/cart-summary.component';

@Component({
  selector: 'app-check-out',
  imports: [RouterOutlet, CartSummaryComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss',
})
export class CheckOutComponent {
  private _checkoutService = inject(CheckoutService);
  ngOnInit() {
    this.getUserCart();
  }

  getUserCart() {
    this._checkoutService.getUserCart().subscribe((data) => {
      console.log(data);
    });
  }
}
