import { Routes } from '@angular/router';
import { ErrorHandlingComponent } from './core/components/error-pages/error-handling/error-handling.component';

export const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./modules/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        title: 'Dashboard',
      },
      {
        path: 'login',
        loadComponent: () => import('./modules/login/login.component').then((m) => m.LoginComponent),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () => import('./modules/register/register.component').then((m) => m.RegisterComponent),
        title: 'Register',
      },
      {
        path: 'settings',
        loadComponent: () => import('./modules/settings/settings.component').then((m) => m.SettingsComponent),
        title: 'Settings',
      },
      {
        path: 'client/add',
        loadComponent: () => import('./modules/add-client/add-client.component').then((m) => m.AddClientComponent),
        title: 'Add Client',
      },
      {
        path: 'client/edit/:id',
        loadComponent: () => import('./modules/edit-client/edit-client.component').then((m) => m.EditClientComponent),
      },
      {
        path: 'client/:id',
        loadComponent: () => import('./modules/client-details/client-details.component').then((m) => m.ClientDetailsComponent),
      },
      {
        path: '404',
        component: ErrorHandlingComponent,
        data: { errorCode: '404' },
      },
      {
        path: '500',
        component: ErrorHandlingComponent,
        data: { errorCode: '500' },
      },
      {
        path: '404',
        loadComponent: () => import('./modules/not-found/not-found.component').then((m) => m.NotFoundComponent),
        title: '404',
      },
      {
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];
