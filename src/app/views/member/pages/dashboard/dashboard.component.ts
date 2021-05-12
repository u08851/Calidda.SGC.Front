import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // Calendar
  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      reuniones: 'reuniones',
      codActas: 'codActas',
      asistencias: 'asistencias',
      faltas: 'faltas',
      percentasistencias: 'percentasistencias'
    },
    {
      reuniones: 'reuniones',
      codActas: 'codActas',
      asistencias: 'asistencias',
      faltas: 'faltas',
      percentasistencias: 'percentasistencias'
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
      { header: 'Reuniones', field: 'reuniones' },
      { header: 'Cód de Acta', field: 'codActas' },
      { header: 'Asistencias', field: 'asistencias' },
      { header: 'Faltas', field: 'faltas' },
      { header: '% de Asistencias', field: 'percentasistencias' }
    ];
  }
}
