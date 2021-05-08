import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ComiteServices } from 'src/app/services/comite.service';
import { EmpresaServices } from 'src/app/services/empresa.service';
import { PaisServices } from 'src/app/services/pais.service';
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
  es: any;
  val1: string = localStorage.getItem("val1");
  val2: string = localStorage.getItem("val2");
  val3: string = localStorage.getItem("val3");
  val4: number = parseInt(localStorage.getItem("val1")) + parseInt(localStorage.getItem("val2")) + parseInt(localStorage.getItem("val3"))
  message:string="Reporte de 6 meses anteriores";
  val11: string = localStorage.getItem("val11");
  val22: string = localStorage.getItem("val22");
  val33: string = localStorage.getItem("val33");
  val44: string = localStorage.getItem("val44");
  val55: string = localStorage.getItem("val55");
  val66: string = localStorage.getItem("val66");

  selectedCountry: any;
  countries: any[];

  selectedCity1: any;
  cities: any[];

  textFilter0: any = "";
  textFilter2: any = "";
  textFilter3: any = "";

  @ViewChild(BarTodosComponent) barTodos: BarTodosComponent;
  @ViewChild(BarPaisComponent) barPais: BarPaisComponent;
  @ViewChild(DonutComponent) donuts: DonutComponent;

  constructor(
    private router: Router,
    private datePipe: DatePipe,
    private comiteServices:ComiteServices,
    private paisServices:PaisServices,
    private empresaServices:EmpresaServices,
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

  onKeydown(event,id:any) {
    var evento = "";
    if(id == 0){
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
                
                this.barTodos.dataReceived(sinR);
              }catch{
                this.barTodos.dataReceived("");
              }
              
            }
          )
        }else{
          if(this.textFilter2.length == 0 && this.textFilter3.length == 0 && this.textFilter0.length == 0){
            this.comiteServices.getListComite(0,null,null,null).subscribe(
              (response) =>{
                this.message = "Reporte de los 6 últimos meses"
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
                  
                  this.barTodos.dataReceived(sinR);
                }catch{
                  this.barTodos.dataReceived("");
                }
              }
            )
          }else{
            if(this.textFilter2.length == 0 && this.textFilter3.length != 0 && this.textFilter0.length == 0){
              this.comiteServices.getListComite(2,null,this.textFilter3,null).subscribe(
                (response) =>{
                  this.message = "Reporte de los 6 últimos meses " + this.textFilter3
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
                    
                    this.barTodos.dataReceived(sinR);
                  }catch{
                    this.barTodos.dataReceived("");
                  }
                }
              )
            }else{
              if(this.textFilter2.length != 0 && this.textFilter3.length == 0 && this.textFilter0.length == 0){
                this.comiteServices.getListComite(1,this.textFilter2,null,null).subscribe(
                  (response) =>{
                    this.message = "Reporte fecha ingresada"
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
                      
                      this.barTodos.dataReceived(sinR);
                    }catch{
                      this.barTodos.dataReceived("");
                    }
                  }
                )
              }else{
                if(this.textFilter2.length != 0 && this.textFilter3.length != 0 && this.textFilter0.length == 0){
                  this.comiteServices.getListComite(3,this.textFilter2,this.textFilter3,null).subscribe(
                    (response) =>{
                      this.message = "Reporte de rango de fechas"
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
                        
                        this.barTodos.dataReceived(sinR);
                      }catch{
                        this.barTodos.dataReceived("");
                      }
                    }
                  )
                }else{
                  if(this.textFilter2.length != 0 && this.textFilter3.length == 0 && this.textFilter0.length != 0){
                    this.comiteServices.getListComite(5,this.textFilter2,null,this.textFilter0).subscribe(
                      (response) =>{
                        this.message = "Reporte de fecha y nombre ingresado"
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
                          
                          this.barTodos.dataReceived(sinR);
                        }catch{
                          this.barTodos.dataReceived("");
                        }
                      }
                    )
                  }else{
                    if(this.textFilter2.length == 0 && this.textFilter3.length != 0 && this.textFilter0.length != 0){
                      this.comiteServices.getListComite(6,null,this.textFilter3,this.textFilter0).subscribe(
                        (response) =>{
                          this.message = "Reporte de fecha y nombre ingresado"
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
                            
                            this.barTodos.dataReceived(sinR);
                          }catch{
                            this.barTodos.dataReceived("");
                          }
                        }
                      )
                    }else{
                      if(this.textFilter2.length != 0 && this.textFilter3.length != 0 && this.textFilter0.length != 0){
                        this.comiteServices.getListComite(7,this.textFilter2,this.textFilter3,this.textFilter0).subscribe(
                          (response) =>{
                            this.message = "Reporte de rango de fechas y nombre ingresado"
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
                              
                              this.barTodos.dataReceived(sinR);
                            }catch{
                              this.barTodos.dataReceived("");
                            }
                          }
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if(id == 1){
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
        if(this.textFilter2.length == 0 && this.textFilter3.length == 0 && this.selectedCountry == null){
          this.comiteServices.getListComite(8,null,null,null).subscribe(
            (response) =>{
              this.message = "Reporte de los 6 últimos meses"
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
                
                this.barPais.dataReceived(sinR);
              }catch{
                this.barPais.dataReceived("");
              }
            }
          )
        }else{
          if(this.textFilter2.length == 0 && this.textFilter3.length == 0 && this.selectedCountry != null){
            this.comiteServices.getListComite(9,null,null,this.selectedCountry.paisId).subscribe(
              (response) =>{
                this.message = "Reporte del páis elegido"
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
                  
                  this.barPais.dataReceived(sinR);
                }catch{
                  this.barPais.dataReceived("");
                }
              }
            )
          }else{
            if(this.textFilter2.length != 0 && this.textFilter3.length == 0 && this.selectedCountry == null){
              this.comiteServices.getListComite(10,this.textFilter2,null,null).subscribe(
                (response) =>{
                  this.message = "Reporte de la fecha inicial ingresada"
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
                    
                    this.barPais.dataReceived(sinR);
                  }catch{
                    this.barPais.dataReceived("");
                  }
                }
              )
            }else{
              if(this.textFilter2.length == 0 && this.textFilter3.length != 0 && this.selectedCountry == null){
                this.comiteServices.getListComite(11,null,this.textFilter3,null).subscribe(
                  (response) =>{
                    this.message = "Reporte de la fecha elegida"
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
                      
                      this.barPais.dataReceived(sinR);
                    }catch{
                      this.barPais.dataReceived("");
                    }
                  }
                )
              }else{
                if(this.textFilter2.length != 0 && this.textFilter3.length != 0 && this.selectedCountry == null){
                  this.comiteServices.getListComite(12,this.textFilter2,this.textFilter3,null).subscribe(
                    (response) =>{
                      this.message = "Reporte del rango de fecha"
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
                        
                        this.barPais.dataReceived(sinR);
                      }catch{
                        this.barPais.dataReceived("");
                      }
                    }
                  )
                }else{
                  if(this.textFilter2.length != 0 && this.textFilter3.length == 0 && this.selectedCountry != null){
                    this.comiteServices.getListComite(13,this.textFilter2,null,this.selectedCountry.paisId).subscribe(
                      (response) =>{
                        this.message = "Reporte de la fecha inicial y país elegida"
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
                          
                          this.barPais.dataReceived(sinR);
                        }catch{
                          this.barPais.dataReceived("");
                        }
                      }
                    )
                  }else{
                    if(this.textFilter2.length == 0 && this.textFilter3.length != 0 && this.selectedCountry != null){
                      this.comiteServices.getListComite(14,null,this.textFilter3,this.selectedCountry.paisId).subscribe(
                        (response) =>{
                          this.message = "Reporte del país y fecha elegida"
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
                            
                            this.barPais.dataReceived(sinR);
                          }catch{
                            this.barPais.dataReceived("");
                          }
                        }
                      )
                    }else{
                      if(this.textFilter2.length != 0 && this.textFilter3.length != 0 && this.selectedCountry != null){
                        this.comiteServices.getListComite(15,this.textFilter2,this.textFilter3,this.selectedCountry.paisId).subscribe(
                          (response) =>{
                            this.message = "Reporte del rango de fecha y país elegido"
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
                              
                              this.barPais.dataReceived(sinR);
                            }catch{
                              this.barPais.dataReceived("");
                            }
                          }
                        )
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if(id == 2){
    }
    if(id == 3){
    }
    if(id == 4){
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
      var result: any;
      
      if (evento === "Enter" || evento === "click" || evento === undefined) {
        if(this.textFilter2.length == 0 && this.textFilter3.length == 0){
          this.comiteServices.getListComite(16,null,null,null).subscribe(
            (response) =>{
              sinR = response.data;

              try{
                var groupBy = function (miarray, prop) {
                  return miarray.reduce(function(groups, item) {
                      var val = item[prop];
                      groups[val] = groups[val] || {nombre: item.nombre, count: 0};
                      groups[val].count += item.count;
                      return groups;
                  }, {});
                }
  
                result = groupBy(sinR,'nombre')
  
                localStorage.removeItem("val11");
                localStorage.removeItem("val22");
                localStorage.removeItem("val33");
                localStorage.removeItem("val44");
                localStorage.removeItem("val55");
                localStorage.removeItem("val66");
                localStorage.setItem("val11",result.Semanal.count.toString())
                localStorage.setItem("val22",result.Quincenal.count.toString())
                localStorage.setItem("val33",result.Trimestral.count.toString())
                localStorage.setItem("val44",result.Mensual.count.toString())
                localStorage.setItem("val55",result.Semestral.count.toString())
                localStorage.setItem("val66",result.Anual.count.toString())

                this.val11 = localStorage.getItem("val11");
                this.val22 = localStorage.getItem("val22");
                this.val33 = localStorage.getItem("val33");
                this.val44 = localStorage.getItem("val44");
                this.val55 = localStorage.getItem("val55");
                this.val66 = localStorage.getItem("val3");

                this.donuts.dataReceived(sinR);
              }catch{
                this.donuts.dataReceived("");
                localStorage.setItem("val11","0")
                localStorage.setItem("val22","0")
                localStorage.setItem("val33","0")
                localStorage.setItem("val44","0")
                localStorage.setItem("val55","0")
                localStorage.setItem("val66","0")

                this.val11 = localStorage.getItem("val11");
                this.val22 = localStorage.getItem("val22");
                this.val33 = localStorage.getItem("val33");
                this.val44 = localStorage.getItem("val44");
                this.val55 = localStorage.getItem("val55");
                this.val66 = localStorage.getItem("val3");
              }
             
            }
          )
        }else{
          if(this.textFilter2.length != 0 && this.textFilter3.length == 0){
            this.comiteServices.getListComite(17,this.textFilter2,null,null).subscribe(
              (response) =>{
                sinR = response.data;
                
                try{
                  var groupBy = function (miarray, prop) {
                    return miarray.reduce(function(groups, item) {
                        var val = item[prop];
                        groups[val] = groups[val] || {nombre: item.nombre, count: 0};
                        groups[val].count += item.count;
                        return groups;
                    }, {});
                  }
    
                  result = groupBy(sinR,'nombre')
    
                  localStorage.removeItem("val11");
                  localStorage.removeItem("val22");
                  localStorage.removeItem("val33");
                  localStorage.removeItem("val44");
                  localStorage.removeItem("val55");
                  localStorage.removeItem("val66");
                  localStorage.setItem("val11",result.Semanal.count.toString())
                  localStorage.setItem("val22",result.Quincenal.count.toString())
                  localStorage.setItem("val33",result.Trimestral.count.toString())
                  localStorage.setItem("val44",result.Mensual.count.toString())
                  localStorage.setItem("val55",result.Semestral.count.toString())
                  localStorage.setItem("val66",result.Anual.count.toString())

                  this.val11 = localStorage.getItem("val11");
                  this.val22 = localStorage.getItem("val22");
                  this.val33 = localStorage.getItem("val33");
                  this.val44 = localStorage.getItem("val44");
                  this.val55 = localStorage.getItem("val55");
                  this.val66 = localStorage.getItem("val3");
  
                  this.donuts.dataReceived(sinR);
                }catch{
                  this.donuts.dataReceived("");
                  localStorage.setItem("val11","0")
                  localStorage.setItem("val22","0")
                  localStorage.setItem("val33","0")
                  localStorage.setItem("val44","0")
                  localStorage.setItem("val55","0")
                  localStorage.setItem("val66","0")

                  this.val11 = localStorage.getItem("val11");
                  this.val22 = localStorage.getItem("val22");
                  this.val33 = localStorage.getItem("val33");
                  this.val44 = localStorage.getItem("val44");
                  this.val55 = localStorage.getItem("val55");
                  this.val66 = localStorage.getItem("val3");
                }
              }
            )
          }else{
            if(this.textFilter2.length == 0 && this.textFilter3.length != 0){
              this.comiteServices.getListComite(18,null,this.textFilter3,null).subscribe(
                (response) =>{
                  sinR = response.data;

                  try{
                    var groupBy = function (miarray, prop) {
                      return miarray.reduce(function(groups, item) {
                          var val = item[prop];
                          groups[val] = groups[val] || {nombre: item.nombre, count: 0};
                          groups[val].count += item.count;
                          return groups;
                      }, {});
                    }
      
                    result = groupBy(sinR,'nombre')
      
                    localStorage.removeItem("val11");
                    localStorage.removeItem("val22");
                    localStorage.removeItem("val33");
                    localStorage.removeItem("val44");
                    localStorage.removeItem("val55");
                    localStorage.removeItem("val66");
                    localStorage.setItem("val11",result.Semanal.count.toString())
                    localStorage.setItem("val22",result.Quincenal.count.toString())
                    localStorage.setItem("val33",result.Trimestral.count.toString())
                    localStorage.setItem("val44",result.Mensual.count.toString())
                    localStorage.setItem("val55",result.Semestral.count.toString())
                    localStorage.setItem("val66",result.Anual.count.toString())

                    this.val11 = localStorage.getItem("val11");
                    this.val22 = localStorage.getItem("val22");
                    this.val33 = localStorage.getItem("val33");
                    this.val44 = localStorage.getItem("val44");
                    this.val55 = localStorage.getItem("val55");
                    this.val66 = localStorage.getItem("val3");

                    this.donuts.dataReceived(sinR);
                  }catch{
                    this.donuts.dataReceived("");
                    localStorage.setItem("val11","0")
                    localStorage.setItem("val22","0")
                    localStorage.setItem("val33","0")
                    localStorage.setItem("val44","0")
                    localStorage.setItem("val55","0")
                    localStorage.setItem("val66","0")

                    this.val11 = localStorage.getItem("val11");
                    this.val22 = localStorage.getItem("val22");
                    this.val33 = localStorage.getItem("val33");
                    this.val44 = localStorage.getItem("val44");
                    this.val55 = localStorage.getItem("val55");
                    this.val66 = localStorage.getItem("val3");
                  }
                }
              )
            }else{
              if(this.textFilter2.length != 0 && this.textFilter3.length != 0){
                this.comiteServices.getListComite(19,this.textFilter2,this.textFilter3,null).subscribe(
                  (response) =>{
                    sinR = response.data;
                    
                    try{
                      var groupBy = function (miarray, prop) {
                        return miarray.reduce(function(groups, item) {
                            var val = item[prop];
                            groups[val] = groups[val] || {nombre: item.nombre, count: 0};
                            groups[val].count += item.count;
                            return groups;
                        }, {});
                      }
        
                      result = groupBy(sinR,'nombre')
        
                      localStorage.removeItem("val11");
                      localStorage.removeItem("val22");
                      localStorage.removeItem("val33");
                      localStorage.removeItem("val44");
                      localStorage.removeItem("val55");
                      localStorage.removeItem("val66");
                      localStorage.setItem("val11",result.Semanal.count.toString())
                      localStorage.setItem("val22",result.Quincenal.count.toString())
                      localStorage.setItem("val33",result.Trimestral.count.toString())
                      localStorage.setItem("val44",result.Mensual.count.toString())
                      localStorage.setItem("val55",result.Semestral.count.toString())
                      localStorage.setItem("val66",result.Anual.count.toString())

                      this.val11 = localStorage.getItem("val11");
                      this.val22 = localStorage.getItem("val22");
                      this.val33 = localStorage.getItem("val33");
                      this.val44 = localStorage.getItem("val44");
                      this.val55 = localStorage.getItem("val55");
                      this.val66 = localStorage.getItem("val3");
      
                      this.donuts.dataReceived(sinR);
                    }catch{
                      this.donuts.dataReceived("");
                      localStorage.setItem("val11","0")
                      localStorage.setItem("val22","0")
                      localStorage.setItem("val33","0")
                      localStorage.setItem("val44","0")
                      localStorage.setItem("val55","0")
                      localStorage.setItem("val66","0")

                      this.val11 = localStorage.getItem("val11");
                      this.val22 = localStorage.getItem("val22");
                      this.val33 = localStorage.getItem("val33");
                      this.val44 = localStorage.getItem("val44");
                      this.val55 = localStorage.getItem("val55");
                      this.val66 = localStorage.getItem("val3");
                    }
                    
                  }
                )
              }
            }
          }
        }
      }
      
    }
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

    /*this.date3 = new Date("");
    this.date4 = new Date("");*/
    this.textFilter0 = "";
    this.selectedCountry = {};
    
    let sinR = [];
    var temp = {};
    var groups = { 'Creado': 'value0','Activo': 'value1', 'En Configuración': 'value2', 'De Baja': 'value3' };
    var result: any;
  }

}
