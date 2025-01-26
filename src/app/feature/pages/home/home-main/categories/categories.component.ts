import { Component, inject, OnInit } from '@angular/core';
import { CategoryCardComponent } from '../../../../../shared/components/ui/category-card/category-card.component';
import { CategoriesService } from '../../../../services/home-main/categories.service';
import { Category } from '../../../../../core/interfaces/home-main/category';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  imports: [CategoryCardComponent, CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  private categories = inject(CategoriesService);

  allCategories: Category[] = [];

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
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
  };

  ngOnInit(): void {
    this.getAllCategories();
  }

  onCardSelected(): void {
    console.log('Card clicked!');
  }

  getAllCategories() {
    this.categories.getAllCategories().subscribe({
      next: (data) => {
        this.allCategories = data.categories;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
