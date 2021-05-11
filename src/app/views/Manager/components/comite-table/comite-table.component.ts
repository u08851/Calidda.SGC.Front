import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComiteHistoryComponent } from '../../dialog/comite-history/comite-history.component';

@Component({
  selector: 'app-comite-table',
  templateUrl: './comite-table.component.html',
  styleUrls: ['./comite-table.component.scss']
})
export class ComiteTableComponent implements OnInit {
  displayModal:boolean;
  products: any[] = [
    {
      "fechac": "fechac",
      "horaC": "horaC",
      "cod": "cod",
      "name": "name",
      "direccion": "direccion",
      "responsable": "responsable",
      "empresa": "empresa",
      "frecuencia": "frecuencia",
      "pais": "pais"
    },
    {
      "fechac": "fechac",
      "horaC": "horaC",
      "cod": "cod",
      "name": "name",
      "direccion": "direccion",
      "responsable": "responsable",
      "empresa": "empresa",
      "frecuencia": "frecuencia",
      "pais": "pais"
    }
  ];

  cols: any[];
  items: any[];

  constructor(
    public dialogService: DialogService,
    public  ref: DynamicDialogRef
  ) { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Fec. de Creación', field: 'fechac' },
      { header: 'Hora de Creación', field: 'horaC' },
      { header: 'Cód', field: 'cod' },
      { header: 'Nombre del Comité', field: 'name' },
      { header: 'Direccón del Comité', field: 'direccion' },
      { header: 'Responsable', field: 'responsable' },
      { header: 'Empresa', field: 'empresa' },
      { header: 'Frecuencia', field: 'frecuencia' },
      { header: 'País', field: 'pais' },
    ];



    this.items = [
      {
        label: 'Editar Comité',
        icon: 'pi icon-edit',
        routerLink: "/manager/crear-comites"
      },
      {
        label: 'Ver histórico',
        icon: 'pi pi-clock',
        command: (event) => {
          this.showHistory();
        },
      },
      {
        label: 'Dar de baja al Comité',
        icon: 'pi pi-thumbs-down',
        command: (event) => {
          this.showConfirmation();
        }
      }
    ];
  }

  showHistory() {
    this.ref = this.dialogService.open(ComiteHistoryComponent, {
      header: 'Historial de cambios del Responsable en el Comité',
      width: '65%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: null
    });
  }

  showConfirmation() {
    this.displayModal = true;
  }

}
