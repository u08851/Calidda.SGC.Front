import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-comite-table',
  templateUrl: './list-comite-table.component.html',
  styleUrls: ['./list-comite-table.component.scss']
})
export class ListComiteTableComponent implements OnInit {

  data: any[] = [
    {
      "cod": "RE-2455",
      "fechaC": "20/11/20",
      "fechaR": "20/11/20",
      "horaR": "4:00pm",
      "tipoR": "Presencial",
      "estado": {
        'cod': '0',
        'name':'Finalizado'
      },
      "button": {
        "label": "Confirmar Invitación",
        "routing": "",
      },
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
      },
      "button": {
        "label": "Marcar Asistencia",
        "routing": "",
      },
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
      },
      "button": {
        "label": "Votar",
        "routing": "",
      },
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
