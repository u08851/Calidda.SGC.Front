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

@NgModule({
  declarations: [
    ComitesComponent,
    DashboardComponent,
    DasboardComiteComponent,
    ListComiteTableComponent,
    DetailComiteComponent,
    ConfidentialityComponent
],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MemberRoutes),
  ],
  providers: []
})
export class MemberModule { }
