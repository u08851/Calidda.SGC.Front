import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './manager.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComitesComponent } from './comites/comites.component';



@NgModule({
  declarations: [
    MaintenanceComponent,
    DashboardComponent,
    ComitesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ]
})
export class ManagerModule { }
