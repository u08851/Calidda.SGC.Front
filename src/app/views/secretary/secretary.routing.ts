import { Routes } from '@angular/router';
import { ComiteComponent } from '../secretary/pages/comite/comite.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComiteOperatingComponent } from './components/comite-operating/comite-operating.component';
import { ReunionesTableComponent } from './components/tables/reuniones-table/reuniones-table.component';
import { ActasTableComponent } from './components/tables/actas-table/actas-table.component';
import { CompromisosTableComponent } from './components/tables/compromisos-table/compromisos-table.component';

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
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'comite-operating',
                component: ComiteOperatingComponent
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