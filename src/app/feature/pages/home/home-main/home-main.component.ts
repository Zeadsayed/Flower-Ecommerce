import { Component } from '@angular/core';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { TrustCompaniesComponent } from './trust-companies/trust-companies.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { SpecialGiftsComponent } from './special-gifts/special-gifts.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ReviewsComponent } from '../../../../shared/components/ui/reviews/reviews.component';
import { AuthComponent } from '../auth/auth.component';
import { AboutComponent } from './about/about.component';

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
    AuthComponent,
    AboutComponent,
    GallaryComponent,
  ],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {}
