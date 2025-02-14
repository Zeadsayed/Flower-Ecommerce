import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Product, ProductRes } from '../../../core/interfaces/product-res';
import { ProductService } from '../../../core/services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product!: Product
  mainImage: string = '';
  quantity: number = 1;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const productId = params.get('id');
        if (productId) {
          this.productDetails(productId);
        }
      });
  }

  productDetails(id: string): void {
    this.productService.getProductDetials(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: ProductRes) => {
        if (response && response.product) {
          this.product = response.product;
          this.mainImage = response.product.imgCover;
        }
      });
  }

  changeImage(selectedImage: string): void {
    this.mainImage = selectedImage;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product) {
      const cartItem = {
        product: this.product,
        quantity: this.quantity
      };
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
