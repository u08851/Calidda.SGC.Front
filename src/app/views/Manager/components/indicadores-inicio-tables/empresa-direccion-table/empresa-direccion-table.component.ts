import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-direccion-table',
  templateUrl: './empresa-direccion-table.component.html',
  styleUrls: ['./empresa-direccion-table.component.scss'],
})
export class EmpresaDireccionTableComponent implements OnInit {
  date3: Date;
  date4: Date;
  es: any;

  products2: any[] = [
    {
      fechaCreacion: 'fechaCreacion',
      pais: 'pais',
      nombre: 'nombre',
      secretario: 'secretario',
      fechaUltimo: 'fechaUltimo',
    },
    {
      fechaCreacion: 'fechaCreacion',
      pais: 'pais',
      nombre: 'nombre',
      secretario: 'secretario',
      fechaUltimo: 'fechaUltimo',
    },
  ];

  cols2: any[];

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

    this.cols2 = [
      { header: 'Fecha de creacion', field: 'fechaCreacion' },
      { header: 'País', field: 'pais' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Secretario del comité', field: 'secretario' },
      { header: 'Fecha de último sesión', field: 'fechaUltimo' },
    ];
  }
}
