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
import { DetailCommitmentComponent } from './components/view-comite/detail-commitment/detail-commitment.component';
import { ConfComiteComponent } from './components/conf-comite/conf-comite.component';
import { InPersonMeetingComponent } from './components/comite-direction/in-person-meeting/in-person-meeting.component';
import { CreateMeetComponent } from './components/comite-direction/create-meet/create-meet.component';
import { ReunionesReprogramadasComponent } from './components/tables/reuniones-reprogramadas/reuniones-reprogramadas.component';
import { TotalReunionesComponent } from './components/tables/total-reuniones/total-reuniones.component';
import { ReunionesPresencialesComponent } from './components/tables/reuniones-presenciales/reuniones-presenciales.component';
import { ReunionesVirtualesComponent } from './components/tables/reuniones-virtuales/reuniones-virtuales.component';
import { ActaProcesoComponent } from './components/tables/acta-proceso/acta-proceso.component';
import { ActaNoIniciadoComponent } from './components/tables/acta-no-iniciado/acta-no-iniciado.component';
import { TotalActasComponent } from './components/tables/total-actas/total-actas.component';
import { ReporteActasComponent } from './components/tables/reporte-actas/reporte-actas.component';
import { TotalCompromisosComponent } from './components/tables/total-compromisos/total-compromisos.component';

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
                path: 'meet',
                component: CreateMeetComponent
            },
            {
                path: 'view-comite',
                component: ViewComiteComponent
            },
            {
                path: 'detail-compromiso/:index',
                component: DetailCommitmentComponent
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
            },
            {
                path: 'reuniones-reprogramadas',
                component: ReunionesReprogramadasComponent
            },
            {
                path: 'total-reuniones',
                component: TotalReunionesComponent
            },
            {
                path: 'reuniones-presenciales',
                component: ReunionesPresencialesComponent
            },
            {
                path: 'reuniones-virtuales',
                component: ReunionesVirtualesComponent
            },
            {
                path: 'actas-en-proceso',
                component: ActaProcesoComponent
            },
            {
                path: 'actas-no-iniciadas',
                component: ActaNoIniciadoComponent
            },
            {
                path: 'total-actas',
                component: TotalActasComponent
            },
            {
                path: 'reporte-actas',
                component: ReporteActasComponent
            },
            {
                path: 'total-compromisos',
                component: TotalCompromisosComponent
            }
        ],  
    },
];