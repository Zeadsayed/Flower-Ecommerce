import { Component } from '@angular/core';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { TrustCompaniesComponent } from './trust-companies/trust-companies.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { SpecialGiftsComponent } from './special-gifts/special-gifts.component';
import { ReviewsComponent } from '../../../../shared/components/ui/reviews/reviews.component';
import { ModalComponent } from '../../../../shared/components/ui/modal/modal.component';

@Component({
  selector: 'app-home-main',
  imports: [
    CategoriesComponent,
    PopularItemsComponent,
    DeliveryInfoComponent,
    TrustCompaniesComponent,
    SpecialGiftsComponent,
    ReviewsComponent,
    BestSellerComponent,
    ModalComponent,
  ],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  isSignIn: boolean = true;
  forgetPass: boolean = false;
  verify: boolean = false;
  setPass: boolean = false;

  forgetPassword() {
    this.isSignIn = false;
    this.verify = false;
    this.setPass = false;
    this.forgetPass = true;
  }

  recoverPassword() {
    this.isSignIn = false;
    this.verify = true;
    this.setPass = false;
    this.forgetPass = false;
  }

  verifyCode() {
    this.isSignIn = false;
    this.verify = false;
    this.setPass = true;
    this.forgetPass = false;
  }

  setPassword() {
    this.isSignIn = true;
    this.verify = false;
    this.setPass = false;
    this.forgetPass = false;
  }
}
