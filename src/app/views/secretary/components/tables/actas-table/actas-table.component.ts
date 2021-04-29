import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actas-table',
  templateUrl: './actas-table.component.html',
  styleUrls: ['./actas-table.component.scss'],
})
export class ActasTableComponent implements OnInit {
  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      reuniones: 'reuniones',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      agenda: 'agenda',
      acta: 'acta'
    },
    {
      reuniones: 'reuniones',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      agenda: 'agenda',
      acta: 'acta'
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
      { header: 'Fecha de la reunión', field: 'fechaReunion' },
      { header: 'Hora de la reunión', field: 'horaReunion' },
      { header: 'Asistencia de Miembros', field: 'asistencia' },
      { header: 'Agenda de la Reunión', field: 'agenda' },
      { header: 'Acta', field: 'acta' }
    ];
  }
}
