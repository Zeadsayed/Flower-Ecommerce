import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BestSellerItem } from '../../../../core/interfaces/home-main/BestSeller';
import { CurrencyPipe } from '@angular/common';
import { Prosucts } from '../../../../core/interfaces/home-main/Products';
import { Product } from '../../../../core/interfaces/product-res';
@Component({
  selector: 'popular-card',
  imports: [CurrencyPipe],
  templateUrl: './popular-card.component.html',
  styleUrl: './popular-card.component.scss',
})
export class PopularCardComponent {
  @Input() cardData!: Prosucts;
  

  @Input() badge: string = '';
  @Input() imgCover: string = '';
  @Input() title: string = '';
  @Input() price: number = 0;

  @Output() addToCart = new EventEmitter<void>();

  onAddToCart() {
    this.addToCart.emit();
  }
}
