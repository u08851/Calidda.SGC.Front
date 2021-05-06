import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comite-direction-table',
  templateUrl: './comite-direction-table.component.html',
  styleUrls: ['./comite-direction-table.component.scss']
})
export class ComiteDirectionTableComponent implements OnInit {

  products: any[] = [
    {
      codReunion: 'codReunion',
      fechaCreación: 'fechaCreación',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      tipoReunion: 'tipoReunion',
      estado: 'estado'
    },
    {
      codReunion: 'codReunion',
      fechaCreación: 'fechaCreación',
      fechaReunion: 'fechaReunion',
      horaReunion: 'horaReunion',
      tipoReunion: 'tipoReunion',
      estado: 'estado'
    },
  ];
  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Código de reunión', field: 'codReunion' },
      { header: 'F. de creación', field: 'fechaCreación' },
      { header: 'F. de reunión', field: 'fechaReunion' },
      { header: 'H. de reunión', field: 'horaReunion' },
      { header: 'Tipo de reunión', field: 'tipoReunion' },
      { header: 'Estado', field: 'estado' }
    ];
  }

}
