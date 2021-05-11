import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-compromisos',
  templateUrl: './total-compromisos.component.html',
  styleUrls: ['./total-compromisos.component.scss'],
})
export class TotalCompromisosComponent implements OnInit {
  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      codActa: 'codActa',
      compromiso: 'compromiso',
      responsable: 'responsable',
      fechaEntrega: 'fechaEntrega',
      avance: 'avance',
      estado: 'estado',
    },
    {
      codActa: 'codActa',
      compromiso: 'compromiso',
      responsable: 'responsable',
      fechaEntrega: 'fechaEntrega',
      avance: 'avance',
      estado: 'estado',
    },
  ];

  cols: any[];

  constructor() {}

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
      { header: 'Código de acta', field: 'codActa' },
      { header: 'Título', field: 'compromiso' },
      { header: 'Responsable', field: 'responsable' },
      { header: 'Fecha de Entrega', field: 'fechaEntrega' },
      { header: '% de Avance', field: 'avance' },
      { header: 'Estado', field: 'estado' },
    ];
  }
}
