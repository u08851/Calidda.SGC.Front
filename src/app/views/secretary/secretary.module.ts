import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './secretary.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComiteComponent } from './pages/comite/comite.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { ComitesComponent } from './components/comites/comites.component';
import { ComiteDetailComponent } from './components/comite-detail/comite-detail.component';
@NgModule({
  declarations: [
    
  DashboardComponent,
    
  ComiteComponent,
    
  ReportsComponent,
    
  ComitesComponent,
    
  ComiteDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  providers: []
})
export class SecretaryModule { }
