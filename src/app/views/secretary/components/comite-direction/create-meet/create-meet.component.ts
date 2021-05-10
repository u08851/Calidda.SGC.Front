import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-meet',
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.scss']
})
export class CreateMeetComponent implements OnInit {

  date: Date;
  selectedTipoMeet: string;
  checked:boolean;
  tipoMeet: any[];
  colsMember: any[];
  dataMember: any[];
  colsAgenda: any[];
  dataAgenda: any[];

  constructor() { }

  ngOnInit(): void {
    this.tipoMeet = [
      { name: "Presencial", code: "01" },
      { name: "Online", code: "02" }
    ]

    this.colsMember = [
      { header: 'Nombres y apellidos', field: 'names' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Cargo Comite', field: 'cargo' }
    ];

    this.colsAgenda = [
      { header: 'Orden', field: 'orden' },
      { header: 'Tema', field: 'tema' },
      { header: 'Resposable del Tema', field: 'responsable' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Inicio', field: 'inicio' },
      { header: 'Fin', field: 'fin' }
    ];

    this.dataMember = [
      {
        "names": "fechac",
        "tipo": "cod",
        "cargo": "name"
      },
      {
        "names": "fechac",
        "tipo": "cod",
        "cargo": "name"
      }
    ];

    
    this.dataAgenda = [
      {
        "orden": "fechac",
        "tema": "cod",
        "responsable": "name",
        "tipo": "name",
        "inicio": "name",
        "fin": "name",
      },
      {
        "orden": "fechac",
        "tema": "cod",
        "responsable": "name",
        "tipo": "name",
        "inicio": "name",
        "fin": "name",
      },
    ];
  }

}
