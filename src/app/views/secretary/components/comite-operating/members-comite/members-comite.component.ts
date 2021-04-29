import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-comite',
  templateUrl: './members-comite.component.html',
  styleUrls: ['./members-comite.component.scss']
})
export class MembersComiteComponent implements OnInit {
  selectedValue: string;
  products: any[] = [
    {
      "name": "fechac",
      "email": "Rosario@gmail.com",
      "comite": "name",
      "cel": "direccion",
      "status": "responsable",
      "facComite": "empresa"
    },
    {
      "name": "fechac",
      "email": "Rosario@gmail.com",
      "comite": "name",
      "cel": "direccion",
      "status": "responsable",
      "facComite": "empresa"
    },
  ];

  cols: any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Nombres y apellidos', field: 'name' },
      { header: 'Correo electrónico', field: 'email' },
      { header: 'C. comité', field: 'comite' },
      { header: 'Celular', field: 'cel' },
      { header: 'Estado', field: 'status' },
      { header: 'Fac. en el comité', field: 'facComite' }
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

}
