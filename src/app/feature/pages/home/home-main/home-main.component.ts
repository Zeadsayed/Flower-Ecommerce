import { Component } from '@angular/core';
import { PopularItemsComponent } from '../../popular-items/popular-items.component';

@Component({
  selector: 'app-home-main',
  imports: [PopularItemsComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {
  items = [
    {
      imageSrc: `images/image 23.png`,
      title: 'Wireless Headphones',
      description: 'High-quality sound with noise cancellation.',
      price: '$250.00',
    },
    {
      imageSrc: `images/image 24.png`,
      title: 'Smartwatch',
      description: 'Track your fitness and notifications.',
      price: '$300.00',
    },
    {
      imageSrc: `images/image 25.png`,
      title: 'Gift Box',
      description: 'Perfect gift for any occasion.',
      price: '$50.00',
    },
    {
      imageSrc: `images/image 34.png`,
      title: 'Gift Box',
      description: 'Perfect gift for any occasion.',
      price: '$50.00',
    },
  ];
}
