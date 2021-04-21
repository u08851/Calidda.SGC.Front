import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { PaisServices } from 'src/app/services/pais.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';

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
    public messageService:MessageService
    ) {
   }

   showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: 'Success', detail: mensaje});
  }

  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: 'Warn', detail: mensaje});
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
        this.showWarn("Datos incorrectos");
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
            this.showSuccess("Se registró correctamente");
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
            this.showSuccess("Se editó correctamente");
          }
        )
      }


    } else {
      this.empresaForm.markAllAsTouched();
    }
  }


}
