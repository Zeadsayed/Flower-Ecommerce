import { Component, OnInit } from '@angular/core';
import { SpecialGiftsServiceService } from '../../../core/services/special-gifts-service/special-gifts-service.service';
import {  ISpecialGifts } from '../../../core/interfaces/special-gifts-interface';
import { SpecialGiftsSliderComponent } from '../special-gifts-slider/special-gifts-slider.component';
import { NgClass, NgStyle } from '@angular/common';


@Component({
  selector: 'specialGifts',
  imports: [SpecialGiftsSliderComponent,NgStyle, NgClass],
  templateUrl: './special-gifts.component.html',
  styleUrl: './special-gifts.component.scss'
})
export class SpecialGiftsComponent implements OnInit{

  gifts: ISpecialGifts[] =[];

  constructor(private _SpecialGiftsServiceService: SpecialGiftsServiceService) {}
  ngOnInit(): void {

    this.displaySpecialGifts();
  
  }
 

  displaySpecialGifts(){
     

    this._SpecialGiftsServiceService.getGifts().subscribe({
      next: (res: ISpecialGifts[]) => {
        this.gifts = res;
        console.log('Gifts Data:', this.gifts); // Verify the data
      },
      error: (err) => {
        console.error('Error fetching gifts:', err);
      }
    });


}
 

    

  }


  

