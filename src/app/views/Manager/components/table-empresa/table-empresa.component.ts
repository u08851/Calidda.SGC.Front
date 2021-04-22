import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { CrearEmpresaComponent } from '../../dialog/crear-empresa/crear-empresa.component';

@Component({
  selector: 'app-table-empresa',
  templateUrl: './table-empresa.component.html',
  styleUrls: ['./table-empresa.component.scss']
})
export class TableEmpresaComponent implements OnInit {

  //products2: any[];

  products2: EmpresaModel[];

  cols2: any[];
  ref: DynamicDialogRef;
  dataDelete: any;
  term: string = "ALL0";
  page: number = 0;
  size: number = 5;
  displayModal:boolean;
  textFilter: string = "";

  constructor(
    public dialogService: DialogService,
    private empresaServices:EmpresaServices,
    public messageService:MessageService,
  ) { }

  ngOnInit(): void {
    this.cols2 = [
      { header: 'Empresa', field: 'empresa' },
      { header: 'País', field: 'pais' },
    ];
    this.getListEmpresa();
  }

  showCreateEmpresa() {
    this.ref = this.dialogService.open(CrearEmpresaComponent, {
      header: 'Creación nueva Empresa',
      width: '38%',
      contentStyle: { "max-height": "500px", "overflow": "initial" },
      baseZIndex: 10000,
      data:null
    });

    this.ref.onClose.subscribe( data => {
      if (data) {
        this.refrescarLista();
      }
    })

  }

  showEditEmpresa(data) {
    this.ref = this.dialogService.open(CrearEmpresaComponent, {
      header: 'Editar Empresa',
      width: '38%',
      contentStyle: { "max-height": "500px", "overflow": "initial" },
      baseZIndex: 10000,
      data:data
    });

    this.ref.onClose.subscribe( data => {
      if (data) {
        this.refrescarLista();
      }
    })
  }

  getListEmpresa(){
    this.empresaServices.getListEmpresa(this.term,this.page,this.size).subscribe(
      (result: any) => {
        this.products2 = result.data
      }
    )
  }

  showConfirmation(data) {
    this.displayModal = true;
    this.dataDelete = data;
  }

  delete(){
    let data = this.dataDelete;
    var odata = new EmpresaModel();
    odata.nombre = data.nombre;
    odata.paisId=data.paisId;
    odata.estado = 2;
    odata.empresaId  = data.empresaId;

    this.empresaServices.updateEmpresa(odata).subscribe(
      (response: any) => {
        this.messageService.add(
          {
            severity:'success',
            summary: AppConstants.TitleModal.Success,
            detail: AppConstants.MessageModal.DELETE_SUCCESS
          }
        );
        this.refrescarLista();
        this.displayModal = false;
      }
    )
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      this.refrescarLista();
    }
  }

  refrescarLista(){
    if(this.textFilter.length == 0){
      this.empresaServices.getListEmpresa(this.term,this.page,this.size).subscribe(
        (result: any) => {
          this.products2 = result.data
        }
      )
    }else{
      this.empresaServices.getListEmpresa(this.textFilter,this.page,this.size).subscribe(
        (result: any) => {
          this.products2 = result.data
        }
      )
    }
  }

}
