import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { PaisServices } from 'src/app/services/pais.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-crear-empresa',
  templateUrl: './crear-empresa.component.html',
  styleUrls: ['./crear-empresa.component.scss']
})
export class CrearEmpresaComponent implements OnInit {

  countries: any[];
  selectedCountry: {};
  empresa= new  EmpresaModel();
  submitted: boolean = false;
  empresaForm:FormGroup;
  valida:boolean=false;
  image:boolean=true;

  constructor(
    private fb :FormBuilder,
    private empresaServices:EmpresaServices,
    private paisServices:PaisServices,
    public config: DynamicDialogConfig,
    public messageService:MessageService,
    public ref: DynamicDialogRef,
    private sanitizer: DomSanitizer,
    ) {
   }

  getSantizeUrl(url : string) {
    if(url !== undefined){
      return this.sanitizer.bypassSecurityTrustUrl(url);
    }
  }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: AppConstants.TitleModal.Success, detail: mensaje});
  }

  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje});
  }

  crearFormulario(){
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
    this.selectedCountry = {paisId: this.config.data.paisId,nombre: this.config.data.paisDto.nombre,sigla: this.config.data.imagen}
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

  listarPais(){
    this.paisServices.getListPais().subscribe(
      (response: any) => {
        this.countries = response.data;
        if(this.config.data == null){
          this.selectedCountry = {paisId: this.countries[0].paisId,nombre: this.countries[0].nombre,sigla: this.countries[0].sigla}
        }
      }
    )
  }

  send() {
    this.submitted = true;

    if (this.empresaForm.valid) {

      if (!this.empresaForm.controls.nombre.valid ||
        !this.empresaForm.controls.paisId.valid) {
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
        return false;
      }

      if(this.valida){
        //CREATE
        let data = this.empresaForm.value;
        var odata = new EmpresaModel();
        odata.nombre = data.nombre;
        odata.estado = 1 ;
        odata.paisId= data.paisId.paisId;
        odata.empresaId  = 0;

        this.empresaServices.addEmpresa(odata).subscribe(
          (response: any) => {
            if(response.valid){
              this.showSuccess(AppConstants.MessageModal.CREATE_SUCCESS);
              this.ref.close(true);
            }
          }
        )
      }else{
        //UPDATE
        let data = this.empresaForm.value;
        var odata = new EmpresaModel();
        odata.nombre = data.nombre;
        odata.paisId = data.paisId.paisId;
        odata.estado = this.config.data.estado;
        odata.empresaId  = this.config.data.empresaId;

        this.empresaServices.updateEmpresa(odata).subscribe(
          (response: any) => {
            if(response.valid){
              this.showSuccess(AppConstants.MessageModal.EDIT_SUCCESS);
              this.ref.close(true);
            }
          }
        )
      }
    } else {
      this.empresaForm.markAllAsTouched();
      this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
    }
  }

}
