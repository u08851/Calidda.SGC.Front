import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  // gráfico
  basicData: any;
  basicOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.basicData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [
        {
          label: 'demo data 1',
          backgroundColor: '#FAB200',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'demo data 2',
          backgroundColor: '#00A1DE',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          label: 'demo data 3',
          backgroundColor: '#435468',
          data: [8, 78, 20, 15, 66, 37, 50],
        },
      ],
    };
  }
}
