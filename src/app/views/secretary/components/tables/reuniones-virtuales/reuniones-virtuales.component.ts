import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuniones-virtuales',
  templateUrl: './reuniones-virtuales.component.html',
  styleUrls: ['./reuniones-virtuales.component.scss'],
})
export class ReunionesVirtualesComponent implements OnInit {
  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaEmision: 'fechaEmision',
      horaLimite: 'horaLimite',
      fechaLimite: 'fechaLimite',
      participante: 'participante',
    },
    {
      reuniones: 'reuniones',
      codReunion: 'codReunion',
      fechaEmision: 'fechaEmision',
      horaLimite: 'horaLimite',
      fechaLimite: 'fechaLimite',
      participante: 'participante',
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
      { header: 'Fecha de emisión', field: 'fechaEmision' },
      { header: 'Hora límite de votación', field: 'horaLimite' },
      { header: 'Fecha límite de votación', field: 'fechaLimite' },
      { header: 'Participantes de votación', field: 'participante' },
    ];
  }
}
