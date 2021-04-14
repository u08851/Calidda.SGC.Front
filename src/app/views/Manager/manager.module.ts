import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './manager.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComitesComponent } from './comites/comites.component';
import { CrearComiteComponent } from './dialog/crear-comite/crear-comite.component';
import { BarComponent } from './components/bar/bar.component';
import { ComiteTableComponent } from './components/comite-table/comite-table.component';

@NgModule({
  declarations: [
    MaintenanceComponent,
    DashboardComponent,
    ComitesComponent,
    CrearComiteComponent,
    BarComponent,
    ComiteTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  providers: []
})
export class ManagerModule { }
