import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  checked: boolean = true;

  items: MenuItem[];
  constructor() {}

  ngOnInit(): void {


        this.items = [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ];
  }
  
}
