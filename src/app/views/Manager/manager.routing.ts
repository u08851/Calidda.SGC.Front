import { Routes } from '@angular/router';
import { ComitesComponent } from './comites/comites.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

export const ManagerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'comites',
                component: ComitesComponent
            },
            {
                path: 'mantenimiento',
                component: MaintenanceComponent,
            }
        ],
    },
];