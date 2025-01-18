import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CategoryComponent } from './shared/components/ui/category/category.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ROSE happy gift';
  ngOnInit(): void {
    initFlowbite();
  }
}
