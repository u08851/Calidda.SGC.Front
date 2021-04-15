import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CrearEmpresaComponent } from '../../dialog/crear-empresa/crear-empresa.component';

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

  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) { }

  ngOnInit(): void {
    this.cols2 = [
      { header: 'Empresa', field: 'empresa' },
      { header: 'País', field: 'pais' },
    ];
  }

  showCreateEmpresa() {
    this.ref = this.dialogService.open(CrearEmpresaComponent, {
      header: 'Creación nueva Empresa',
      width: '38%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  showEditEmpresa() {
    this.ref = this.dialogService.open(CrearEmpresaComponent, {
      header: 'Editar Empresa',
      width: '38%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

}
