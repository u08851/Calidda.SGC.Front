import { Component, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {

  @Input() data: any;
  @Input() cols: any;
  @Input() showIndexAvatar: number;
  



  displayModal:boolean;
  // data: any[] = [
  //   {
  //     "names": "fechac",
  //     "tipo": "cod",
  //     "cargo": "name"
  //   },
  //   {
  //     "names": "fechac",
  //     "tipo": "cod",
  //     "cargo": "name"
  //   }
  // ];

  // cols: any[];

  constructor(
    public dialogService: DialogService,
    public  ref: DynamicDialogRef
  ) { }

  ngOnInit(): void {

    // this.cols = [
    //   { header: 'Nombres y apellidos', field: 'names' },
    //   { header: 'Tipo', field: 'tipo' },
    //   { header: 'Cargo Comite', field: 'cargo' }
    // ];
  }

  showConfirmation() {
    this.displayModal = true;
  }

}
