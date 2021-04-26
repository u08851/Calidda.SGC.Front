import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUpload } from 'primeng/fileupload';
import { AddProfileComponent } from '../dialog/add-profile/add-profile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  value: string;
  uploadedFiles: any[] = [];
  @ViewChild('fileInput') fileInput: FileUpload;
  ref: DynamicDialogRef;


  constructor(
    private messageService: MessageService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  cargar() {
    this.fileInput.choose();
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onBeforeUpload() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrio un Error al cargar la imagen' });
  }
  
  showEditUser() {
    this.ref = this.dialogService.open(AddProfileComponent, {
      header: 'Información General',
      width: '45%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });
  }


}
