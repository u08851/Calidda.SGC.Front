import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ComiteServices } from 'src/app/services/comite.service';
import { AppConstants } from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-pais-table',
  templateUrl: './pais-table.component.html',
  styleUrls: ['./pais-table.component.scss'],
  providers: [DatePipe]
})
export class PaisTableComponent implements OnInit {
  date3: Date;
  date4: Date;
  idPais: number;
  es: any;

  products2: any[];

  cols2: any[];

  term: string = "ALL1";
  term1: string = "ALL1";
  term2: string = "ALL1"
  term3: string = "ALL1";
  page: number = 0;
  size: number = 5;

  constructor(
    private comiteServices:ComiteServices,
    private datePipe: DatePipe,
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

    this.cols2 = [
      { header: 'Fecha de creacion', field: 'fechaCreacion' },
      // { header: 'País', field: 'pais' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Secretario del comité', field: 'secretario' },
      { header: 'Fecha de último sesión', field: 'fechaUltimo' },
    ];

    this.getListComiteActiveList();
    
  }

  getDateList(value:string){
    return value.substr(0,10);
  }

  getListComiteActiveList(){

    try{
      this.date3 = history.state.item.date3;
      this.date4 = history.state.item.date4;
      this.idPais = history.state.item.paisId;
    }catch{
      this.date3 = new Date();
      this.date4 = new Date();
      this.idPais = 0;
    }
    
    this.comiteServices.getListComiteActive(
      1,
      this.datePipe.transform(this.date3, 'MM-dd-yyyy'),
      this.datePipe.transform(this.date4, 'MM-dd-yyyy'),
      this.idPais.toString(),
      null,
      this.page,
      this.size).subscribe(
      (result: any) => {
        this.products2 = result.data
      }
    )
  }

  onKeydown(event) {
    var evento = "";
    try{
      evento = event.originalEvent.type
    }
    catch{
      evento = event.key
    }
    if (evento === "Enter" || evento === "click"|| evento === undefined) {
      if(
        this.datePipe.transform(this.date3, 'MM-dd-yyyy') == null ||
        this.datePipe.transform(this.date4, 'MM-dd-yyyy') == null
      ){
        this.showWarn(AppConstants.MessageModal.FIELD_ERROR);
        return false;
      }else{
        this.comiteServices.getListComiteActive(
          1,
          this.datePipe.transform(this.date3, 'MM-dd-yyyy'),
          this.datePipe.transform(this.date4, 'MM-dd-yyyy'),
          this.idPais.toString(),
          null,
          this.page,
          this.size).subscribe(
          (result: any) => {
            this.products2 = result.data
          }
        )
      }
    }
  }

  showWarn(mensaje: string) {
    this.messageService.add({ severity: 'warn', summary: AppConstants.TitleModal.Warning, detail: mensaje });
  }

}
