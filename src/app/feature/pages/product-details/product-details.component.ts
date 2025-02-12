import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRes, Product } from '../../../core/interfaces/product-res'; // Import interfaces
import { ProductService } from '../../../core/services/product-service/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for Angular directives
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null; // Holds the product details
  mainImage: string = ''; // Holds the currently selected image
  quantity: number = 1; // Default quantity

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.productDetails(productId); // Fetch product details
      }
    });
  }

  productDetails(id: string): void {
    this.productService.getProductDetials(id).subscribe((response: ProductRes) => {
      if (response && response.product) {
        this.product = response.product; // Assign the product data
        this.mainImage = response.product.imgCover; // Set default main image
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
      console.log('Added to cart:', cartItem); // Replace with actual cart logic
    }
  }
}