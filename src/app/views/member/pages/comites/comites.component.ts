import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ConfidentialityComponent } from '../../dialog/confidentiality/confidentiality.component';

@Component({
  selector: 'app-comites',
  templateUrl: './comites.component.html',
  styleUrls: ['./comites.component.scss']
})
export class ComitesComponent implements OnInit {

  constructor(
    public dialogService: DialogService,
    public  ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
  }

  showConfidentiality(data) {
    this.ref = this.dialogService.open(ConfidentialityComponent, {
      header: '',
      width: '45%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: data
    });

  }

}
