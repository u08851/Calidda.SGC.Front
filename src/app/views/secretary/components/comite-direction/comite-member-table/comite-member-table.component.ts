import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AssistantSecretaryComponent } from '../../../dialog/assistant-secretary/assistant-secretary.component';
import { StateDocumentComponent } from '../../../dialog/state-document/state-document.component';
import { SendDocumentComponent } from '../../../dialog/send-document/send-document.component';

@Component({
  selector: 'app-comite-member-table',
  templateUrl: './comite-member-table.component.html',
  styleUrls: ['./comite-member-table.component.scss']
})
export class ComiteMemberTableComponent implements OnInit {

  products: any[] = [
    {
      "name": "fechac",
      "email": "Rosario@gmail.com",
      "comite": "name",
      "cel": "direccion",
      "status": "responsable",
      "facComite": "empresa"
    },
    {
      "name": "fechac",
      "email": "Rosario@gmail.com",
      "comite": "name",
      "cel": "direccion",
      "status": "responsable",
      "facComite": "empresa"
    },
  ];

  cols: any[];
  checked1: boolean = false;

  pdf: any[] = [
    {
      "doc": "Documents"
    }
  ];
  cols2: any[];

  constructor(public dialogService: DialogService,
    public  ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Nombres y apellidos', field: 'name' },
      { header: 'Correo electrónico', field: 'email' },
      { header: 'C. comité', field: 'comite' },
      { header: 'Celular', field: 'cel' },
      { header: 'Estado', field: 'status' },
      { header: 'Fac. en el comité', field: 'facComite' }
    ];

    this.cols2 = [
      { header: 'Listar de Documentos', field: 'doc' },
    ];
  }


  showAddAssistantSecretary() {
    this.ref = this.dialogService.open(AssistantSecretaryComponent, {
      header: 'Nuevo asistente de secretaria',
      width: '65%',
      contentStyle: { "max-height": "500px", "overflow": "inherit" },
      baseZIndex: 10000,
      data: null
    });
  }

  showStateDocument() {
    this.ref = this.dialogService.open(StateDocumentComponent, {
      header: 'Estado de documento',
      width: '65%',
      contentStyle: { "max-height": "500px", "overflow": "inherit" },
      baseZIndex: 10000,
      data: null
    });
  }

  showSendDocument(){
    this.ref = this.dialogService.open(SendDocumentComponent, {
      header: 'Enviar el documento "Documents',
      width: '50%',
      contentStyle: { "max-height": "500px", "overflow": "inherit" },
      baseZIndex: 10000,
      data: null
    })
  }
}
