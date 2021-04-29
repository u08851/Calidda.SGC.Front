import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: any[] = [
    {
      reuniones: 'reuniones',
      codActas: 'codActas',
      asistencias: 'asistencias',
      faltas: 'faltas',
      percentasistencias: 'percentasistencias',
      miembros: 'miembros'
    },
    {
      reuniones: 'reuniones',
      codActas: 'codActas',
      asistencias: 'asistencias',
      faltas: 'faltas',
      percentasistencias: 'percentasistencias',
      miembros: 'miembros'
    },
  ];

  cols: any[];
  items: any[];

  // Calendar
  date3: Date;
  date4: Date;
  es: any;

  selectedCountry: string;
  countries: any[];

  selectedCity1: string;
  cities: any[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.cols = [
      { header: 'Reuniones', field: 'reuniones' },
      { header: 'Cód de Acta', field: 'codActas' },
      { header: 'Asistencias', field: 'asistencias' },
      { header: 'Faltas', field: 'faltas' },
      { header: '% de Asistencias', field: 'percentasistencias' },
      { header: 'Asistencia de Miembros', field: 'miembros' }
    ];

    this.items = [
      {
        label: 'Editar usuario',
        icon: 'pi pi-user-edit',
      },
      {
        label: 'Eliminar usuario',
        icon: 'pi pi-trash',
      },
    ];

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

    // dropdown
    this.countries = [{ name: 'Peru', code: 'PE' }];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  goToTableReuniones() {
    this.router.navigateByUrl('/secretary/reuniones-table');
  }

  goToTableActas() {
    this.router.navigateByUrl('/secretary/actas-table');
  }

  goToTableCompromisos() {
    this.router.navigateByUrl('/secretary/compromisos-table');
  }
}
