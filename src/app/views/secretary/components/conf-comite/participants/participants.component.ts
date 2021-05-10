import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.scss']
})
export class ParticipantsComponent implements OnInit {

  data: any[] = [
    {
      "names": "Rocio del Valle",
      "tipo": "Titular",
      "cargoC": "Presidente",
      "status": {
        'cod': '0',
        'name': 'Votó'
      }
    },
    {
      "names": "Rocio del Valle",
      "tipo": "Titular",
      "cargoC": "Secretario",
      "status": {
        'cod': '1',
        'name': 'No votó'
      }
    },
    {
      "names": "Rocio del Valle",
      "tipo": "Suplente",
      "cargoC": "Vocal",
      "status": {
        'cod': '2',
        'name': 'Pendiente'
      }
    },
  ];

  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Cargo en el comité', field: 'cargoC' },
      { header: 'Estado', field: 'status' },
    ];
  }

}
