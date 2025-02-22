import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiRoutes } from '../../../core/interfaces/apiRoutes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  private readonly env: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserCart(): Observable<any> {
    return this.http.get<any>(this.env + ApiRoutes.checkout.cart);
  }
}
