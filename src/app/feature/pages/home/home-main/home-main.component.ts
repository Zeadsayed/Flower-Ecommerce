import { Component } from '@angular/core';
import { PopularItemsComponent } from './popular-items/popular-items.component';
import { CategoriesComponent } from './categories/categories.component';
import { BestSellerComponent } from './best-seller/best-seller.component';

@Component({
  selector: 'app-home-main',
  imports: [CategoriesComponent, PopularItemsComponent, BestSellerComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {}
