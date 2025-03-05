import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment'; 
import { ApiRoutes } from '../../../core/interfaces/apiRoutes';
import { Observable } from 'rxjs';
import { IUserCart } from '../../../core/interfaces/checkout/Cart';
import { IShippingAddress } from '../../../core/interfaces/checkout/ShippingAddress';
import { ICheckOutRes } from '../../../core/interfaces/checkout/CheckOutRes';


@Injectable({
  providedIn: 'root',
})
export class CheckoutService {

  private readonly env: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserCart(): Observable<IUserCart> {
    return this.http.get<IUserCart>(this.env + ApiRoutes.checkout.cart);
  }



  onlinePayement( data:IShippingAddress): Observable<ICheckOutRes> {

    return this.http.post<ICheckOutRes>(this.env + ApiRoutes.checkout.checkout,data);

  }
  

  cashOrder(data:IShippingAddress): Observable<ICheckOutRes> {
    return this.http.post<ICheckOutRes>(this.env + ApiRoutes.checkout.orders,data);
  }

}
