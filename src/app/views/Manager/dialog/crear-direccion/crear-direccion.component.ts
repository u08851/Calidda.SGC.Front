import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
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


  constructor(
    private fb :FormBuilder,
    private directionServices:DirectionServices,
    ) {

   }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario()
  {
    this.direccionForm = this.fb.group({
      nombre: ['', [Validators.required,  Validators.minLength(1)]],
    });
  }

  get g() { return this.direccionForm.controls; }


  send() {
    this.submitted = true;

    if (this.direccionForm.valid) {

      if (!this.direccionForm.controls.nombre.valid) {
        alert("error");
        return false;
      }

      if(1 > 0){
        //CREATE
        let data = this.direccionForm.value;
        var odata = new DireccionModel();
        odata.nombre = data.nombre;
        odata.estado = 1 ;
        odata.direccionId  = 0;

        this.directionServices.addDirection(odata).subscribe(
          (response: any) => {
          }
        )
      }else{
        //UPDATE
        let data = this.direccionForm.value;
        var odata = new DireccionModel();
        odata.nombre = data.nombre;
        odata.estado = 1 ;
        odata.direccionId  = 0;

        this.directionServices.updateDirection(odata).subscribe(
          (response: any) => {

          }
        )
      }


    } else {
      this.direccionForm.markAllAsTouched();
    }
  }

}
