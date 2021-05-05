import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.scss']
})
export class VotacionComponent implements OnInit {

  selectedValues: string;
  data: any[] = [
    {
      "names": "Rocio del Valle",
      "status": {
        'cod': '2',
        'name': 'voto'
      },
      "tipo": "Titular",
      "respuesta": "SI"
    },
    {
      "names": "Rocio del Valle",
      "status": {
        'cod': '2',
        'name': 'voto'
      },
      "tipo": "Titular",
      "respuesta": "SI"
    },
    {
      "names": "Rocio del Valle",
      "status": {
        'cod': '2',
        'name': 'voto'
      },
      "tipo": "Titular",
      "respuesta": "SI"
    }
  ];

  cols: any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Estado', field: 'status' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Respuesta', field: 'respuesta'}
    ];
  }
}