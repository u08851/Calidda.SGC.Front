import { Component, OnInit } from '@angular/core';

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

  constructor() {}

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
}
