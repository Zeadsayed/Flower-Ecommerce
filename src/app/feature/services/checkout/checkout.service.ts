import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiRoutes } from '../../../core/interfaces/apiRoutes';
import { Observable } from 'rxjs';
import { IUserCart } from '../../../core/interfaces/checkout/Cart';
import { AddCart } from '../../../core/interfaces/checkout/addCart';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private readonly env: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserCart(): Observable<IUserCart> {
    return this.http.get<IUserCart>(this.env + ApiRoutes.checkout.cart);
  }
  addToCart(data: AddCart): Observable<IUserCart> {
    return this.http.post<IUserCart>(this.env + ApiRoutes.checkout.cart, data);
  }
}
