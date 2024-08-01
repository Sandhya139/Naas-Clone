import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
    },
    {
        path: 'createOrg', loadComponent: () => import('./create-org/create-org.component').then(m => m.CreateOrgComponent),
    },
    {
        path: 'header', loadComponent: () => import('./header/header.component').then(m => m.HeaderComponent),
    }
];
