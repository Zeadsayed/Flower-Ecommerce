import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../../../services/checkout/checkout.service';
import { AuthApiService } from 'auth-api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IShippingAddress } from '../../../../core/interfaces/checkout/ShippingAddress';
import { FormInputComponent } from "../../../../shared/components/ui/form-input/form-input.component";
import { PaymentInfoComponent } from "../payment-info/payment-info.component";

@Component({
  selector: 'app-belling-address',
  templateUrl: './belling-address.component.html',
  styleUrls: ['./belling-address.component.scss'],
  imports: [FormInputComponent, PaymentInfoComponent]
})
export class BellingAddressComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private _CheckoutService: CheckoutService, private _AuthApiService: AuthApiService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.getUserInfo();
  }

  initializeForm(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', Validators.required),
    });
  }

  getUserInfo(): void {
    this._AuthApiService.userInfo().subscribe(
      (data) => {
        this.userForm.patchValue({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          phoneNumber: data.phoneNumber || '',
        });
      },
      (error) => {
        console.error('Error fetching user info:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      this.initializeForm();
    }
  }


}
