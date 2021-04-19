import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frecuencia-table',
  templateUrl: './frecuencia-table.component.html',
  styleUrls: ['./frecuencia-table.component.scss']
})
export class FrecuenciaTableComponent implements OnInit {

  date3: Date;
  date4: Date;
  es: any;

  products: any[] = [
    {
      fechaCreacion: 'fechaCreacion',
      frecuencia: 'frecuencia', 
      nombre: 'nombre',
      secretario: 'secretario',
      fechaUltimo: 'fechaUltimo'
    },
    {
      fechaCreacion: 'fechaCreacion',
      frecuencia: 'frecuencia',
      nombre: 'nombre',
      secretario: 'secretario',
      fechaUltimo: 'fechaUltimo'
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
      { header: 'Fecha de creacion', field: 'fechaCreacion' },
      { header: 'Frecuencia', field: 'frecuencia' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Secretario del comité', field: 'secretario' },
      { header: 'Fecha de último sesión', field: 'fechaUltimo' }
    ];
  }

}
