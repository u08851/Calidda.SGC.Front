import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-actas',
  templateUrl: './total-actas.component.html',
  styleUrls: ['./total-actas.component.scss']
})
export class TotalActasComponent implements OnInit {

  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      codActa: 'codActa',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      porcentaje: 'porcentaje',
      tipoReu: 'tipoReu',
      asistencia: 'asistencia'
    },
    {
      codActa: 'codActa',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      porcentaje: 'porcentaje',
      tipoReu: 'tipoReu',
      asistencia: 'asistencia'
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
      { header: 'Fecha de la reunión', field: 'fechaReunion' },
      { header: 'Hora de la reunión', field: 'horaReunion' },
      { header: 'Porcentaje de avance', field: 'porcentaje' },
      { header: 'Tipo de reunión', field: 'tipoReu' },
      { header: 'Asistencia', field: 'asistencia' }
    ];
  }

}
