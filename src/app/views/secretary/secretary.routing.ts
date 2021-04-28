import { Routes } from '@angular/router';
import { ComitesComponent } from '../secretary/components/comites/comites.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComiteComponent } from './pages/comite/comite.component';

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
                component: ComitesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'comite-operativo',
                component: ComiteComponent
            }
        ],  
    },
];