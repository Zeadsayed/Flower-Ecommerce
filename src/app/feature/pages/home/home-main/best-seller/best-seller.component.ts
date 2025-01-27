import { Component, inject, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PopularCardComponent } from '../../../../../shared/components/ui/popular-card/popular-card.component';
import { BestSellerService } from '../../../../services/home-main/best-seller.service';
import { BestSellerItem } from '../../../../../core/interfaces/home-main/BestSeller';

@Component({
  selector: 'app-best-seller',
  imports: [CarouselModule, PopularCardComponent],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss',
})
export class BestSellerComponent implements OnInit {
  private categories = inject(BestSellerService);

  allBestSeller: BestSellerItem[] = [];

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    nav: false,
    navSpeed: 1200,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
  };

  ngOnInit(): void {
    this.gePestSellerItems();
  }

  gePestSellerItems() {
    this.categories.getBestSellerItems().subscribe({
      next: (data) => {
        this.allBestSeller = data.bestSeller;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
