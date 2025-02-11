import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';

export const routes: Routes = [
    {path:'', component: MainLayoutComponent,
    
        children:[
        {path:'', pathMatch:'full', canActivate:[],
            loadChildren: ()=>
                import('./feature/pages/home/home-main/home.route').then((c)=>c.routes)
        },
        {path:'home', canActivate:[],
            loadChildren: ()=>
                import('./feature/pages/home/home-main/home.route').then((c)=>c.routes)        }

        ]
    },{
        path:'auth', loadComponent: () => import('./core/auth-layout/auth-layout.component').then((c) => c.AuthLayoutComponent)
    }
];
