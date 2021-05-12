import { Routes } from '@angular/router';
import { ComitesComponent } from '../member/pages/comites/comites.component';
import { DetailComiteComponent } from '../member/components/detail-comite/detail-comite.component';
import { DasboardComiteComponent } from './components/dasboard-comite/dasboard-comite.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


export const MemberRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'comites',
                component: ComitesComponent,
            },
            {
                path: 'comite',
                component: DasboardComiteComponent,
            },
            {
                path: 'detail-comite',
                component: DetailComiteComponent,
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ],  
    },
];