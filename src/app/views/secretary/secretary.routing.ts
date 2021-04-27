import { Routes } from '@angular/router';
import { ComitesComponent } from '../secretary/components/comites/comites.component';
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
                component: ComitesComponent
            }
        ],  
    },
];