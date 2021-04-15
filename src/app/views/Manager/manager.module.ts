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
import { ComiteTableComponent } from './components/comite-table/comite-table.component';
import { CreateUserComponent } from './dialog/create-user/create-user.component';
import { CeseMasivoComponent } from './components/cese-masivo/cese-masivo.component';
import { TableDireccionComiteComponent } from './components/table-direccion-comite/table-direccion-comite.component';
import { TableEmpresaComponent } from './components/table-empresa/table-empresa.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';
import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { CrearDireccionComponent } from './dialog/crear-direccion/crear-direccion.component';
import { CrearEmpresaComponent } from './dialog/crear-empresa/crear-empresa.component';

@NgModule({
  declarations: [
    MaintenanceComponent,
    DashboardComponent,
    ComitesComponent,
    CrearComiteComponent,
    BarComponent,
    ComiteTableComponent,
    CreateUserComponent,
    CeseMasivoComponent,
    TableDireccionComiteComponent,
    TableEmpresaComponent,
    TableUsuariosComponent,
    EjemploComponent,
    CrearDireccionComponent,
    CrearEmpresaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ManagerRoutes),
  ],
  entryComponents: [ ],
  providers: [DialogService, ConfirmationService ]
})
export class ManagerModule { }
