import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './manager.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComitesComponent } from './pages/comites/comites.component';
import { CrearComiteComponent } from './dialog/crear-comite/crear-comite.component';
import { BarComponent } from './components/bar/bar.component';
import { TableDireccionComiteComponent } from './components/table-direccion-comite/table-direccion-comite.component';
import { TableEmpresaComponent } from './components/table-empresa/table-empresa.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';

@NgModule({
  declarations: [
    MaintenanceComponent,
    DashboardComponent,
    ComitesComponent,
    CrearComiteComponent,
    BarComponent,
    TableDireccionComiteComponent,
    TableEmpresaComponent,
    TableUsuariosComponent,
    EjemploComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  providers: []
})
export class ManagerModule { }
