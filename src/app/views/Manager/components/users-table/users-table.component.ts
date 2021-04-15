import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { CreateUserComponent } from '../../dialog/create-user/create-user.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  providers: [DialogService]
})
export class UsersTableComponent implements OnInit {

  products: any[] = [
    {
      "name": "name",
      "email": "cod",
      "rol": "direccion",
      "empresa": "responsable",
      "estado": "frecuencia",
    },
    {
      "name": "name",
      "email": "cod",
      "rol": "direccion",
      "empresa": "responsable",
      "estado": "frecuencia",
    }
  ];

  cols: any[];
  items: any[];
  checked: boolean = true;
  ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Nombres y Apellidos', field: 'name' },
      { header: 'Correo Electronico', field: 'email' },
      { header: 'Rol', field: 'rol' },
      { header: 'Empresa', field: 'empresa' },
      { header: 'Estado', field: 'estado' }
    ];

    this.items = [
      {
        label: 'Editar Comité',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Ver histórico',
        icon: 'pi pi-times',
      },
      {
        label: 'Dar de baja al Comité',
        icon: 'pi pi-times',
      },
      {
        label: 'Eliminar Comité',
        icon: 'pi pi-times',
      }

    ];

  }

  showCreateUser() {
    this.ref = this.dialogService.open(CreateUserComponent, {
      header: 'Creación de nuevo Usuario',
      width: '33%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  
  showEditeUser() {
    this.ref = this.dialogService.open(CreateUserComponent, {
      header: 'Editar Usuario',
      width: '33%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

}
