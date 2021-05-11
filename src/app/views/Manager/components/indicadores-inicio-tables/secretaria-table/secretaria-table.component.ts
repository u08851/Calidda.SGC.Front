import { Component, OnInit } from '@angular/core';
import { ComiteServices } from 'src/app/services/comite.service';

@Component({
  selector: 'app-secretaria-table',
  templateUrl: './secretaria-table.component.html',
  styleUrls: ['./secretaria-table.component.scss'],
})
export class SecretariaTableComponent implements OnInit {
  products2: any[];

  cols2: any[];

  term: string = 'ALL1';
  term1: string = 'ALL1';
  term2: string = 'ALL1';
  term3: string = 'ALL1';
  page: number = 0;
  size: number = 5;
  date3: Date;
  date4: Date;
  es: any;
  constructor(private comiteServices: ComiteServices) {}

  ngOnInit(): void {
    this.cols2 = [
      { header: 'Fecha de creacion', field: 'fechaCreacion' },
      { header: 'Código de comité', field: 'codComite' },
      { header: 'Nombre del comité', field: 'nombre' },
      { header: 'Fecha de último sesión', field: 'fechaUltimo' },
    ];

    this.getListComiteActiveList();

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
  }

  getDateList(value: string) {
    return value.substr(0, 10);
  }

  getListComiteActiveList() {
    this.comiteServices
      .getListComiteActiveSecretaria(
        this.term,
        this.term1,
        this.term2,
        this.page,
        this.size
      )
      .subscribe((result: any) => {
        this.products2 = result.data;
      });
  }
}
