import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRes } from '../../../core/interfaces/product-res';
import { ProductService } from '../../../core/services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product!: ProductRes; 

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.productDetials(productId);
      }
    });
  }

  productDetials(id: string): void {
    this.productService.getProductDetials(id).subscribe(response => {
      this.product = response;
      
    });
  }

}
