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
  DocumentsComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  providers: []
})
export class SecretaryModule { }
