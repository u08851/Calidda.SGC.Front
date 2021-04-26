import { Routes } from '@angular/router';
import { ComiteComponent } from '../secretary/pages/comite/comite.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const ManagerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'comites',
                component: ComiteComponent
            }
        ],  
    },
];