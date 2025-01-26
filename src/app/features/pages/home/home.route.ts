import {Routes } from "@angular/router";

export const routes: Routes = [
    {
      path: '',
      loadComponent: () =>
        import('./home-main/home-main.component').then((m) => m.HomeMainComponent),
      data: {
        title: 'Home',
      }

    },
    {
      path: 'home',
      loadComponent: () =>
        import('./home-main/home-main.component').then((m) => m.HomeMainComponent),
      data: {
        title: 'Home',
      }

    }
  ];

  