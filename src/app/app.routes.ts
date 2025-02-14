import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/pages/auth-layout/auth-layout.component';
import { ProductDetailsComponent } from './feature/pages/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        canActivate: [],
        loadChildren: () =>
          import('./feature/pages/home/home-main/home.route').then(
            (c) => c.routes
          ),
      },
      { path: 'product-details/:id', component: ProductDetailsComponent },

      {
        path: 'home',
        canActivate: [],
        loadChildren: () =>
          import('./feature/pages/home/home-main/home.route').then(
            (c) => c.routes
          ),
      },
      {
        path: 'all-categories',
        canActivate: [],
        loadChildren: () =>
          import('./feature/pages/all-category/AllCategory.route').then(
            (c) => c.routes
          ),
      },
   
    ],
  },
 
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/pages/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent
      ),
  },

];