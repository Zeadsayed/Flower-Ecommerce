import { TrustCompaniesComponent } from './../../trust-companies/trust-companies.component';
import { Component } from '@angular/core';
import {  SpecialGiftsComponent } from '../../special-gifts/special-gifts.component';
import { DeliveryInfoComponent } from '../../delivery-info/delivery-info.component';

@Component({
  selector: 'app-home-main',
  imports: [SpecialGiftsComponent,DeliveryInfoComponent,TrustCompaniesComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss'
})
export class HomeMainComponent {

}
