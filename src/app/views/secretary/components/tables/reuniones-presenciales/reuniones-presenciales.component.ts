import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuniones-presenciales',
  templateUrl: './reuniones-presenciales.component.html',
  styleUrls: ['./reuniones-presenciales.component.scss']
})
export class ReunionesPresencialesComponent implements OnInit {

  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      estado: 'estado'
    },
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      asistencia: 'asistencia',
      estado: 'estado'
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
      { header: 'Asistencia de Miembros', field: 'asistencia' },
      { header: 'Estado de reunión', field: 'estado' },
    ];
  }

}
