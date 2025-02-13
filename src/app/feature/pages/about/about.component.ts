import { Component } from '@angular/core';
import { DeliveryInfoComponent } from '../home/home-main/delivery-info/delivery-info.component';

@Component({
  selector: 'app-about',
  imports: [DeliveryInfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
