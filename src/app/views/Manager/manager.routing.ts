import { Routes } from '@angular/router';
import { ComitesComponent } from './pages/comites/comites.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CrearComiteComponent } from './dialog/crear-comite/crear-comite.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { CeseMasivoComponent } from './components/cese-masivo/cese-masivo.component';
import { TodosTableComponent } from './components/indicadores-inicio-tables/todos-table/todos-table.component';
import { PaisTableComponent } from './components/indicadores-inicio-tables/pais-table/pais-table.component';
import { EmpresaDireccionTableComponent } from './components/indicadores-inicio-tables/empresa-direccion-table/empresa-direccion-table.component';
import { SecretariaTableComponent } from './components/indicadores-inicio-tables/secretaria-table/secretaria-table.component';
import { FrecuenciaTableComponent } from './components/indicadores-inicio-tables/frecuencia-table/frecuencia-table.component';
import { ReportTableComponent } from './components/report-table/report-table.component';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';

export const ManagerRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent
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
            {
                path: 'todos-table',
                component: TodosTableComponent
            },
            {
                path: 'pais-table',
                component: PaisTableComponent
            },
            {
                path: 'empresa-direccion-table',
                component: EmpresaDireccionTableComponent
            },
            {
                path: 'secrearia-table',
                component: SecretariaTableComponent
            },
            {
                path: 'frecuencia-table',
                component: FrecuenciaTableComponent
            },
            {
                path: 'report',
                component: ReportTableComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ],
    },
];