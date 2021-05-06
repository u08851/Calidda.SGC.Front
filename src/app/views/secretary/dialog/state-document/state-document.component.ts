import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-document',
  templateUrl: './state-document.component.html',
  styleUrls: ['./state-document.component.scss']
})
export class StateDocumentComponent implements OnInit {

  products: any[] = [
    {
      name: 'fechac',
      tipo: 'Rosario@gmail.com',
      visualizacion: 'name',
      firma: 'direccion'
    },
    {
      name: 'fechac',
      tipo: 'Rosario@gmail.com',
      visualizacion: 'name',
      firma: 'direccion'
    },
  ];

  cols: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Nombres y apellidos', field: 'name' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Visualización', field: 'visualizacion' },
      { header: 'Firma', field: 'firma' }
    ];
  }

}
