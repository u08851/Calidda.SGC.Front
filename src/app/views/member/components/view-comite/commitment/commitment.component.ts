import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SubTareaComponent } from '../../../dialog/sub-tarea/sub-tarea.component';

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
  styleUrls: ['./commitment.component.scss']
})
export class CommitmentComponent implements OnInit {
  displayModal: boolean;
  ref: DynamicDialogRef;

  constructor(public dialogService: DialogService) { }


  ngOnInit(): void {
  }

  showAlertResponsable() {
    this.displayModal = true;
  }

  showAddSubTarea() {
    this.ref = this.dialogService.open(SubTareaComponent, {
      header: 'Sub tarea',
      width: '45%',
      contentStyle: { "max-height": "500px", "overflow": "inherit" },
      baseZIndex: 10000
    });
  }
}
