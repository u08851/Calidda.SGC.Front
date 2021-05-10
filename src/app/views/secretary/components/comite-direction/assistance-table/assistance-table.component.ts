import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistance-table',
  templateUrl: './assistance-table.component.html',
  styleUrls: ['./assistance-table.component.scss']
})
export class AssistanceTableComponent implements OnInit {

  dataFActa: any[];
  colsFirmaActa:any[];

  constructor() { }

  ngOnInit(): void {
    this.dataFActa = DATA_FIRMA_ACTA;
    this.colsFirmaActa = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Cargo en el comité', field: 'cargoC' },
      { header: 'Asistencia', field: 'asistencia' }
    ];
  }

}

const DATA_FIRMA_ACTA = [
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "asistencia": {
      'cod': '0',
      'name': 'Presente'
    }
  },
  {
    "names": "Rocio del Valle",
    "tipo": "Titular",
    "cargoC": "Presidente",
    "asistencia": {
      'cod': '1',
      'name': 'No  registra'
    }
  }
]