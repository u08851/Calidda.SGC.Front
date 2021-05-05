import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acta',
  templateUrl: './acta.component.html',
  styleUrls: ['./acta.component.scss']
})
export class ActaComponent implements OnInit {

  data: any[];
  dataFActa: any[];
  cols: any[];
  colsFirmaActa:any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {
    this.data = DATA_ACTA;
    this.dataFActa = DATA_FIRMA_ACTA;

    this.cols = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Cargo en el comité', field: 'cargoC' },
      { header: 'Estado', field: 'status' },
      { header: 'Forum', field: 'forum' }
    ];
    this.colsFirmaActa = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Cargo en el comité', field: 'cargoC' },
      { header: 'Estado', field: 'status' }
    ];
  }

}

const DATA_ACTA = [
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "status": {
      'cod': '0',
      'name': 'Confirmado'
    }
  },
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "status": {
      'cod': '1',
      'name': 'Rechazado'
    }
  },
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "status": {
      'cod': '2',
      'name': 'Pendiente'
    }
  },
]

const DATA_FIRMA_ACTA = [
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "status": {
      'cod': '0',
      'name': 'Confirmado'
    }
  },
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "status": {
      'cod': '1',
      'name': 'Rechazado'
    }
  },
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "status": {
      'cod': '2',
      'name': 'Pendiente'
    }
  },
]