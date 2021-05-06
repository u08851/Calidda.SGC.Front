import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-document',
  templateUrl: './send-document.component.html',
  styleUrls: ['./send-document.component.scss'],
})
export class SendDocumentComponent implements OnInit {
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

  checked: boolean = false;
  checked2: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { header: 'Nombres y apellidos', field: 'name' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Visualización', field: 'visualizacion' },
      { header: 'Firma', field: 'firma' }
    ];
  }
}
