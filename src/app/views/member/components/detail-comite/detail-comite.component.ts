import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-detail-comite',
  templateUrl: './detail-comite.component.html',
  styleUrls: ['./detail-comite.component.scss']
})
export class DetailComiteComponent implements OnInit {
  selectedValues: string;
  selectedFrecuencia: string;
  date: Date;
  cols: any[];

  colsDocuments: any[];
  data: any[];
  documents: any[];


  document: string;
  displayMaximizable:boolean;

  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
    this.data = DATA;
    this.documents = DATA_DOC;

    this.cols = [
      { header: 'Nombres y apellidos', field: 'name' },
      { header: 'Correo electrónico', field: 'email' },
      { header: 'C. comité', field: 'comite' },
      { header: 'Celular', field: 'cel' },
      { header: 'Estado', field: 'status' },
      { header: 'Fac. en el comité', field: 'facComite' }
    ];

    this.colsDocuments = [
      { header: 'Listar de Documentos', field: 'doc' },
    ];
  }

  showMaximizableDialog() {
    this.document = 'assets/doc/prueba.pdf';
    this.displayMaximizable = true;
  }

}


const DATA: any[] = [
  {
    "name": "fechac",
    "email": "Rosario@gmail.com",
    "comite": "name",
    "cel": "direccion",
    "status": "responsable",
    "facComite": "empresa"
  },
  {
    "name": "fechac",
    "email": "Rosario@gmail.com",
    "comite": "name",
    "cel": "direccion",
    "status": "responsable",
    "facComite": "empresa"
  },
];


const DATA_DOC: any[] = [
  {
    "doc": "Documents"
  },
  {
    "doc": "Reglamentos.PDF"
  },
  {
    "doc": "Acuerdos de confidencialidad.PDF"
  }
];