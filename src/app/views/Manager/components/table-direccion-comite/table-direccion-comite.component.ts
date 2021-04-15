import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CreateDireccionComiteComponent } from '../../dialog/create-direccion-comite/create-direccion-comite.component';

@Component({
  selector: 'app-table-direccion-comite',
  templateUrl: './table-direccion-comite.component.html',
  styleUrls: ['./table-direccion-comite.component.scss'],
})
export class TableDireccionComiteComponent implements OnInit {
  checked: boolean = true;
  ref: DynamicDialogRef;

  products: any[] = [
    {
      direccionComite: 'direccionComite'
    },
    {
      direccionComite: 'direccionComite'
    },
  ];

  cols: any[];

  constructor(
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.cols = [
      { header: 'Dirección del comité', field: 'direccionComite' }
    ];
  }


  showCreateDireccion() {
    this.ref = this.dialogService.open(CreateDireccionComiteComponent, {
      header: 'Creación de nuena Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }
  showEditDireccion() {
    this.ref = this.dialogService.open(CreateDireccionComiteComponent, {
      header: 'Editar Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }
}
