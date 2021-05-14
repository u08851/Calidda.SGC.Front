import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-commitment-table',
  templateUrl: './detail-commitment-table.component.html',
  styleUrls: ['./detail-commitment-table.component.scss']
})
export class DetailCommitmentTableComponent implements OnInit {
  
  data: any[];
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];
  cols: any[];
  expandableRows: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    this.data = DATA;

    this.cols = [
      { field: 'id', header: 'Id', width: '10' },
      { field: 'subTarea', header: 'Sub Tareas', width: '20' },
      { field: 'responsable', header: 'Responsable', width: '20' },
      { field: 'avance', header: 'Avance', width: '10' }
  ];
  }

  

}


interface Product {
  id?: string;
  acta?: string;
  dataCreation?: string;
  horaCreation?: string;
  status?: string;
}


const DATA = [
  {
    "id": "1000",
    "acta": "Acata 1",
    "dataCreation": "20/11/2020",
    "horaCreation": "4:00 pm",
    "status": "En Proceso",
    "orders": [
      {
        "id": "1000",
        "compromiso": "Entrega de Equipos",
        "anterior": "45%",
        "actual": '50%',
        "fechaCierre": '20/11/2020',
      },
      {
        "id": "2000",
        "compromiso": "Investigar costos de atención",
        "anterior": "45%",
        "actual": '50%',
        "fechaCierre": '20/11/2020',
        "tareas": [
          {
            "id": "1000",
            "subTarea": "f230fh0g3",
            "responsable": "2020-09-13",
            "avance": "65%",
          },
        ]
      }
    ]
  },
  {
    "id": "2000",
    "acta": "Acata 2",
    "dataCreation": "20/11/2020",
    "horaCreation": "4:00 pm",
    "status": "En Proceso",
    "orders": [
      {
        "id": "1000",
        "compromiso": "f230fh0g3",
        "anterior": "2020-09-13",
        "actual": 65,
        "fechaCierre": 1,
      },
      {
        "id": "2000",
        "compromiso": "f230fh0g3",
        "anterior": "2020-09-13",
        "actual": 65,
        "fechaCierre": 1,
        "tareas": [
          {
            "id": "1000",
            "subTarea": "1. Ejecutar Valorización",
            "responsable": "Rocío Del Valle",
            "avance": "50%",
          },
        ]
      }
    ]
  }
]