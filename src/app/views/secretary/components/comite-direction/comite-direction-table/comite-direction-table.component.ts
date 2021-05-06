import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-comite-direction-table',
  templateUrl: './comite-direction-table.component.html',
  styleUrls: ['./comite-direction-table.component.scss']
})
export class ComiteDirectionTableComponent implements OnInit {
  nodes: TreeNode[];
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

    this.nodes = [
      {
          key: '0',
          label: 'Introduction',
          children: [
              {key: '0-0', label: 'What is Angular', data:'https://angular.io', type: 'url'},
              {key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url'},
              {key: '0-2', label: 'Learn and Explore', data:'https://angular.io/guide/architecture', type: 'url'},
              {key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url'}
          ]
      },
      {
          key: '1',
          label: 'Components In-Depth',
          children: [
              {key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'url'},
              {key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url'},
              {key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url'},
              {key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url'}
          ]
      }
  ];


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
