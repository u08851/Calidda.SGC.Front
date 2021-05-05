import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendees',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.scss']
})
export class AttendeesComponent implements OnInit {

  selectedValues: string;
  data: any[] = [
    {
      "names": "Rocio del Valle",
      "tipo": "Titular",
      "cargoC": "Presidente",
      "status": {
        'cod': '0',
        'name': 'Confirmado'
      },
      "asistencia": "Presencial",
    },
    {
      "names": "Rocio del Valle",
      "tipo": "Titular",
      "cargoC": "Presidente",
      "status": {
        'cod': '1',
        'name': 'Rechazado'
      },
      "asistencia": "Presencial",
    },
    {
      "names": "Rocio del Valle",
      "tipo": "Titular",
      "cargoC": "Presidente",
      "status": {
        'cod': '2',
        'name': 'Pendiente'
      },
      "asistencia": "Presencial",
    },
  ];

  cols: any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Cargo en el comité', field: 'cargoC' },
      { header: 'Estado', field: 'status' },
      { header: 'Asistencia', field: 'asistencia' }
    ];
  }
}