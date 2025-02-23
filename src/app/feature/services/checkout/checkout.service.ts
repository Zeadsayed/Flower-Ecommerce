import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiRoutes } from '../../../core/interfaces/apiRoutes';
import { Observable } from 'rxjs';
import { IUserCart } from '../../../core/interfaces/checkout/Cart';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private readonly env: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserCart(): Observable<IUserCart> {
    return this.http.get<IUserCart>(this.env + ApiRoutes.checkout.cart);
  }
}
