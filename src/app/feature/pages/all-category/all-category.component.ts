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

  selectedFilters: [
    { category: string[] },
    { rateAvg: number[] },
    { keyword: string },
    { 'price[gte]': number },
    { 'price[lte]': number }
  ] = [
    { category: [] },
    { rateAvg: [] },
    { keyword: '' },
    { 'price[gte]': 0 },
    { 'price[lte]': 0 },
  ];

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

  // Update selected filters and fetch products
  updateSelectedFilters(
    filters: [
      { category: string[] },
      { rateAvg: number[] },
      { keyword: string },
      { 'price[gte]': number },
      { 'price[lte]': number }
    ]
  ) {
    this.selectedFilters = filters;

    // If all filters are empty, reload all products
    if (
      filters[0].category.length === 0 &&
      filters[1].rateAvg.length === 0 &&
      filters[2].keyword === '' &&
      filters[3]['price[gte]'] === 0 &&
      filters[4]['price[lte]'] === 1000
    ) {
      this.getCategoryProducts(); // Calls API to load all products
    } else {
      this.filterProducts(); // Applies selected filters
    }
  }

  getCategoryProducts() {
    this.categories.getCategoryProducts({}).subscribe({
      next: (data: any) => {
        this.allProducts = data.products;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  filterProducts() {
    const params: {
      [key: string]: string | number | boolean | string[] | number[];
    } = {};

    if (this.selectedFilters[0].category.length) {
      params['category'] = this.selectedFilters[0].category;
    }
    if (this.selectedFilters[1].rateAvg.length) {
      params['rateAvg'] = this.selectedFilters[1].rateAvg;
    }
    if (this.selectedFilters[2].keyword) {
      // Ensure keyword is accessed correctly
      params['keyword'] = this.selectedFilters[2].keyword;
    }
    if (this.selectedFilters[3]['price[gte]']) {
      // Ensure keyword is accessed correctly
      params['price[gte]'] = this.selectedFilters[3]['price[gte]'];
    }
    if (this.selectedFilters[4]['price[lte]']) {
      // Ensure keyword is accessed correctly
      params['price[lte]'] = this.selectedFilters[4]['price[lte]'];
    }

    this.categories.filterProducts(params).subscribe({
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
