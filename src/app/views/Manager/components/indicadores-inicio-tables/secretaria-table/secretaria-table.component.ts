import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretaria-table',
  templateUrl: './secretaria-table.component.html',
  styleUrls: ['./secretaria-table.component.scss'],
})
export class SecretariaTableComponent implements OnInit {

  products2: any[] = [
    {
      fechaCreacion: 'fechaCreacion',
      nombre: 'nombre',
      fechaUltimo: 'fechaUltimo',
    },
    {
      fechaCreacion: 'fechaCreacion',
      nombre: 'nombre',
      fechaUltimo: 'fechaUltimo',
    },
  ];

  cols2: any[];

  constructor() {}

  ngOnInit(): void {

    this.cols2 = [
      { header: 'Fecha de creacion', field: 'fechaCreacion' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Fecha de último sesión', field: 'fechaUltimo' },
    ];
  }
}
