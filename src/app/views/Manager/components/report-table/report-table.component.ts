import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  
  date:Date;

  products: any[] = [
    {
      "fechac":"fechac",
      "name":"name",
      "direccion":"direccion",
      "secretaria":"responsable",
      "fechaSesion":"empresa"
    },
    {
      "fechac":"fechac",
      "name":"name",
      "direccion":"direccion",
      "secretaria":"responsable",
      "fechaSesion":"empresa"
    }
  ];

  cols: any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {
  
    this.cols = [
      { header: 'Fec. de Creación', field: 'fechac' },
      { header: 'Nombre del Comité', field: 'name' },
      { header: 'Secretaria del Comité', field: 'secretaria' },
      { header: 'Fecha de ultima sesión', field: 'fechaSesion' }
  ];


  
  this.items = [
    {
      label: 'Editar Comité',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Ver histórico',
      icon: 'pi pi-times',
    },
    {
      label: 'Dar de baja al Comité',
      icon: 'pi pi-times',
    },
    {
      label: 'Eliminar Comité',
      icon: 'pi pi-times',
    }

  ];

  }

}
