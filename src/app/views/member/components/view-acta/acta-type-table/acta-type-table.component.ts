import { Component, Input, OnInit } from '@angular/core';
import { TypeActaEnum } from '../../../../../shared/enums/acta.type'

@Component({
  selector: 'app-acta-type-table',
  templateUrl: './acta-type-table.component.html',
  styleUrls: ['./acta-type-table.component.scss']
})
export class ActaTypeTableComponent implements OnInit {
  @Input() cols: string[];
  @Input() typeId: number;

  data: any[];
  colss: any[];
  constructor() { }

  ngOnInit(): void {

    switch (this.typeId) {
      case TypeActaEnum.Attendees:
        this.data = data_asistentes;
        break;
      case TypeActaEnum.CommitteeMeetingAgenda:
        this.data = data_CommitteeMeetingAgenda;
        break;
      case TypeActaEnum.Commitments:
        this.data = data_commitments;
        break;
      default:
        break;
    }
  }

}

const data_asistentes = [
  {
    name: 'Rocío Del Valle',
    type: 'Participante',
    status: 'Confirmado',
    assistance: 'Asistió'
  }
]
const data_CommitteeMeetingAgenda = [
  {
    order: 'Nº1',
    theme: '“Palabras del Presidente”',
    responsable: 'Rocío Del Valle',
    type: 'Titular',
    starDate: '12:00 p.m.',
    endDate: '3:00 p.m.',
    company: 'Calidda'
  }
]
const data_commitments = [
  {
    description: 'Entrega de Gastos Coorporaivos 2019',
    responsable: 'Rocío Del Valle',
    date: '20/12/2020'
  }
]

