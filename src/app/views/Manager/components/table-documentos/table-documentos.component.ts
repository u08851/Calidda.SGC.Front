import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfidencialDocumentoRequest } from 'src/app/models/confidoc.model';
import { ConfidencialDocumentoServices } from 'src/app/services/confidoc.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { ImportDocumentComponent } from '../../dialog/import-document/import-document.component';

@Component({
  selector: 'app-table-documentos',
  templateUrl: './table-documentos.component.html',
  styleUrls: ['./table-documentos.component.scss'],
})
export class TableDocumentosComponent implements OnInit {

  displayMaximizable: boolean;
  displayModal: boolean;
  checked: boolean;
  ref: DynamicDialogRef;
  textFilter: string = "";
  textFilter1: string = "";
  textFilter2: string = "";
  textFilter3: string = "";
  term: string = "ALL1";
  term1: string = "ALL1";
  term2: string = "ALL1";
  term3: string = "ALL1";
  page: number = 0;
  size: number = 5;
  formForm:FormGroup;
  es: any;
  products2 = [];
  cols2: any[];
  tipo: any[];
  selectedTipo: string;
  document: string;
  dataDelete: any;

  constructor(
    public dialogService: DialogService,
    private confidencialDocumentoServices:ConfidencialDocumentoServices,
    private fb :FormBuilder,
    public messageService:MessageService,
  ) {
    this.tipo = [
      { name: 'Miembro', code: 6 },
      { name: 'Invitados', code: 7 }
    ];
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.getListConfidencialDocumento();

    this.es = {
      firstDayOfWeek: 1,
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
      ],
      today: 'Hoy',
      clear: 'Borrar',
    };

    this.cols2 = [
      { header: 'Fecha de carga', field: 'fecha' },
      { header: 'Hora de carga', field: 'hora' },
      { header: 'Nombre', field: 'nombre' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Estado', field: 'estado' },
    ];
  }

  showImportDocument() {
    this.ref = this.dialogService.open(ImportDocumentComponent, {
      header: 'Importar Documento',
      width: '50%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  showMaximizableDialog(Data) {
    this.document = Data.ruta;
    this.displayMaximizable = true;
  }

  showConfirmation(Data) {
    this.displayModal = true;
    this.dataDelete = Data;
  }

  delete(){
    let data = this.dataDelete;
    var odata = new ConfidencialDocumentoRequest();
    odata.documentoId = data.documentoId;
    odata.estado = 2;
    odata.fechaMdificacion = "2021-04-29T01:18:53.396Z";
    odata.fechaRegistro = data.fechaRegistro;
    odata.imagen64 = null;
    odata.nombre = data.nombre;
    odata.tipo = data.tipo1;
    odata.userId = data.userId;
    odata.userIdModified = 6;

    this.confidencialDocumentoServices.updateConfidencialDocumento(odata).subscribe(
      (result: any) => {
        this.messageService.add(
          {
            severity:'success',
            summary: AppConstants.TitleModal.Success,
            detail: AppConstants.MessageModal.DELETE_SUCCESS
          }
        );
        this.getListConfidencialDocumento();
        this.displayModal = false;
      }
    )
    
  }

  getListConfidencialDocumento(){
    this.confidencialDocumentoServices.getListConfidencialDocumento(this.term,this.term1,this.term2,this.term3,this.page,this.size).subscribe(
      (result: any) => {
        this.products2 = result.data
      }
    )
  }

  crearFormulario(){
    this.formForm = this.fb.group({
      nombre: [],
      tipo: [],
      desde: [],
      hasta: [],
    });
  }

  getDateList(value:string){
    return value.substr(0,10);
  }

  getHourList(value:string){
    return value.substr(0,5);
  }

  updateStatus(data){
    var odata = new ConfidencialDocumentoRequest();
    odata.documentoId = data.documentoId;
    odata.estado = data.estado == true ? 1 : 0;
    odata.fechaMdificacion = "2021-04-29T01:18:53.396Z";
    odata.fechaRegistro = data.fechaRegistro;
    odata.imagen64 = null;
    odata.nombre = data.nombre;
    odata.tipo = data.tipo1;
    odata.userId = data.userId;
    odata.userIdModified = 10;

    this.confidencialDocumentoServices.updateConfidencialDocumento(odata).subscribe(
      (result: any) => {
        if(!status){
          this.showSuccess(AppConstants.MessageModal.DESAC_SUCCESS);
        }else{
          this.showSuccess(AppConstants.MessageModal.AC_SUCCESS);
        }
        this.getListConfidencialDocumento();
      }
    )
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Success, detail: mensaje});
  }

}
