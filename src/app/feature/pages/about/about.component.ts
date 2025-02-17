import { Component } from '@angular/core';
import { DeliveryInfoComponent } from '../home/home-main/delivery-info/delivery-info.component';
import * as teamData from '../../../../assets/data/team.json';

@Component({
  selector: 'app-about',
  imports: [DeliveryInfoComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  teams: any[] = (teamData as any).default;
}
