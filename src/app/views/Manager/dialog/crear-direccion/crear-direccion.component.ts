import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import {  DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DireccionModel } from 'src/app/models/direccion.model';
import { DirectionServices } from 'src/app/services/direccion.service';

@Component({
  selector: 'app-crear-direccion',
  templateUrl: './crear-direccion.component.html',
  styleUrls: ['./crear-direccion.component.scss']
})
export class CrearDireccionComponent implements OnInit {

  direccion= new  DireccionModel();
  submitted: boolean = false;
  direccionForm:FormGroup;
  valida:boolean=false;
  type:string;

  constructor(
    private fb :FormBuilder,
    private directionServices:DirectionServices,
    public config: DynamicDialogConfig,
    public messageService:MessageService,
    public ref: DynamicDialogRef
    ) {
   }

  showSuccess(mensaje :string) {
    this.messageService.add({severity:'success', summary: 'Exitoso', detail: mensaje});
  }

  showWarn(mensaje :string) {
    this.messageService.add({severity:'warn', summary: 'Advertencia', detail: mensaje});
  }


  ngOnInit(): void {
    this.type = this.config.data.type;
    this.crearFormulario();
    if(this.config.data.data == null){
      this.valida = true;
    }else{
      this.valida = false;
      this.UpdateFormulario();
    }
  }

  crearFormulario()
  {
    this.direccionForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  UpdateFormulario(){
    this.direccionForm.patchValue({
      nombre: this.config.data.data.nombre
    })
  }

  get g() { return this.direccionForm.controls; }


  send() {
    this.submitted = true;

    if (this.direccionForm.valid) {
      if (!this.direccionForm.controls.nombre.valid) {
        this.showWarn("Datos incorrectos");
        return false;
      }

      if(this.valida){
        //CREATE
        let data = this.direccionForm.value;
        var odata = new DireccionModel();
        odata.nombre = data.nombre;
        odata.estado = 1 ;
        odata.direccionId  = 0;

        this.directionServices.addDirection(odata).subscribe(
          (response: any) => {
            this.showSuccess("Se registró correctamente");
            this.ref.close(true);
          }
        )
      }else{
        //UPDATE
        let data = this.direccionForm.value;
        var odata = new DireccionModel();
        odata.nombre = data.nombre;
        odata.estado = this.config.data.data.estado;
        odata.direccionId  = this.config.data.data.direccionId;

        this.directionServices.updateDirection(odata).subscribe(
          (response: any) => {
            this.showSuccess("Se editó correctamente");
            this.ref.close(true);
          }
        )
      }

    } else {
      this.direccionForm.markAllAsTouched();
    }

  }




}

