import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
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
  ref: DynamicDialogRef;

  constructor(
    public dialogService: DialogService,
    private directionServices: DirectionServices
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


  getListDirection(){
    this.directionServices.getListDirection(this.term,this.page,this.size).subscribe(
      (result: any) => {
        this.products = result.data

        console.log(this.products);
      }
    )
  }

}
