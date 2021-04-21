import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DireccionModel } from 'src/app/models/direccion.model';
import { DirectionServices } from 'src/app/services/direccion.service';
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
    public  ref: DynamicDialogRef
    ) {}

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
      data:null
    });

    this.ref.onClose.subscribe( data => {
      console.log(data);
      if (data) {
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
    })
  }

  showEditDireccion(data) {
    this.ref = this.dialogService.open(CrearDireccionComponent, {
      header: 'Editar Dirección de Comité',
      width: '40%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data:data
    });
  }


  getListDirection(){
    this.directionServices.getListDirection(this.term,this.page,this.size).subscribe(
      (result: any) => {
        this.products = result.data
      }
    )
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
        alert("elimino");
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
        this.displayModal = false;
      }
    )
  }

  onKeydown(event) {
    if (event.key === "Enter") {
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
  }

}
