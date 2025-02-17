import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Rating {
  stars: number;
  label: string;
}

@Component({
  selector: 'app-sidebar-category',
  imports: [NgIf],
  templateUrl: './sidebar-category.component.html',
  styleUrl: './sidebar-category.component.scss',
})
export class SidebarCategoryComponent {
  open = false;

  categories = [
    { id: 'cat1', name: 'Home & Living', count: 8 },
    { id: 'cat2', name: 'Garment Care', count: 8 },
    { id: 'cat3', name: 'Jewelry & Accessories', count: 8 },
    { id: 'cat4', name: 'Occasion Gifts', count: 8 },

    { id: 'cat5', name: 'Office & Stationery', count: 8 },
    { id: 'cat6', name: 'Personalised Gifts', count: 8 },

    { id: 'cat7', name: 'Gifts Box', count: 8 },

    // ... add other categories
  ];

  brands = [
    { id: 'brand1', name: 'Trooba', count: 8 },
    { id: 'brand2', name: 'Sundrey', count: 8 },
    { id: 'brand3', name: 'Sahoo Gifts', count: 8 },

    { id: 'brand4', name: 'Casterly', count: 8 },

    { id: 'brand5', name: 'Mainden Gifts', count: 8 },

    // ... add other brands
  ];

  sales = [
    { id: 'sale1', name: 'On Sale', count: 8 },
    { id: 'sale2', name: 'In Stock', count: 8 },
    { id: 'sale2', name: 'Out Of Stock', count: 8 },

    { id: 'sale4', name: 'Discount', count: 8 },

    // ... add other sales options
  ];

  ratings = [
    { stars: 5 },
    { stars: 4 },
    { stars: 3 },
    { stars: 2 },
    { stars: 1 },
  ];

  colors = [
    'rgba(96,109,221,1)',
    'rgba(76,175,80,1)',
    'rgba(23,162,184,1)',
    '#FCD34D',
    'rgba(244,67,54,1)',
  ];

  sizes = [
    { id: 'size1', name: 'Extra Small' },
    { id: 'size2', name: 'Small' },
    { id: 'size3', name: 'Medium' },
    { id: 'size4', name: 'Large' },
    { id: 'size5', name: 'Extra Large' },
  ];

  toggleSidebar() {
    this.open = !this.open;
    // Toggle body class to prevent scrolling when sidebar is open
  }
}
