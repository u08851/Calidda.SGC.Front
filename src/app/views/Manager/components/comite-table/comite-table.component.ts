import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComiteBusquedaModel } from 'src/app/models/comite.model';
import { ComiteServices } from 'src/app/services/comite.service';
import { ComiteHistoryComponent } from '../../dialog/comite-history/comite-history.component';
import { DomSanitizer } from '@angular/platform-browser';

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

  comites:ComiteBusquedaModel[];
  term: string = "ALL1";
  page: number = 0;
  size: number = 5;

  constructor(
    public dialogService: DialogService,
    public  ref: DynamicDialogRef,
    private comiteServices:ComiteServices,
    private sanitizer: DomSanitizer,
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

    this.getListComitexFiltros();
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


  getListComitexFiltros(){
    this.comiteServices.getListComitexFiltros(this.term,this.term,this.term,this.page,this.size).subscribe(
      (result: any) => {
        this.comites = result.data
      }
    )
  }

  getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }



}
