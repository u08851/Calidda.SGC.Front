import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ManagerRoutes } from './manager.routing';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComitesComponent } from './pages/comites/comites.component';
import { CrearComiteComponent } from './dialog/crear-comite/crear-comite.component';
import { BarTodosComponent } from './components/graficos/bar-todos/bar-todos.component';
import { ComiteTableComponent } from './components/comite-table/comite-table.component';
import { CreateUserComponent } from './dialog/create-user/create-user.component';
import { CeseMasivoComponent } from './components/cese-masivo/cese-masivo.component';
import { TableDireccionComiteComponent } from './components/table-direccion-comite/table-direccion-comite.component';
import { TableEmpresaComponent } from './components/table-empresa/table-empresa.component';
import { TableUsuariosComponent } from './components/table-usuarios/table-usuarios.component';

import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService } from 'primeng/api';
import { CrearDireccionComponent } from './dialog/crear-direccion/crear-direccion.component';
import { CrearEmpresaComponent } from './dialog/crear-empresa/crear-empresa.component';
import { DonutComponent } from './components/graficos/donut/donut.component';
import { BarPaisComponent } from './components/graficos/bar-pais/bar-pais.component';
import { BarEmpresaDireccionComponent } from './components/graficos/bar-empresa-direccion/bar-empresa-direccion.component';
import { BarSecretariaComponent } from './components/graficos/bar-secretaria/bar-secretaria.component';
import { TodosTableComponent } from './components/indicadores-inicio-tables/todos-table/todos-table.component';
import { PaisTableComponent } from './components/indicadores-inicio-tables/pais-table/pais-table.component';
import { EmpresaDireccionTableComponent } from './components/indicadores-inicio-tables/empresa-direccion-table/empresa-direccion-table.component';
import { SecretariaTableComponent } from './components/indicadores-inicio-tables/secretaria-table/secretaria-table.component';
import { FrecuenciaTableComponent } from './components/indicadores-inicio-tables/frecuencia-table/frecuencia-table.component';

@NgModule({
  declarations: [
    MaintenanceComponent,
    DashboardComponent,
    ComitesComponent,
    CrearComiteComponent,
    BarTodosComponent,
    ComiteTableComponent,
    CreateUserComponent,
    CeseMasivoComponent,
    TableDireccionComiteComponent,
    TableEmpresaComponent,
    TableUsuariosComponent,

    CrearDireccionComponent,
    CrearEmpresaComponent,
    DonutComponent,
    BarPaisComponent,
    BarEmpresaDireccionComponent,
    BarSecretariaComponent,
    TodosTableComponent,
    PaisTableComponent,
    EmpresaDireccionTableComponent,
    SecretariaTableComponent,
    FrecuenciaTableComponent
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
