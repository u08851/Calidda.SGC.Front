import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CrearDireccionComponent } from '../../dialog/crear-direccion/crear-direccion.component';

@Component({
  selector: 'app-table-direccion-comite',
  templateUrl: './table-direccion-comite.component.html',
  styleUrls: ['./table-direccion-comite.component.scss'],
})
export class TableDireccionComiteComponent implements OnInit {
  checked: boolean = true;
  displayModal:boolean;

  products: any[] = [
    {
      direccionComite: 'direccionComite'
    },
    {
      direccionComite: 'direccionComite'
    },
  ];

  cols: any[];

  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
    this.cols = [
      { header: 'Dirección del comité', field: 'direccionComite' }
    ];
  }


  showCreateDireccion() {
    this.ref = this.dialogService.open(CrearDireccionComponent, {
      header: 'Creación de nueva Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  showEditDireccion() {
    this.ref = this.dialogService.open(CrearDireccionComponent, {
      header: 'Editar Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

    
    showConfirmation() {
      this.displayModal = true;
    }
}
