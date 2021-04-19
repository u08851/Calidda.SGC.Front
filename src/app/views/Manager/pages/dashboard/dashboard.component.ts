import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
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


  goToTableActive(){
    this.router.navigateByUrl('/manager/todos-table');
  }

  goToTableActivePais(){
    this.router.navigateByUrl('/manager/pais-table');
  }

  goToTableActiveEmpresa(){
    this.router.navigateByUrl('/manager/empresa-direccion-table');
  }

  goToTableActiveSecretaria(){
    this.router.navigateByUrl('/manager/secrearia-table');
  }

  goToTableActiveFrecuencia(){
    this.router.navigateByUrl('/manager/frecuencia-table');
  }

}
