import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ComiteServices } from 'src/app/services/comite.service';
import { ComiteHistoryComponent } from '../../dialog/comite-history/comite-history.component';
import { DomSanitizer } from '@angular/platform-browser';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { ComiteBajaModel, ComiteCrudModel, ComiteRequestModel } from 'src/app/models/comite.model';
import { MessageService } from 'primeng/api';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoricoComiteServices } from 'src/app/services/historicocomite.service';
import { HistoricoComiteModel } from 'src/app/models/historicocomite.model';

@Component({
  selector: 'app-comite-table',
  templateUrl: './comite-table.component.html',
  styleUrls: ['./comite-table.component.scss']
})
export class ComiteTableComponent implements OnInit {
  displayModal: boolean;
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

  comites: ComiteCrudModel[];
  term: string = "ALL1";
  page: number = 0;
  size: number = 5;
  title: string;
  data: any;
  historicoComite= new HistoricoComiteModel();

  constructor(
    public dialogService: DialogService,
    public ref: DynamicDialogRef,
    private comiteServices: ComiteServices,
    private sanitizer: DomSanitizer,
    public messageService:MessageService,
    private activatedRoute: ActivatedRoute,
    private historicoComiteServices:HistoricoComiteServices,
    private _router: Router,


  ) {
    this.title = this.activatedRoute.snapshot.data.title;

    console.log(this.title);
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Success, detail: mensaje});
  }


  ngOnInit(): void {

    this.cols = [
      { header: 'Fec. de Creaci??n', field: 'fechac' },
      { header: 'Hora de Creaci??n', field: 'horaC' },
      { header: 'C??d', field: 'cod' },
      { header: 'Nombre del Comit??', field: 'name' },
      { header: 'Direcc??n del Comit??', field: 'direccion' },
      { header: 'Responsable', field: 'responsable' },
      { header: 'Empresa', field: 'empresa' },
      { header: 'Frecuencia', field: 'frecuencia' },
      { header: 'Pa??s', field: 'pais' },
    ];



    this.items = [
      {
        label: 'Editar Comit??',
        icon: 'pi icon-edit',
        command: (event) => {
          this.goEditComite();
        },
      },
      {
        label: 'Ver hist??rico',
        icon: 'pi pi-clock',
        command: (event) => {
          this.showHistory();
        },
      },
      {
        label: 'Dar de baja al Comit??',
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
      header: 'Historial de cambios del Responsable en el Comit??',
      width: '65%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: this.data
    });
  }

  showConfirmation() {
    this.displayModal = true;
  }


  getListComitexFiltros() {
    this.comiteServices.getListComitexFiltros(this.term, this.term, this.term, this.page, this.size).subscribe(
      (result: any) => {
        this.comites = result.data
      }
    )
  }

  getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  darBajaComite() {

    let data = this.data;
    var odata = new ComiteBajaModel();
    odata.comiteId=data.comiteId;

    this.comiteServices.darBajaComite(odata.comiteId).subscribe(
      (response: any) => {

        if(response.valid){
          this.showSuccess(AppConstants.MessageModal.DESAC_SUCCESS);
          this.refrescarLista();
          //this.displayModal = false;
          this.guardarHistoricoComite(data);
        }
      }
    )
  }

  guardarHistoricoComite(data)
  {

  this.historicoComite.comiteId=data.comiteId;
  this.historicoComite.descripcion="Se dio de baja al comite "+ data.nombre;
    this.historicoComiteServices.addHistoricoComite(this.historicoComite).subscribe(
      (response: any) => {
        if(response.valid){
          this.displayModal = false;
        }
      }
    )
  }

  refrescarLista() {
    this.getListComitexFiltros();
  }



  goEditComite() {
    this._router.navigate(['manager/crear-comites',this.data]);

  }
  toggleMenu(menu, event, rowData) {
    this.data = rowData;
    menu.toggle(event);
  }


}
