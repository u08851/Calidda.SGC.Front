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
import { ReunionesTableComponent } from './components/tables/reuniones-table/reuniones-table.component';
import { ActasTableComponent } from './components/tables/actas-table/actas-table.component';
import { CompromisosTableComponent } from './components/tables/compromisos-table/compromisos-table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
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
    
  ReunionesTableComponent,
    
  ActasTableComponent,
    
  CompromisosTableComponent,
    
  CarouselComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  providers: []
})
export class SecretaryModule { }
