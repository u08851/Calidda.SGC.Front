import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-table',
  templateUrl: './total-table.component.html',
  styleUrls: ['./total-table.component.scss']
})
export class TotalTableComponent implements OnInit {

  date3: Date;
  date4: Date;
  es: any;
  data: any[] = DATA;

  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
      ],
      today: 'Hoy',
      clear: 'Borrar',
    };

    this.cols = [
      { header: 'Fecha de creacion', field: 'fechaC' },
      { header: 'País', field: 'pais' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Secretario del comité', field: 'secretaria' },
      { header: 'Fecha de último sesión', field: 'fechaU' },
      { header: 'Estado', field: 'estado' }
    ];
  }

}


const DATA = [
  {
    "fechaC": "20/11/20",
    "nombre": "Comité de dirección",
    "secretaria": "Rocio del valle",
    "fechaU": "20/11/20",
    "estado": {
      'cod': '0',
      'name':'En configuración'
    }
  },
  {
    "fechaC": "20/11/20",
    "nombre": "Comité de dirección",
    "secretaria": "Jared Ro",
    "fechaU": "20/11/20",
    "estado": {
      'cod': '1',
      'name':'Baja'
    }
  },
  {
    "cod": "RE-2455",
    "fechaC": "20/11/20",
    "nombre": "Comité de dirección",
    "secretaria": "Javier Prado",
    "fechaU": "20/11/20",
    "estado": {
      'cod': '2',
      'name':'Activo'
    }
  },
];