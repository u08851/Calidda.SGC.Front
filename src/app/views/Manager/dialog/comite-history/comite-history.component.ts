import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comite-history',
  templateUrl: './comite-history.component.html',
  styleUrls: ['./comite-history.component.scss']
})
export class ComiteHistoryComponent implements OnInit {

  data: any[];

  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        fechaResgistro: '20/11/2020',
        horaRegistro: '20/11/2020',
        detalles: 'Se asigno un nuevo Responsable Rosario Chiarella al comité'
      },
      {
        fechaResgistro: '20/11/2020',
        horaRegistro: '20/11/2020',
        detalles: 'Se cambio la periodicidad de semanal a mensual.'
      }
    ]
  }

}
