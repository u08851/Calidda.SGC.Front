import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acta-no-iniciado',
  templateUrl: './acta-no-iniciado.component.html',
  styleUrls: ['./acta-no-iniciado.component.scss']
})
export class ActaNoIniciadoComponent implements OnInit {

  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      codActa: 'codActa',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia'
    },
    {
      codActa: 'codActa',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
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
      { header: 'Asistencia', field: 'asistencia' }
    ];
  }

}
