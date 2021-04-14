import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comite-table',
  templateUrl: './comite-table.component.html',
  styleUrls: ['./comite-table.component.scss']
})
export class ComiteTableComponent implements OnInit {
  products: any[] = [
    {
      "fechac":"fechac",
      "cod":"cod",
      "name":"name",
      "direccion":"direccion",
      "responsable":"responsable",
      "empresa":"empresa",
      "frecuencia":"frecuencia",
      "pais":"pais"
    },
    {
      "fechac":"fechac",
      "cod":"cod",
      "name":"name",
      "direccion":"direccion",
      "responsable":"responsable",
      "empresa":"empresa",
      "frecuencia":"frecuencia",
      "pais":"pais"
    }
  ];

  cols: any[];
  items: any[];

  constructor() { }

  ngOnInit(): void {
  
    this.cols = [
      { header: 'Fec. de Creación', field: 'fechac' },
      { header: 'Cód', field: 'cod' },
      { header: 'Nombre del Comité', field: 'name' },
      { header: 'Direccón del Comité', field: 'direccion' },
      { header: 'Responsable', field: 'responsable' },
      { header: 'Empresa', field: 'empresa' },
      { header: 'Frecuencia', field: 'frecuencia' },
      { header: 'País', field: 'pais' },
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
