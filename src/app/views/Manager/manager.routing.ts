import { Routes } from '@angular/router';
import { ComitesComponent } from './pages/comites/comites.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearComiteComponent } from './dialog/crear-comite/crear-comite.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { CeseMasivoComponent } from './components/cese-masivo/cese-masivo.component';

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
            },
            {
                path: 'mantenimiento/masivo',
                component: CeseMasivoComponent,
            },
            {
                path: 'crear-comites',
                component: CrearComiteComponent
            },
        ],
    },
];