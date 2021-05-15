import { Routes } from '@angular/router';
import { ComitesComponent } from '../member/pages/comites/comites.component';
import { DetailComiteComponent } from '../member/components/detail-comite/detail-comite.component';
import { DasboardComiteComponent } from './components/dasboard-comite/dasboard-comite.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConfirmMeetingComponent } from './components/confirm-meeting/confirm-meeting.component';
import { DetailVoteComponent } from './components/detail-vote/detail-vote.component';
import { ConfigComiteComponent } from './components/config-comite/config-comite.component';


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
            },
            {
                path: 'confirm-meeting',
                component: ConfirmMeetingComponent
            },
            {
                path: 'detail-vote',
                component: DetailVoteComponent
            },
            {
                path: 'config-comite',
                component: ConfigComiteComponent
            }
        ],  
    },
];