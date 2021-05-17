import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ActaTypeService {

  public ActaTypeArray: actaType[] = [];
  public ActaColumns: cols[] = [];

  constructor() {
    this.ActaColumns = COLUMNS;
    this.ActaTypeArray = DATA;
  }
}

export interface actaType {
  id: number;
  description: string;
}

interface cols {
  id: number;
  type: string;
  col: any[];
}

const DATA: actaType[] = [
  { id: 1, description: 'Asistentes' },
  { id: 2, description: 'Agenda de Reunión del Comité' },
  { id: 3, description: 'Compromisos' },
  { id: 4, description: 'Desarrollo General' },
  { id: 5, description: 'Resumen de la votación' }

];
const COLUMNS: cols[] = [
  {
    id: 1, type: 'asistentes', col: [
      { field: 'name', header: 'Nombres y apellidos' },
      { field: 'type', header: 'Tipo' },
      { field: 'status', header: 'Estado de invitación' },
      { field: 'assistance', header: 'Asistencia' },
    ]
  },
  {
    id: 2, type: 'CommitteeMeetingAgenda', col: [
      { field: 'order', header: 'Orden' },
      { field: 'theme', header: 'Tema' },
      { field: 'responsable', header: 'Responsable del Tema' },
      { field: 'type', header: 'Tipo' },
      { field: 'starDate', header: 'Inicio' },
      { field: 'endDate', header: 'Fin' },
      { field: 'company', header: 'Empresa' },
    ]
  },
  {
    id: 3, type: 'commitments', col: [
      { field: 'description', header: 'Descripción' },
      { field: 'responsable', header: 'Responsable' },
      { field: 'date', header: 'Fecha' }
    ]
  },
  {
    id: 4, type: 'asistentes', col: [
      { field: 'name', header: 'Tipo' }
    ]
  },
  {
    id: 5, type: 'asistentes', col: [
      { field: 'name', header: 'Tipo' }
    ]
  }

];

const colasistentes = [
  { field: '', header: 'Nombres y apellidos' },
  { field: '', header: 'Nombres y apellidos sds' },
  { id: 1, type: 'asistentes', col: ['name', 'type', 'status', 'assistance'] },
]