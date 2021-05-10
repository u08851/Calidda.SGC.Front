import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-comite',
  templateUrl: './schedule-comite.component.html',
  styleUrls: ['./schedule-comite.component.scss'],
})
export class ScheduleComiteComponent implements OnInit {

  dataAgenda: any[];
  colsAgenda: any[];

  constructor() {}

  ngOnInit(): void {
    this.dataAgenda = DATA_AGENDA;
    this.colsAgenda = [
      { header: 'Orden', field: 'orden' },
      { header: 'Tema', field: 'tema' },
      { header: 'Responsable del tema', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Inicio', field: 'inico' },
      { header: 'Fin', field: 'fin' },
      { header: 'Empresa', field: 'empresa' },
    ];
  }
}

const DATA_AGENDA = [
  {
    orden: 'N°1',
    tema: 'Balance de TI',
    names: 'Rocio del Valle',
    tipo: 'Titular',
    inicio: '12:00pm',
    fin: '3:00pm',
    empresa: 'Calidda'
  },
  {
    orden: 'N°2',
    tema: 'Balance de TI',
    names: 'Rocio del Valle',
    tipo: 'Titular',
    inicio: '12:00pm',
    fin: '3:00pm',
    empresa: 'GEB'
  },
];
