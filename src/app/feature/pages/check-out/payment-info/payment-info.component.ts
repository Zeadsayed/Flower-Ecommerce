import { Component, ViewChild } from '@angular/core';
import { AuthApiService } from 'auth-api';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { BellingAddressComponent } from '../belling-address/belling-address.component';
import { IShippingAddress } from '../../../../core/interfaces/checkout/ShippingAddress';

@Component({
  selector: 'app-payment-info',
  imports: [],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.scss'
})
export class PaymentInfoComponent    {
   paymentData:any;


  @ViewChild(BellingAddressComponent) BellingAddressComponent!: BellingAddressComponent;

  
  constructor(private _CheckoutService: CheckoutService, private _AuthApiService: AuthApiService) {}

  ngAfterViewInit() {
    this.paymentData = this.BellingAddressComponent.userForm 
  
  }


  getCashOrder(): void {

    const data: IShippingAddress = this.paymentData.value;
    this._CheckoutService.cashOrder(data).subscribe({
      next: (response) => {
        console.log('Cash order response:', response);
      },
      error: (err) => {
        console.error('Error placing cash order:', err);
      },
      complete: () => {
        console.log('Cash order request completed.');
      }
    });
  }

  
  getOnlinePayment(): void {
   
    const data: IShippingAddress = this.paymentData.value;
    this._CheckoutService.onlinePayement(data).subscribe({
      next: (response) => {
        console.log('Online payment response:', response);
      },
      error: (err) => {
        console.error('Error during online payment:', err);
      },
      complete: () => {
        console.log('Online payment request completed.');
      }
    });
  }


  

 
 
}
