import { Component, inject, OnInit } from '@angular/core';
import {
  ICart,
  ICartProducts,
} from '../../../../core/interfaces/checkout/Cart';
import { CheckoutService } from '../../../services/checkout/checkout.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  quantity: number = 1;
  cartData!: ICart;
  cartItems!: ICartProducts[];

  private _checkoutService = inject(CheckoutService);

  ngOnInit(): void {
    this.getUserCart();
  }
  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getUserCart() {
    this._checkoutService.getUserCart().subscribe(
      (res) => {
        this.cartData = res.cart;
        this.cartItems = res.cart.cartItems;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
