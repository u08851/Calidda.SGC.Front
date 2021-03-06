import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuniones-table',
  templateUrl: './reuniones-table.component.html',
  styleUrls: ['./reuniones-table.component.scss']
})
export class ReunionesTableComponent implements OnInit {

  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      tipoReunion: 'tipoReunion',
      asistencia: 'asistencia'
    },
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      tipoReunion: 'tipoReunion',
      asistencia: 'asistencia'
    },
  ];

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
      { header: 'Reuniones', field: 'reuniones' },
      { header: 'Código de reunión', field: 'codReunion' },
      { header: 'Fecha de la reunión', field: 'fechaReunion' },
      { header: 'Hora de la reunión', field: 'horaReunion' },
      { header: 'Tipo de reunión', field: 'tipoReunion' },
      { header: 'Asistencia de Miembros', field: 'asistencia' }
    ];
  }

}
