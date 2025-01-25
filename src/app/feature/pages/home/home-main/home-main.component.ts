import { Component } from '@angular/core';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-home-main',
  imports: [CategoriesComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
})
export class HomeMainComponent {}
