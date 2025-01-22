import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryResponse } from '../../../core/interfaces/home-main/category';
import { ApiRoutes } from '../../../core/interfaces/apiRoutes';
import { BestSellerResponse } from '../../../core/interfaces/home-main/BestSeller';

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
      this.env + ApiRoutes.home.bsetSeller
    );
  }
}
