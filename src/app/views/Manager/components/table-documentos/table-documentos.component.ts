import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewFileComponent } from 'src/app/shared/components/view-file/view-file.component';
import { ImportDocumentComponent } from '../../dialog/import-document/import-document.component';

@Component({
  selector: 'app-table-documentos',
  templateUrl: './table-documentos.component.html',
  styleUrls: ['./table-documentos.component.scss'],
})
export class TableDocumentosComponent implements OnInit {
  displayMaximizable: boolean;
  displayModal: boolean;
  checked: boolean;
  document: string = 'assets/doc/prueba.pdf';
  ref: DynamicDialogRef;

  // Calendar
  date3: Date;
  date4: Date;
  es: any;

  products2: any[] = [
    {
      fechaDeCarga: 'fechaDeCarga',
      horaDeCarga: 'horaDeCarga',
      tipo: 'tipo',
      nombreDocumento: 'nombreDocumento',
      estado: 'estado',
    },
    {
      fechaDeCarga: 'fechaDeCarga',
      horaDeCarga: 'horaDeCarga',
      tipo: 'tipo',
      nombreDocumento: 'nombreDocumento',
      estado: 'estado',
    },
  ];

  cols2: any[];

  tipo: any[];
  selectedTipo: string;

  constructor(
    public dialogService: DialogService
  ) {
    this.tipo = [
      { name: 'Miembro', code: 'MB' },
      { name: 'Invitados', code: 'IV' }
    ];
  }

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
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
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
      { header: 'Fecha de carga', field: 'fechaDeCarga' },
      { header: 'Hora de carga', field: 'horaDeCarga' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Tipo', field: 'tipo' },
      { header: 'Estado', field: 'estado' },
    ];
  }

  showImportDocument() {
    this.ref = this.dialogService.open(ImportDocumentComponent, {
      header: 'Importar Documento',
      width: '50%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showConfirmation() {
    this.displayModal = true;
  }
}
