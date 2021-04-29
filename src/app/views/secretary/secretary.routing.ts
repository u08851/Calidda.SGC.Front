import { Routes } from '@angular/router';
import { ComitesComponent } from '../secretary/components/comites/comites.component';
import { ActasTableComponent } from './components/tables/actas-table/actas-table.component';
import { CompromisosTableComponent } from './components/tables/compromisos-table/compromisos-table.component';
import { ReunionesTableComponent } from './components/tables/reuniones-table/reuniones-table.component';
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
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'reuniones-table',
                component: ReunionesTableComponent,
            },
            {
                path: 'actas-table',
                component: ActasTableComponent,
            },
            {
                path: 'compromisos-table',
                component: CompromisosTableComponent,
            },
        ],  
    },
];