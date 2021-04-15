import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-empresa',
  templateUrl: './table-empresa.component.html',
  styleUrls: ['./table-empresa.component.scss']
})
export class TableEmpresaComponent implements OnInit {

  products2: any[] = [
    {
      empresa: 'empresa',
      pais: 'pais'
    },
    {
      empresa: 'empresa',
      pais: 'pais'
    },
  ];

  cols2: any[];

  constructor() { }

  ngOnInit(): void {
    this.cols2 = [
      { header: 'Empresa', field: 'empresa' },
      { header: 'País', field: 'pais' },
    ];
  }

}
