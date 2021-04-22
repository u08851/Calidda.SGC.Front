import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { PaisServices } from 'src/app/services/pais.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AppConstants } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.scss']
})
export class CrearEmpresaComponent implements OnInit {

  countries: any[];
  selectedCountry: string;

  empresa= new  EmpresaModel();
  submitted: boolean = false;
  empresaForm:FormGroup;
  valida:boolean=false;

  constructor(
    private fb :FormBuilder,
    private empresaServices:EmpresaServices,
    private paisServices:PaisServices,
    public config: DynamicDialogConfig,
    public messageService:MessageService,
    public ref: DynamicDialogRef
    ) {
   }

   showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Success, detail: mensaje});
  }

  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje});
  }



   crearFormulario()
   {
     this.empresaForm = this.fb.group({
       nombre: ['', [Validators.required,  Validators.minLength(1)]],
       paisId: ['', [Validators.required,  Validators.minLength(1)]],
     });
   }

   UpdateFormulario(){
    this.empresaForm.patchValue({
      nombre: this.config.data.nombre,
      paisId: this.config.data.paisId
    })
  }

   get g() { return this.empresaForm.controls; }

  ngOnInit(): void {
    this.listarPais();
    this.crearFormulario();
    if(this.config.data == null){
      this.valida = true;
    }else{
      this.valida = false;
      this.UpdateFormulario();
    }
  }

  listarPais()
  {
    this.paisServices.getListPais().subscribe(
      (response: any) => {
        this.countries = response.data;
      }
    )
  }

  send() {
    this.submitted = true;

    if (this.empresaForm.valid) {

      if (!this.empresaForm.controls.nombre.valid) {
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
        return false;
      }

      if(1 > 0){
        //CREATE
        let data = this.empresaForm.value;
        var odata = new EmpresaModel();
        odata.nombre = data.nombre;
        odata.estado = 1 ;
        odata.paisId=data.paisId;
        odata.empresaId  = 0;

        this.empresaServices.addEmpresa(odata).subscribe(
          (response: any) => {
            this.showSuccess(AppConstants.MessageModal.CREATE_SUCCESS);
            this.ref.close(true);
          }
        )
      }else{
        //UPDATE
        let data = this.empresaForm.value;
        var odata = new EmpresaModel();
        odata.nombre = data.nombre;
        odata.paisId=data.paisId;
        odata.estado = 1 ;
        odata.empresaId  = 0;

        this.empresaServices.updateEmpresa(odata).subscribe(
          (response: any) => {
            this.showSuccess(AppConstants.MessageModal.EDIT_SUCCESS);
            this.ref.close(true);
          }
        )
      }


    } else {
      this.empresaForm.markAllAsTouched();
      this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
    }
  }


}
