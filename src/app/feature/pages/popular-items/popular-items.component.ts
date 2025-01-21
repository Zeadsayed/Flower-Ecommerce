import { Component, Input } from '@angular/core';
import { CardComponent } from '../../../shared/ui/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-popular-items',
  imports: [CardComponent],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss',
})
export class PopularItemsComponent {
  @Input() items: any[] = [];

  handleAddToCart(item: any) {
    console.log('Added to cart:', item);
  }
}
