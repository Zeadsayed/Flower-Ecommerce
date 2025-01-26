import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BestSellerItem } from '../../../../core/interfaces/home-main/BestSeller';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'popular-card',
  imports: [CurrencyPipe],
  templateUrl: './popular-card.component.html',
  styleUrl: './popular-card.component.scss',
})
export class PopularCardComponent {
  // @Input() imageSrc: string = '';
  // @Input() title: string = '';
  // @Input() description: string = '';
  // @Input() price: number = 0;

  @Input() items: BestSellerItem[] = [];

  @Output() addToCart = new EventEmitter<void>();

  onAddToCart() {
    this.addToCart.emit();
  }
}
