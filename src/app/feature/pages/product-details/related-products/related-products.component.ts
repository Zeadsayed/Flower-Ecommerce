import { Component, Input } from '@angular/core';
import { RouterLink} from '@angular/router';

import { Modal } from 'flowbite';
import { Prosucts } from '../../../../core/interfaces/home-main/Products';
import { PopularCardComponent } from '../../../../shared/components/ui/popular-card/popular-card.component';

@Component({
  selector: 'app-related-products',
  imports: [PopularCardComponent,RouterLink],
  templateUrl: './related-products.component.html',
  styleUrl: './related-products.component.scss'
})
export class RelatedProductsComponent {

  @Input() relatedProducts: Prosucts[] = []; //  //  Ensure it's an array of `Products`
  modal: Modal | null = null;

  constructor() {}

  ngOnInit(): void {
    console.log('Related Products:', this.relatedProducts);
  }

  handleAddToCart(product: Prosucts) {
    console.log('Adding to cart:', product);
  }

  ngAfterViewInit() {
    const modalElement = document.getElementById('relatedProductsModal');
    if (modalElement) {
      console.log('Modal Element Found:', modalElement);
      this.modal = new Modal(modalElement);
    } else {
      console.error('Modal Element Not Found');
    }
  }

  openPopup() {
    console.log('Opening Popup');
    if (this.modal) {
      this.modal.show();
    }
  }

  closePopup() {
    if (this.modal) {
      this.modal.hide();
    }
  }
}

  

