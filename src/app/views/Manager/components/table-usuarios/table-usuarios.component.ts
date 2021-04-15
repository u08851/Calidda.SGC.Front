import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateUserComponent } from '../../dialog/create-user/create-user.component';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.scss'],
})
export class TableUsuariosComponent implements OnInit {
  products: any[] = [
    {
      nombre: 'nombre',
      correo: 'correo',
      rol: 'rol',
      empresa: 'empresa',
      estado: 'estado'
    },
    {
      nombre: 'nombre',
      correo: 'correo',
      rol: 'rol',
      empresa: 'empresa',
      estado: 'estado'
    },
  ];

  cols: any[];
  items: any[];
  checked: boolean;
  ref: DynamicDialogRef;
  
  constructor(
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Nombre y apellidos', field: 'nombre' },
      { header: 'Correo eletrónico', field: 'correo' },
      { header: 'Rol', field: 'rol' },
      { header: 'Empresa', field: 'empresa' },
      { header: 'Estado', field: 'estado' }
    ];

    this.items = [
      {
        label: 'Editar usuario',
        icon: 'pi pi-user-edit',
      },
      {
        label: 'Eliminar usuario',
        icon: 'pi pi-trash',
      },
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
