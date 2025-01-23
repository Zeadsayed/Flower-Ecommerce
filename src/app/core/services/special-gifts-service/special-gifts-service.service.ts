import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpecialGifts } from '../../interfaces/special-gifts-interface';

@Injectable({
  providedIn: 'root'
})
export class SpecialGiftsServiceService {

  constructor( private _HttpClient: HttpClient ) { }


  private jsonUrl = 'special-gifts.json';


  getGifts(): Observable<ISpecialGifts[]> {
    return this._HttpClient.get<ISpecialGifts[]>(this.jsonUrl);
  }
}

