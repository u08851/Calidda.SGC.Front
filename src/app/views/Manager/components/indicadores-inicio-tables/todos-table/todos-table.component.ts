import { Component, OnInit } from '@angular/core';
import { ComiteServices } from 'src/app/services/comite.service';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.scss']
})
export class TodosTableComponent implements OnInit {
  date3: Date;
  date4: Date;
  es: any;

  products: any[];

  cols: any[];

  term: string = "ALL1";
  term1: string = "ALL1";
  term2: string = "ALL1"
  term3: string = "ALL1";
  page: number = 0;
  size: number = 5;

  constructor(
    private comiteServices:ComiteServices
  ) { }

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


    this.cols = [
      { header: 'Fecha de creacion', field: 'fechaCreacion' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Secretario del comité', field: 'secretario' },
      { header: 'Fecha de último sesión', field: 'fechaUltimo' }
    ];

    this.getListComiteActiveList();
    
  }

  getDateList(value:string){
    return value.substr(0,10);
  }

  getListComiteActiveList(){
    this.comiteServices.getListComiteActive(this.term,this.term1,this.term2,this.page,this.size).subscribe(
      (result: any) => {
        this.products = result.data
      }
    )
  }

}
