import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MemberRoutes } from './member.routing';
import { ComitesComponent } from './pages/comites/comites.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DasboardComiteComponent } from './components/dasboard-comite/dasboard-comite.component';
import { ListComiteTableComponent } from './components/list-comite-table/list-comite-table.component';
import { DetailComiteComponent } from './components/detail-comite/detail-comite.component';
import { ConfidentialityComponent } from './dialog/confidentiality/confidentiality.component';
import { ComitesBarComponent } from './components/graficos/comites-bar/comites-bar.component';
import { ReunionesBarComponent } from './components/graficos/reuniones-bar/reuniones-bar.component';
import { ReunionesDonutComponent } from './components/graficos/reuniones-donut/reuniones-donut.component';
import { VotacionesBarComponent } from './components/graficos/votaciones-bar/votaciones-bar.component';
import { CompromisosBarComponent } from './components/graficos/compromisos-bar/compromisos-bar.component';
import { ConfirmMeetingComponent } from './components/confirm-meeting/confirm-meeting.component';
import { DetailVoteComponent } from './components/detail-vote/detail-vote.component';
import { ConfigComiteComponent } from './components/config-comite/config-comite.component';

@NgModule({
  declarations: [
    ComitesComponent,
    DashboardComponent,
    DasboardComiteComponent,
    ListComiteTableComponent,
    DetailComiteComponent,
    ConfidentialityComponent,
    ComitesBarComponent,
    ReunionesBarComponent,
    ReunionesDonutComponent,
    VotacionesBarComponent,
    CompromisosBarComponent,
    ConfirmMeetingComponent,
    DetailVoteComponent,
    ConfigComiteComponent
],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MemberRoutes),
  ],
  providers: []
})
export class MemberModule { }
