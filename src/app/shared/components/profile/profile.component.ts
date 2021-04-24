import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  value: string;

  uploadedFiles: any[] = [];
  @ViewChild('fileInput') fileInput: FileUpload;


  constructor(
    private messageService: MessageService,
    private fileUploadModule: FileUploadModule
  ) { }

  ngOnInit(): void {
  }

  cargar(){
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

}
