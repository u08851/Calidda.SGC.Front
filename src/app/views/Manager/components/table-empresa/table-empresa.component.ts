import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { EmpresaServices } from 'src/app/services/empresa.service';
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

  term: string = "ALL0";
  page: number = 0;
  size: number = 5;
  displayModal:boolean;

  constructor(public dialogService: DialogService,
    private empresaServices:EmpresaServices) { }

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
      baseZIndex: 10000
    });
  }

  showEditEmpresa() {
    this.ref = this.dialogService.open(CrearEmpresaComponent, {
      header: 'Editar Empresa',
      width: '38%',
      contentStyle: { "max-height": "500px", "overflow": "initial" },
      baseZIndex: 10000
    });
  }

  getListEmpresa(){
    this.empresaServices.getListEmpresa(this.term,this.page,this.size).subscribe(
      (result: any) => {
        this.products2 = result.data
      }
    )
  }

  showConfirmation() {
    this.displayModal = true;
  }
}
