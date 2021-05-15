import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-comites',
  templateUrl: './comites.component.html',
  styleUrls: ['./comites.component.scss'],
})
export class ComitesComponent implements OnInit {
  items: MenuItem[];
  selectedComite:string;
  comites:any[];
  selectedCodComite:string;
  // Calendar
  date3: Date;
  date4: Date;
  es: any;

  constructor() { }

  ngOnInit(): void {
    // menu dentro del table
    this.items = [
      {
        label: 'Editar Comité',
        icon: 'pi pi-refresh',
      },
      {
        label: 'Ver histórico',
        icon: 'pi pi-times',
      },
      {
        label: 'Dar de baja al Comité',
        icon: 'pi pi-times',
      },
      {
        label: 'Eliminar Comité',
        icon: 'pi pi-times',
      }

    ];


    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }

    // this.comites = [
    //   {cod: "01", label: "Comite 1"},
    // ]
  }

  searchComite(event) {
      this.comites = [
        {cod: "01", label: "Comite 1"},
        {cod: "02", label: "Comite 2"},
      ]
  }
}
