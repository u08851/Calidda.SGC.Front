import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-import-document',
  templateUrl: './import-document.component.html',
  styleUrls: ['./import-document.component.scss']
})
export class ImportDocumentComponent implements OnInit {
  uploadedFiles: any[] = [];
  checked:boolean;
  private messageService: MessageService

  ngOnInit(): void {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  uploadDocument(event) {
    
  }
}
