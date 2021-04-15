import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-direccion-comite',
  templateUrl: './table-direccion-comite.component.html',
  styleUrls: ['./table-direccion-comite.component.scss'],
})
export class TableDireccionComiteComponent implements OnInit {
  checked: boolean = true;

  products: any[] = [
    {
      direccionComite: 'direccionComite'
    },
    {
      direccionComite: 'direccionComite'
    },
  ];

  cols: any[];

  constructor() {}

  ngOnInit(): void {
    this.cols = [
      { header: 'Dirección del comité', field: 'direccionComite' }
    ];
  }
}
