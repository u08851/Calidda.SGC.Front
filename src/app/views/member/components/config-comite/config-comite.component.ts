import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-config-comite',
  templateUrl: './config-comite.component.html',
  styleUrls: ['./config-comite.component.scss']
})
export class ConfigComiteComponent implements OnInit {

  uploadedFiles: any[] = [];
  selectedFiles: any[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onSelect(event) {  
    this.selectedFiles = [];
    for (let file of event.currentFiles) {
      this.selectedFiles.push(file);
    }
  }
  onRemove( event ) {
    this.selectedFiles.forEach( ( item, index ) => {
      if(item === event)  this.selectedFiles.splice(event,1);
    });
  }

}
