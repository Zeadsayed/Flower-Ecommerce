import { Component, inject, Input, OnInit } from '@angular/core';
import { PopularCardComponent } from '../../../../../shared/components/ui/popular-card/popular-card.component';
import { Category } from '../../../../../core/interfaces/home-main/category';
import { CategoriesService } from '../../../../services/home-main/categories.service';
import { BestSellerItem } from '../../../../../core/interfaces/home-main/BestSeller';
import { Prosucts } from '../../../../../core/interfaces/home-main/Products';

@Component({
  selector: 'app-popular-items',
  imports: [PopularCardComponent],
  templateUrl: './popular-items.component.html',
  styleUrl: './popular-items.component.scss',
})
export class PopularItemsComponent implements OnInit {
  private categories = inject(CategoriesService);

  allCategories: Category[] = [];
  allBestItems: BestSellerItem[] = [];
  allProducts: Prosucts[] = [];

  ngOnInit(): void {
    this.getAllCategories();
    this.gePestSellerItems();
  }

  onCardSelected(): void {
    console.log('Card clicked!');
  }

  getAllCategories() {
    this.categories.getAllCategories().subscribe({
      next: (data: any) => {
        this.allCategories = data.categories;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  gePestSellerItems() {
    this.categories.getBestSellerItems().subscribe({
      next: (data: any) => {
        this.allBestItems = data.bestSeller;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  getCategoryProducts(id: string) {
    this.categories.getAllProducts({ category: id }).subscribe({
      next: (data: any) => {
        this.allProducts = data.products;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  handleAddToCart(item: any) {
    console.log('Added to cart:', item);
  }
}
