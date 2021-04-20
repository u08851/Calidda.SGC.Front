import { PieChartDataItem } from '@amcharts/amcharts4/charts';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaModel } from 'src/app/models/empresa.model';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { PaisServices } from 'src/app/services/pais.service';

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

  constructor(
    private fb :FormBuilder,
    private empresaServices:EmpresaServices,
    private paisServices:PaisServices
    ) {
   }

   crearFormulario()
   {
     this.empresaForm = this.fb.group({
       nombre: ['', [Validators.required,  Validators.minLength(1)]],
       paisId: ['', [Validators.required,  Validators.minLength(1)]],
     });
   }

   get g() { return this.empresaForm.controls; }

  ngOnInit(): void {

    this.crearFormulario();
    this.listarPais();

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

          }
        )
      }


    } else {
      this.empresaForm.markAllAsTouched();
    }
  }


}
