import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ComiteServices } from 'src/app/services/comite.service';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { PaisServices } from 'src/app/services/pais.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';
import { BarEmpresaDireccionComponent } from '../../components/graficos/bar-empresa-direccion/bar-empresa-direccion.component';
import { BarPaisComponent } from '../../components/graficos/bar-pais/bar-pais.component';
import { BarTodosComponent } from '../../components/graficos/bar-todos/bar-todos.component';
import { DonutComponent } from '../../components/graficos/donut/donut.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {
  // Calendar
  date3: Date;
  date4: Date;
  textFilterDE:string;
  es: any;
  val1: string;
  val2: string;
  val3: string;
  val4: number;
  message:string="Reporte de 6 meses anteriores";
  val11: string;
  val22: string;
  val33: string;
  val44: string;
  val55: string;
  val66: string;

  selectedCountry: any;
  countries: any[];

  selectedCity1: any;
  cities: any[];

  textFilter0: any = "";
  textFilter2: any = "";
  textFilter3: any = "";

  @ViewChild(BarTodosComponent) barTodos: BarTodosComponent;
  @ViewChild(BarEmpresaDireccionComponent) barEmpresaDireccion: BarEmpresaDireccionComponent;
  @ViewChild(BarPaisComponent) barPais: BarPaisComponent;
  @ViewChild(DonutComponent) donuts: DonutComponent;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private comiteServices:ComiteServices,
    private paisServices:PaisServices,
    private empresaServices:EmpresaServices,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
      ],
      dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
      dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
      monthNames: [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ],
      monthNamesShort: [
        'ene',
        'feb',
        'mar',
        'abr',
        'may',
        'jun',
        'jul',
        'ago',
        'sep',
        'oct',
        'nov',
        'dic',
      ],
      today: 'Hoy',
      clear: 'Borrar',
    };

    // dropdown
    this.listarPais();
    this.getListCompany();
    this.getListModo(0);
  }


  goToTableActive(){
    this.router.navigateByUrl('/manager/todos-table');
  }

  goToTableActivePais(){
    this.router.navigateByUrl('/manager/pais-table');
  }

  goToTableActiveEmpresa(){
    this.router.navigateByUrl('/manager/empresa-direccion-table');
  }

  goToTableActiveSecretaria(){
    this.router.navigateByUrl('/manager/secrearia-table');
  }

  goToTableActiveFrecuencia(){
    this.router.navigateByUrl('/manager/frecuencia-table');
  }

  listarPais(){
    this.paisServices.getListPais().subscribe(
      (response: any) => {
        this.countries = response.data;
      }
    )
  }

  getListCompany(){
    this.empresaServices.getListEmpresa("ALL1",0,0).subscribe(
      (response: any) => {
        this.cities = response.data
      }
    )
  }

  getListModo(id:number){
    var evento = undefined;
    if(id != 4){
  
      let sinR = [];
      var temp = {};
      var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
      var result: any;
  
      if (evento === "Enter" || evento === "click"|| evento === undefined) {
        if(
          this.datePipe.transform(new Date(), 'dd-MM-yyyy') == null ||
          this.datePipe.transform(new Date(), 'dd-MM-yyyy') == null
        ){
          this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
          return false;
        }else{
          this.comiteServices.getListComite(
            0,
            this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
            this.datePipe.transform(new Date(), 'dd-MM-yyyy'),
            null,
            null).subscribe(
            (response) =>{
              this.message = "Reporte de 6 meses anteriores"
              sinR = response.data;
              
              try{
                sinR.forEach(function (a) {
                  temp[a.code] = temp[a.code] || { category: a.code };
                  temp[a.code][groups[a.nombre]] = a.count;
                });
                result = Object.keys(temp).map(function (k) { return temp[k]; });
                  
                let val1 = 0;
                let val2 = 0;
                let val3 = 0;
    
                for(let g = 0; g < result.length; g++){
                  val1 += result[g].value1
                  val2 += result[g].value2
                  val3 += result[g].value3
                }
    
                this.val1 = val1.toString();
                this.val2 = val2.toString();
                this.val3 = val3.toString();
                this.val4 = val1 + val2+ val3;
                
                this.barTodos.dataReceived(sinR);
              }catch{
                this.val1 = "0";
                this.val2 = "0";
                this.val3 = "0";
                this.val4 = 0;
                this.barTodos.dataReceived("");
              }
              
            }
          )
        }
      }
    }
  }

  onTabClicked(event: any) {
    this.getListModo(event.index);
 }

  onKeydown(event,id:any) {
    var evento = "";
    try{
      evento = event.originalEvent.type
    }
    catch{
      evento = event.key
    }
    if(id == 0){
  
      let sinR = [];
      var temp = {};
      var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
      var result: any;
  
      if (evento === "Enter" || evento === "click"|| evento === undefined) {
        if(
          this.datePipe.transform(this.date3, 'dd-MM-yyyy') == null ||
          this.datePipe.transform(this.date4, 'dd-MM-yyyy') == null
        ){
          this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
          return false;
        }else{
          this.comiteServices.getListComite(
            0,
            this.datePipe.transform(this.date3, 'dd-MM-yyyy'),
            this.datePipe.transform(this.date4, 'dd-MM-yyyy'),
            null,
            null).subscribe(
            (response) =>{
              this.message = "Reporte de 6 meses anteriores"
              sinR = response.data;
              
              try{
                sinR.forEach(function (a) {
                  temp[a.code] = temp[a.code] || { category: a.code };
                  temp[a.code][groups[a.nombre]] = a.count;
                });
                result = Object.keys(temp).map(function (k) { return temp[k]; });
                  
                let val1 = 0;
                let val2 = 0;
                let val3 = 0;
    
                for(let g = 0; g < result.length; g++){
                  val1 += result[g].value1
                  val2 += result[g].value2
                  val3 += result[g].value3
                }
    
                this.val1 = val1.toString();
                this.val2 = val2.toString();
                this.val3 = val3.toString();
                this.val4 = val1 + val2+ val3;
                
                this.barTodos.dataReceived(sinR);
              }catch{
                this.val1 = "0";
                this.val2 = "0";
                this.val3 = "0";
                this.val4 = 0;
                this.barTodos.dataReceived("");
              }
              
            }
          )
        }
      }
    }
    if(id == 1){
  
      let sinR = [];
      var temp = {};
      var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
      var result: any;
  
      if (evento === "Enter" || evento === "click"|| evento === undefined) {
        if(
          this.datePipe.transform(this.date3, 'dd-MM-yyyy') == null ||
          this.datePipe.transform(this.date4, 'dd-MM-yyyy') == null ||
          this.selectedCountry == null
        ){
          this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
          return false;
        }else{
          this.comiteServices.getListComite(
            1,
            this.datePipe.transform(this.date3, 'dd-MM-yyyy'),
            this.datePipe.transform(this.date4, 'dd-MM-yyyy'),
            this.selectedCountry.paisId,
            null).subscribe(
            (response) =>{
              this.message = "Reporte de 6 meses anteriores"
              sinR = response.data;
              
              try{
                sinR.forEach(function (a) {
                  temp[a.code] = temp[a.code] || { category: a.code };
                  temp[a.code][groups[a.nombre]] = a.count;
                });
                result = Object.keys(temp).map(function (k) { return temp[k]; });
                  
                let val1 = 0;
                let val2 = 0;
                let val3 = 0;
    
                for(let g = 0; g < result.length; g++){
                  val1 += result[g].value1
                  val2 += result[g].value2
                  val3 += result[g].value3
                }
    
                this.val1 = val1.toString();
                this.val2 = val2.toString();
                this.val3 = val3.toString();
                this.val4 = val1 + val2+ val3;
                
                this.barPais.dataReceived(sinR);
              }catch{
                this.val1 = "0";
                this.val2 = "0";
                this.val3 = "0";
                this.val4 = 0;
                this.barPais.dataReceived("");
              }
              
            }
          )
        }
      }
    }
    if(id == 2){
  
      let sinR = [];
      var temp = {};
      var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
      var result: any;
  
      if (evento === "Enter" || evento === "click"|| evento === undefined) {
        if(
          this.datePipe.transform(this.date3, 'dd-MM-yyyy') == null ||
          this.datePipe.transform(this.date4, 'dd-MM-yyyy') == null ||
          this.selectedCity1 == null ||
          this.textFilterDE.length == 0
        ){
          this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
          return false;
        }else{
          this.comiteServices.getListComite(
            2,
            this.datePipe.transform(this.date3, 'dd-MM-yyyy'),
            this.datePipe.transform(this.date4, 'dd-MM-yyyy'),
            this.selectedCity1.empresaId,
            this.textFilterDE).subscribe(
            (response) =>{
              this.message = "Reporte de 6 meses anteriores"
              sinR = response.data;
              
              try{
                sinR.forEach(function (a) {
                  temp[a.code] = temp[a.code] || { category: a.code };
                  temp[a.code][groups[a.nombre]] = a.count;
                });
                result = Object.keys(temp).map(function (k) { return temp[k]; });
                  
                let val1 = 0;
                let val2 = 0;
                let val3 = 0;
    
                for(let g = 0; g < result.length; g++){
                  val1 += result[g].value1
                  val2 += result[g].value2
                  val3 += result[g].value3
                }
    
                this.val1 = val1.toString();
                this.val2 = val2.toString();
                this.val3 = val3.toString();
                this.val4 = val1 + val2+ val3;
                
                this.barEmpresaDireccion.dataReceived(sinR);
              }catch{
                this.val1 = "0";
                this.val2 = "0";
                this.val3 = "0";
                this.val4 = 0;
                this.barEmpresaDireccion.dataReceived("");
              }
              
            }
          )
        }
      }
    }
  }

  showWarn(mensaje: string) {
    this.messageService.add({ severity: 'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje });
  }

}
