import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComiteServices } from 'src/app/services/comite.service';

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
  es: any;
  val1: string = localStorage.getItem("val1");
  val2: string = localStorage.getItem("val2");
  val3: string = localStorage.getItem("val3");
  val4: number = parseInt(localStorage.getItem("val1")) + parseInt(localStorage.getItem("val2")) + parseInt(localStorage.getItem("val3"))

  selectedCountry: string;
  countries: any[];

  selectedCity1: string;
  cities: any[];

  textFilter0: any = "";
  textFilter2: any = "";
  textFilter3: any = "";

  constructor(private router: Router,private datePipe: DatePipe,private comiteServices:ComiteServices) {}

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
    this.countries = [{ name: 'Peru', code: 'PE' }];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
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

  onKeydown(event) {
    var evento = "";
    try{
      evento = event.originalEvent.type
    }
    catch{
      try{
        evento = event.key
      }
      catch{
        evento = "Enter"
      }
    }
    if(this.datePipe.transform(this.date3, 'dd-MM-yyyy') != null){
      this.textFilter2 = this.datePipe.transform(this.date3, 'dd-MM-yyyy');
    }
    else{
      this.textFilter2 = "";
    }
    if(this.datePipe.transform(this.date4, 'dd-MM-yyyy') != null){
      this.textFilter3 = this.datePipe.transform(this.date4, 'dd-MM-yyyy');
    }else{
      this.textFilter3 = "";
    }

    let sinR = [];
    var temp = {};
    var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
    var result: any;

    if (evento === "Enter" || evento === "click" || evento === undefined) {
      if(this.textFilter2.length == 0 && this.textFilter3.length == 0 && this.textFilter0.length != 0){
        this.comiteServices.getListComite(4,null,null,this.textFilter0).subscribe(
          (response) =>{
            sinR = response.data;
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

            localStorage.removeItem("val1");
            localStorage.removeItem("val2");
            localStorage.removeItem("val3");
            localStorage.setItem("val1",val1.toString())
            localStorage.setItem("val2",val2.toString())
            localStorage.setItem("val3",val3.toString())

            this.val1 = localStorage.getItem("val1");
            this.val2 = localStorage.getItem("val2");
            this.val3 = localStorage.getItem("val3");
            this.val4 = parseInt(localStorage.getItem("val1")) + parseInt(localStorage.getItem("val2")) + parseInt(localStorage.getItem("val3"))
          }
        )
      }else{
        if(this.textFilter2.length == 0 && this.textFilter3.length == 0 && this.textFilter0.length == 0){
          this.comiteServices.getListComite(0,null,null,null).subscribe(
            (response) =>{
              sinR = response.data;
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

              localStorage.removeItem("val1");
              localStorage.removeItem("val2");
              localStorage.removeItem("val3");
              localStorage.setItem("val1",val1.toString())
              localStorage.setItem("val2",val2.toString())
              localStorage.setItem("val3",val3.toString())

              this.val1 = localStorage.getItem("val1");
              this.val2 = localStorage.getItem("val2");
              this.val3 = localStorage.getItem("val3");
              this.val4 = parseInt(localStorage.getItem("val1")) + parseInt(localStorage.getItem("val2")) + parseInt(localStorage.getItem("val3"))
            }
          )
        }
      }
    }
  }

}
