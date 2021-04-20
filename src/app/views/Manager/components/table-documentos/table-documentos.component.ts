import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-documentos',
  templateUrl: './table-documentos.component.html',
  styleUrls: ['./table-documentos.component.scss'],
})
export class TableDocumentosComponent implements OnInit {
  checked: boolean;
  // Calendar
  date3: Date;
  date4: Date;
  es: any;

  products2: any[] = [
    {
      fechaDeCarga: 'fechaDeCarga',
      horaDeCarga: 'horaDeCarga',
      tipo: 'tipo',
      nombreDocumento: 'nombreDocumento',
      estado: 'estado',
    },
    {
      fechaDeCarga: 'fechaDeCarga',
      horaDeCarga: 'horaDeCarga',
      tipo: 'tipo',
      nombreDocumento: 'nombreDocumento',
      estado: 'estado',
    },
  ];

  cols2: any[];

  tipo: any[];
  selectedTipo: string;

  constructor() {
    this.tipo = [
      {name: 'Miembro', code: 'MB'},
      {name: 'Invitados', code: 'IV'}
  ];
  }

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
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
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

    this.cols2 = [
      { header: 'Fecha de carga', field: 'fechaDeCarga' },
      { header: 'Hora de carga', field: 'horaDeCarga' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Estado', field: 'estado' },
    ];
  }
}
