import { Component } from '@angular/core';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { DeliveryInfoComponent } from './delivery-info/delivery-info.component';
import { TrustCompaniesComponent } from './trust-companies/trust-companies.component';
import { SpecialGiftsComponent } from './special-gifts/special-gifts.component';
import { ReviewsComponent } from '../../../../shared/components/ui/reviews/reviews.component';

@Component({
  selector: 'app-home-main',
  imports: [
    CategoriesComponent,
    PopularItemsComponent,
    DeliveryInfoComponent,
    TrustCompaniesComponent,
    SpecialGiftsComponent,
    ReviewsComponent,
  ],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {}
