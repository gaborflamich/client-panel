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
        path: '**',
        redirectTo: '404',
      },
    ],
  },
];
