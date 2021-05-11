import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './secretary.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComiteComponent } from './pages/comite/comite.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ComitesComponent } from './components/comites/comites.component';
import { ReunionesComponent } from './components/graficos/reuniones/reuniones.component';
import { ActasComponent } from './components/graficos/actas/actas.component';
import { CompromisosComponent } from './components/graficos/compromisos/compromisos.component';
import { ReunionesDonutComponent } from './components/graficos/reuniones-donut/reuniones-donut.component';
import { ActasDonutComponent } from './components/graficos/actas-donut/actas-donut.component';
import { ComiteDetailComponent } from './components/comite-operating/comite-detail/comite-detail.component';
import { ComiteOperatingComponent } from './components/comite-operating/comite-operating.component';
import { InformationBasicComponent } from './components/comite-operating/information-basic/information-basic.component';
import { MembersComiteComponent } from './components/comite-operating/members-comite/members-comite.component';
import { DocumentsComponent } from './components/comite-operating/documents/documents.component';
import { ReunionesTableComponent } from './components/tables/reuniones-table/reuniones-table.component';
import { ActasTableComponent } from './components/tables/actas-table/actas-table.component';
import { CompromisosTableComponent } from './components/tables/compromisos-table/compromisos-table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AddMemberComponent } from './dialog/add-member/add-member.component';
import { ComiteDirectionComponent } from './components/comite-direction/comite-direction.component';
import { CreateMeetComponent } from './components/comite-direction/create-meet/create-meet.component';
import { DetailComiteComponent } from './components/comite-direction/detail-comite/detail-comite.component';
import { ViewComiteComponent } from './components/view-comite/view-comite.component';
import { AddVotacionComponent } from './dialog/add-votacion/add-votacion.component';
import { ComiteDirectionTableComponent } from './components/comite-direction/comite-direction-table/comite-direction-table.component';
import { BasicInformationComponent } from './components/view-comite/basic-information/basic-information.component';
import { AttendeesComponent } from './components/view-comite/attendees/attendees.component';
import { ActaComponent } from './components/view-comite/acta/acta.component';
import { VotacionComponent } from './components/view-comite/votacion/votacion.component';
import { VideoComponent } from './components/view-comite/video/video.component';
import { CommitmentComponent } from './components/view-comite/commitment/commitment.component';
import { ComiteMemberTableComponent } from './components/comite-direction/comite-member-table/comite-member-table.component';
import { AssistantSecretaryComponent } from './dialog/assistant-secretary/assistant-secretary.component';
import { StateDocumentComponent } from './dialog/state-document/state-document.component';
import { SendDocumentComponent } from './dialog/send-document/send-document.component';
import { DetailCommitmentComponent } from './components/view-comite/detail-commitment/detail-commitment.component';
import { DetailCommitmentTableComponent } from './components/view-comite/detail-commitment-table/detail-commitment-table.component';
import { ConfComiteComponent } from './components/conf-comite/conf-comite.component';
import { ParticipantsComponent } from './components/conf-comite/participants/participants.component';
import { InPersonMeetingComponent } from './components/comite-direction/in-person-meeting/in-person-meeting.component';
import { AssistanceTableComponent } from './components/comite-direction/assistance-table/assistance-table.component';
import { ScheduleComiteComponent } from './components/comite-direction/schedule-comite/schedule-comite.component';
import { ListTableComponent } from './components/list-table/list-table.component';
import { AttachFileComponent } from './components/attach-file/attach-file.component';
import { ReunionesReprogramadasComponent } from './components/tables/reuniones-reprogramadas/reuniones-reprogramadas.component';
import { TotalReunionesComponent } from './components/tables/total-reuniones/total-reuniones.component';
import { ReunionesPresencialesComponent } from './components/tables/reuniones-presenciales/reuniones-presenciales.component';
import { ReunionesVirtualesComponent } from './components/tables/reuniones-virtuales/reuniones-virtuales.component';
import { ActaProcesoComponent } from './components/tables/acta-proceso/acta-proceso.component';
import { ActaNoIniciadoComponent } from './components/tables/acta-no-iniciado/acta-no-iniciado.component';
import { TotalActasComponent } from './components/tables/total-actas/total-actas.component';
import { ReporteActasComponent } from './components/tables/reporte-actas/reporte-actas.component';
import { TotalCompromisosComponent } from './components/tables/total-compromisos/total-compromisos.component';
import { AssistanceMemberComponent } from './dialog/assistance-member/assistance-member.component';

@NgModule({
  declarations: [
    
  DashboardComponent,
  ComiteComponent,
  ReportsComponent,
  ComitesComponent,
  ReunionesComponent,
  ActasComponent,
  CompromisosComponent,
  ReunionesDonutComponent,
  ActasDonutComponent,
  ComiteDetailComponent,
  ComiteOperatingComponent,
  InformationBasicComponent,
  MembersComiteComponent,
  DocumentsComponent,    
  ReunionesTableComponent,    
  ActasTableComponent,    
  CompromisosTableComponent,
  CarouselComponent,
  AddMemberComponent,
  ComiteDirectionComponent,
  CreateMeetComponent,
  DetailComiteComponent,
  ViewComiteComponent,
  AddVotacionComponent,
  ComiteDirectionTableComponent,
  BasicInformationComponent,
  AttendeesComponent,
  ActaComponent,
  VotacionComponent,
  VideoComponent,
  CommitmentComponent,
  ComiteMemberTableComponent,
  AssistantSecretaryComponent,
  StateDocumentComponent,
  SendDocumentComponent,
  DetailCommitmentComponent,
  DetailCommitmentTableComponent,
  ConfComiteComponent,
  ParticipantsComponent,
  InPersonMeetingComponent,
  AssistanceTableComponent,
  ScheduleComiteComponent,
  ListTableComponent,
  AttachFileComponent,
  ReunionesReprogramadasComponent,
  TotalReunionesComponent,
  ReunionesPresencialesComponent,
  ReunionesVirtualesComponent,
  ActaProcesoComponent,
  ActaNoIniciadoComponent,
  TotalActasComponent,
  ReporteActasComponent,
  TotalCompromisosComponent,
  AssistanceMemberComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  providers: []
})
export class SecretaryModule { }
