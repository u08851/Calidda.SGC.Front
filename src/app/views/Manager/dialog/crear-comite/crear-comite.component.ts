import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, SelectItem } from 'primeng/api';
import { ComiteRequestModel } from 'src/app/models/comite.model';
import { UserModel } from 'src/app/models/user.model';
import { DirectionServices } from 'src/app/services/direccion.service';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { UserServices } from 'src/app/services/user.service';
import * as _ from 'lodash';
import { ComiteServices } from 'src/app/services/comite.service';
import { PaisServices } from 'src/app/services/pais.service';

interface Demo {
  name: string;
  code: string;
}

interface Demo2 {
  name2: string;
  code2: string;
}

@Component({
  selector: 'app-crear-comite',
  templateUrl: './crear-comite.component.html',
  styleUrls: ['./crear-comite.component.scss'],
})
export class CrearComiteComponent implements OnInit {

  activeIndex: number = 0;
  empresa: Demo[];
  selectedDemo1: Demo;

  selectedCountry: {};
  countries: any[];
  displayModal: boolean;

  //responsable comite
  selectedResponsableComite: any;
  filteredResponsableComite: any[];
  responsableComite: any[];
  filteredResponsableComites: any[];

  //Dirección
  selectedDireccion: string;
  direccion: any[];

  submitted: boolean = false;
  listaEmpresas: any[];
  listaDirecciones: any[];
  comiteForm: FormGroup;
  valida: boolean = false;
  usuarioSelected: any;
  filteredUsuarios: any[];
  listaUsuarios: UserModel[];
  resultado: any = [{}];
  correo = '';

  showWarn(mensaje: string) {
    this.messageService.add({ severity: 'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje });
  }

  showSuccess(mensaje: string) {
    this.messageService.add({ severity: 'success', summary: AppConstants.TitleModal.Success, detail: mensaje });
  }


  constructor(private fb: FormBuilder,
    private empresaServices: EmpresaServices,
    private comiteServices: ComiteServices,
    private direccionServices: DirectionServices,
    private messageService: MessageService,
    private usuariosServices: UserServices,
    private paisServices :PaisServices) {
  }

  ngOnInit(): void {

    this.valida = true;
    this.crearFormulario();
    this.listarEmpresa();
    this.listarDireccion();


  }


  get g() { return this.comiteForm.controls; }


  crearFormulario() {
    this.comiteForm = this.fb.group({

      nombre: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(70)]],
      empresaId: ['', [Validators.required, Validators.minLength(1)]],
      direccionId: ['', [Validators.required, Validators.minLength(1)]],
      correo: ['', [Validators.required, Validators.minLength(1)]],
      usuarioId: ['', [Validators.required, Validators.minLength(1)]],
      paisId: ['', [Validators.minLength(1)]],
    })

  }

  send() {
    this.submitted = true;

    if (!this.comiteForm.invalid) {

      if (!this.comiteForm.controls.nombre.valid ||
        !this.comiteForm.controls.empresaId.valid ||
        //!this.comiteForm.controls.paisId.valid ||
        !this.comiteForm.controls.usuarioId.valid ||
        !this.comiteForm.controls.correo.valid ||
        !this.comiteForm.controls.direccionId.valid) {
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
        return false;
      }

      if (this.valida) {
        //CREATE
        let data = this.comiteForm.value;
        var odata = new ComiteRequestModel();
        odata.nombre = data.nombre;
        odata.estado = 1;
        odata.direccionId = data.direccionId.direccionId;
        odata.empresaId = data.empresaId.empresaId;
        odata.correo=data.correo;
        odata.usuarioId=data.usuarioId;
        odata.paisId=2;
        odata.codigo="";


        this.comiteServices.addComite(odata).subscribe(
          (response: any) => {
            //this.showSuccess(AppConstants.MessageModal.CREATE_SUCCESS);
            this.showModalDialog();
          }
        )
      } else {
        //UPDATE
        let data = this.comiteForm.value;
        var odata = new ComiteRequestModel();
        odata.nombre = data.nombre;
        odata.paisId = data.paisId.paisId;


        this.empresaServices.updateEmpresa(odata).subscribe(
          (response: any) => {
            this.showSuccess(AppConstants.MessageModal.EDIT_SUCCESS);

          }
        )
      }
    }
    else {
      this.comiteForm.markAllAsTouched();
      this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
    }
  }

  listarEmpresa() {
    this.empresaServices.getListEmpresa("ALL1", 0, 0).subscribe(
      (response: any) => {
        this.listaEmpresas = response.data
      }
    )
  }

  listarDireccion() {
    this.direccionServices.getListDirection("ALL1", 0, 0).subscribe(
      (response: any) => {
        this.listaDirecciones = response.data
      }
    )
  }

  listarPaisxEmpresa(idEmpresa:number){
    this.paisServices.getPaisByEmpresa(idEmpresa).subscribe(
      (response: any) => {

        this.countries = response;
        this.selectedCountry = {paisId: this.countries[0].paisId,nombre:  this.countries[0].nombre,sigla:this.countries[0].sigla}
      }
    )
  }

  // dialog crear
  showModalDialog() {
    this.displayModal = true;
  }

  changeEmpresa(event): void {

    this.resultado = [];
    this.comiteForm.patchValue({ correo: '' })
    this.usuarioSelected={};
    let idEmpresa = event.value.empresaId;

    this.listarPaisxEmpresa(idEmpresa);

    this.usuariosServices.getUsuariosByEmpresa(idEmpresa).subscribe(
      (response: any) => {
        this.listaUsuarios = response.data;
      }
    )

  }

  filtered(event) {

    this.filteredUsuarios = [];
    this.filteredUsuarios = _.map(this.listaUsuarios, p => {
      if (p.personaDto.nombre.includes(_.toUpper(event.query))) {
        return p;
      }
    });


    this.resultado = [];
    _.forEach(this.filteredUsuarios, (val: any) => {
      if (val !=null) {
        let ape = val.personaDto.apePaterno != null ? val.personaDto.apePaterno : '';
        //ape=ape +" " +val.personaDto.apeMaterno != null ? val.personaDto.apeMaterno : '';
        this.resultado.push({
          'label': val.personaDto.nombre + ' ' + ape,
          'value': val.usuarioId,
          'email': val.correo

        });
        this.comiteForm.patchValue({ usuarioId: val.usuarioId });
      }
    });
    this.filteredUsuarios = this.resultado;
  }

  onSelectUsuario(event) {

    this.correo = event.email;
    this.comiteForm.patchValue({ correo: event.email });
    this.comiteForm.patchValue({ usuarioId: event.value });

  }

}
