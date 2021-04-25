import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserModel, UserRequestModel } from 'src/app/models/user.model';
import { CreateUserComponent } from '../../dialog/create-user/create-user.component';
import { UserServices } from 'src/app/services/user.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-table-usuarios',
  templateUrl: './table-usuarios.component.html',
  styleUrls: ['./table-usuarios.component.scss'],
})
export class TableUsuariosComponent implements OnInit {

  products: UserModel[];

  cols: any[];
  items: any[];
  checked: boolean;
  ref: DynamicDialogRef;
  textFilter: string = "";
  textFilter1: string = "";
  textFilter2: string = "";
  term: string = "ALL1";
  term1: string = "ALL1";
  term2: string = "ALL1";
  page: number = 0;
  size: number = 5;

  constructor(
    public dialogService: DialogService,
    private userServices:UserServices,
    public messageService:MessageService,
  ) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Nombre y apellidos', field: 'nombre' },
      { header: 'Correo eletrónico', field: 'correo' },
      { header: 'Rol', field: 'rol' },
      { header: 'Empresa', field: 'empresa' },
      { header: 'Estado', field: 'estado' }
    ];

    this.items = [
      {
        label: 'Editar usuario',
        icon: 'pi pi-user-edit',
      },
      {
        label: 'Eliminar usuario',
        icon: 'pi pi-trash',
      },
    ];
    this.getListUser();
  }

  showCreateUser() {
    this.ref = this.dialogService.open(CreateUserComponent, {
      header: 'Creación de nuevo Usuario',
      width: '33%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data:null
    });
  }

  showEditeUser(data) {
    this.ref = this.dialogService.open(CreateUserComponent, {
      header: 'Editar Usuario',
      width: '33%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data:data
    });
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Success, detail: mensaje});
  }

  updateStatus(data){

    var odata = new UserRequestModel();
    var status: number = data.estado == 0 || data.estado == true ? 1:0;
    odata.nombre = data.personaDto.nombre;
    odata.estado = status;
    odata.celular  = data.personaDto.celular;
    odata.correo = data.correo;
    odata.empresaId = data.personaDto.empresaId;
    odata.personaId = data.personaDto.personaId;
    odata.usuarioId = data.usuarioId;

    this.userServices.editUser(odata).subscribe(
      (result: any) => {
        this.showSuccess(AppConstants.MessageModal.DESAC_SUCCESS);
        this.getListUser();
      }
    )
  }

  onKeydown(event) {
    if (event.key === "Enter") {
      if(this.textFilter.length == 0 && this.textFilter1.length == 0 && this.textFilter2.length == 0){
        this.userServices.getListUser(this.term,this.term1,this.term2,this.page,this.size).subscribe(
          (result: any) => {
            this.products = result.data
          }
        )
      }else{
        if(this.textFilter.length == 0 && this.textFilter1.length == 0){
          this.userServices.getListUser(this.term,this.term1,this.textFilter2,this.page,this.size).subscribe(
            (result: any) => {
              this.products = result.data
            }
          )
        }else{
          if(this.textFilter2.length == 0 && this.textFilter1.length == 0){
            this.userServices.getListUser(this.textFilter,this.term1,this.term2,this.page,this.size).subscribe(
              (result: any) => {
                this.products = result.data
              }
            )
          }else{
            if(this.textFilter2.length == 0 && this.textFilter.length == 0){
              this.userServices.getListUser(this.term,this.textFilter1,this.term2,this.page,this.size).subscribe(
                (result: any) => {
                  this.products = result.data
                }
              )
            }else{
              if(this.textFilter.length == 0){
                this.userServices.getListUser(this.term,this.textFilter1,this.textFilter2,this.page,this.size).subscribe(
                  (result: any) => {
                    this.products = result.data
                  }
                )
              }else{
                if(this.textFilter2.length == 0){
                  this.userServices.getListUser(this.textFilter,this.textFilter1,this.term2,this.page,this.size).subscribe(
                    (result: any) => {
                      this.products = result.data
                    }
                  )
                }else{
                  if(this.textFilter1.length == 0){
                    this.userServices.getListUser(this.textFilter,this.term1,this.textFilter2,this.page,this.size).subscribe(
                      (result: any) => {
                        this.products = result.data
                      }
                    )
                  }
                }
              }
            }
          }
        }
      }      
    }
  }

  getListUser(){
    this.userServices.getListUser(this.term,this.term1,this.term2,this.page,this.size).subscribe(
      (result: any) => {
        this.products = result.data
      }
    )
  }

}
