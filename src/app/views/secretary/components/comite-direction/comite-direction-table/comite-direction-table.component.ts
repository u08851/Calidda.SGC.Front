import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-comite-direction-table',
  templateUrl: './comite-direction-table.component.html',
  styleUrls: ['./comite-direction-table.component.scss']
})
export class ComiteDirectionTableComponent implements OnInit {
  products: any[] = [
    {
      "cod": "RE-2455",
      "fechaC": "20/11/20",
      "fechaR": "20/11/20",
      "horaR": "4:00pm",
      "tipoR": "Presencial",
      "estado": {
        'cod': '0',
        'name':'Finalizado'
      }
    },
    {
      "cod": "RE-2455",
      "fechaC": "20/11/20",
      "fechaR": "20/11/20",
      "horaR": "4:00pm",
      "tipoR": "Presencial",
      "estado": {
        'cod': '1',
        'name':'En Curso'
      }
    },
    {
      "cod": "RE-2455",
      "fechaC": "20/11/20",
      "fechaR": "20/11/20",
      "horaR": "4:00pm",
      "tipoR": "Presencial",
      "estado": {
        'cod': '2',
        'name':'Pre-Agendada'
      }
    },
  ];

  cols: any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {

   


    this.cols = [
      { header: 'Codigo de Reunión',field: 'cod' },
      { header: 'F. de Creación', field: 'fechaC' },
      { header: 'F. de Reunión', field: 'fechaR' },
      { header: 'H. de Reunión', field: 'horaR' },
      { header: 'Tipo de Resunión', field: 'tipoR' },
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

}
