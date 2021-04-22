import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DireccionModel } from 'src/app/models/direccion.model';
import { DirectionServices } from 'src/app/services/direccion.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { CrearDireccionComponent } from '../../dialog/crear-direccion/crear-direccion.component';

@Component({
  selector: 'app-table-direccion-comite',
  templateUrl: './table-direccion-comite.component.html',
  styleUrls: ['./table-direccion-comite.component.scss'],
})
export class TableDireccionComiteComponent implements OnInit {

  checked: boolean = true;
  products: DireccionModel[];
  term: string = "ALL0";
  page: number = 0;
  size: number = 5;
  cols: any[];
  displayModal: boolean;
  textFilter: string = "";
  dataDelete: any;

   confi: DynamicDialogConfig;
  constructor(
    public dialogService: DialogService,
    private directionServices: DirectionServices,
    public  ref: DynamicDialogRef,
    public messageService:MessageService
    ) {}


    showSuccess(mensaje :string) {
      this.messageService.add({severity:'success', summary: 'Exitoso', detail: mensaje});
    }

  ngOnInit(): void {
    this.cols = [
      { header: 'Dirección del comité', field: 'direccionComite' }
    ];
    this.getListDirection();
  }


  showCreateDireccion() {
    this.ref = this.dialogService.open(CrearDireccionComponent, {
      header: 'Creación de nueva Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: null
    });

    this.ref.onClose.subscribe( data => {
      if (data) {
        this.refrescarLista();
      }
    })
  }

  showEditDireccion(data) {
    this.ref = this.dialogService.open(CrearDireccionComponent, {
      header: 'Editar Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: data
    });

    this.ref.onClose.subscribe( data => {
      if (data) {
        this.refrescarLista();
      }
    })

  }


  getListDirection(){
    this.directionServices.getListDirection(this.term,this.page,this.size).subscribe(
      (result: any) => {
        this.products = result.data
      }
    )
  }


  refrescarLista()
  {
    if(this.textFilter.length == 0){
      this.directionServices.getListDirection(this.term,this.page,this.size).subscribe(
        (result: any) => {
          this.products = result.data
        }
      )
    }else{
      this.directionServices.getListDirection(this.textFilter,this.page,this.size).subscribe(
        (result: any) => {
          this.products = result.data
        }
      )
    }
  }

  showConfirmation(data) {
    this.displayModal = true;
    this.dataDelete = data;
  }

  delete(){
    let data = this.dataDelete;
    var odata = new DireccionModel();
    odata.nombre = data.nombre;
    odata.estado = 2;
    odata.direccionId  = data.direccionId;

    this.directionServices.updateDirection(odata).subscribe(
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

}
