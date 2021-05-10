import { Routes } from '@angular/router';
import { ComiteComponent } from '../secretary/pages/comite/comite.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComiteOperatingComponent } from './components/comite-operating/comite-operating.component';
import { ReunionesTableComponent } from './components/tables/reuniones-table/reuniones-table.component';
import { ActasTableComponent } from './components/tables/actas-table/actas-table.component';
import { CompromisosTableComponent } from './components/tables/compromisos-table/compromisos-table.component';
import { ComiteDirectionComponent } from './components/comite-direction/comite-direction.component';
import { ViewComiteComponent } from './components/view-comite/view-comite.component';
import { DetailComiteComponent } from './components/comite-direction/detail-comite/detail-comite.component';
import { ConfComiteComponent } from './components/conf-comite/conf-comite.component';
import { InPersonMeetingComponent } from './components/comite-direction/in-person-meeting/in-person-meeting.component';
;

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
                path: 'comite-direction',
                component: ComiteDirectionComponent
            },
            {
                path: 'view-comite',
                component: ViewComiteComponent
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
            {
                path:'detail-comite',
                component: DetailComiteComponent
            },
            {
                path: 'detail-config',
                component: ConfComiteComponent
            },
            {
                path: 'in-person-meeting',
                component: InPersonMeetingComponent
            }
        ],  
    },
];