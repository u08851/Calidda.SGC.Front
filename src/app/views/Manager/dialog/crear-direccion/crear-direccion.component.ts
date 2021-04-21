import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
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

  constructor(
    private fb :FormBuilder,
    private directionServices:DirectionServices,
    public config: DynamicDialogConfig,
    ) {

   }

  ngOnInit(): void {
    this.crearFormulario();
    if(this.config.data == null){
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
      nombre: this.config.data.nombre
    })
  }

  get g() { return this.direccionForm.controls; }


  send() {
    this.submitted = true;

    if (this.direccionForm.valid) {
      if (!this.direccionForm.controls.nombre.valid) {
        alert("error");
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
            alert("guardo");
          }
        )
      }else{
        //UPDATE
        let data = this.direccionForm.value;
        var odata = new DireccionModel();
        odata.nombre = data.nombre;
        odata.estado = this.config.data.estado;
        odata.direccionId  = this.config.data.direccionId;

        this.directionServices.updateDirection(odata).subscribe(
          (response: any) => {
            alert("edito");
          }
        )
      }

    } else {
      this.direccionForm.markAllAsTouched();
    }
    
  }

}

