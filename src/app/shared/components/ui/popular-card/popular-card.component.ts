import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BestSellerItem } from '../../../../core/interfaces/home-main/BestSeller';
import { CurrencyPipe } from '@angular/common';
import { Products } from '../../../../core/interfaces/home-main/Products';
import { Product } from '../../../../core/interfaces/product-res';

@Component({
  selector: 'popular-card',
  imports: [CurrencyPipe],
  templateUrl: './popular-card.component.html',
  styleUrl: './popular-card.component.scss',
})
export class PopularCardComponent {
  @Input() cardData!: Products;
  @Input() badge: string = '';
  @Input() imgCover: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() rateAvg: number = 0;

  @Output() addToCart = new EventEmitter<void>();

  onAddToCart() {
    this.addToCart.emit();
  }

  // View Product button click (Prevents propagation)
  viewProduct(event: Event) {
    event.stopPropagation(); // Prevents card click event
  }

  // Add to Wishlist button click (Prevents propagation)
  addToWishlist(event: Event) {
    event.stopPropagation(); // Prevents card click event
  }
}
