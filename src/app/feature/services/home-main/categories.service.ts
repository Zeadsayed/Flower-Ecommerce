import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../../../core/interfaces/home-main/category';
import { ApiRoutes } from '../../../core/interfaces/apiRoutes';
import { BestSellerResponse } from '../../../core/interfaces/home-main/BestSeller';
import { ProsuctsResponse } from '../../../core/interfaces/home-main/Products';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly env: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(
      this.env + ApiRoutes.home.categories
    );
  }

  getBestSellerItems(): Observable<BestSellerResponse> {
    return this.http.get<BestSellerResponse>(
      this.env + ApiRoutes.home.bestSeller
    );
  }

  getAllProducts(params: {
    [key: string]: string | number | boolean;
  }): Observable<ProsuctsResponse> {
    let httpParams = new HttpParams();

    // Append each key-value pair dynamically to the HttpParams object
    Object.keys(params).forEach((key) => {
      httpParams = httpParams.set(key, params[key].toString());
    });
    return this.http.get<ProsuctsResponse>(this.env + ApiRoutes.home.products, {
      params: httpParams,
    });
  }
}
