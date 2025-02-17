import { Component, inject, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoriesService } from '../../services/home-main/categories.service';
import { Products } from '../../../core/interfaces/home-main/Products';
import { CategoryCardComponent } from '../../../shared/components/ui/category-card/category-card.component';
import { PopularCardComponent } from '../../../shared/components/ui/popular-card/popular-card.component';
import { SidebarCategoryComponent } from './sidebar-category/sidebar-category.component';
import { RouterLink } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-all-category',
  imports: [
    PopularCardComponent,
    SidebarCategoryComponent,
    RouterLink,
    AuthComponent,
  ],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AllCategoryComponent {
  private categories = inject(CategoriesService);

  allProducts: Products[] = [];
  subscription: Subscription[] = [];
  paginatedProducts: Products[] = [];
  page = 1; // Current page
  pageSize = 6; // Number of items per page
  maxVisiblePages = 4; // Max visible pages before ellipsis

  ngOnInit(): void {
    this.getCategoryProducts();
  }

  handleAddToCart(product: any): void {
    console.log('Card clicked!');
  }

  getCategoryProducts(id?: string) {
    const params: { [key: string]: string | number | boolean } = id
      ? { category: id }
      : {};
    this.categories.getCategoryProducts(params).subscribe({
      next: (data: any) => {
        this.allProducts = data.products;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  ngOnDestroy(): void {
    this.subscription && this.subscription.forEach((s) => s.unsubscribe());
  }
}
