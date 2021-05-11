import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuniones-reprogramadas',
  templateUrl: './reuniones-reprogramadas.component.html',
  styleUrls: ['./reuniones-reprogramadas.component.scss'],
})
export class ReunionesReprogramadasComponent implements OnInit {
  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaReunion: 'fechaReunion',
      freprogramacion: 'freprogramacion',
      horaReunion: 'horaReunion',
      hreprogramacion: 'hreprogramacion'

    },
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaReunion: 'fechaReunion',
      freprogramacion: 'freprogramacion',
      horaReunion: 'horaReunion',
      hreprogramacion: 'hreprogramacion'
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
      { header: 'Código de reunión', field: 'codReunion' },
      { header: 'Fecha de la reunión', field: 'fechaReunion' },
      { header: 'Fecha de reprogramación', field: 'freprogramacion' },
      { header: 'Hora de la reunión', field: 'horaReunion' },
      { header: 'Hora de reprogramación', field: 'hreprogramacion' }
    ];
  }
}
