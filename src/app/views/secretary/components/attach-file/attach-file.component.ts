import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-attach-file',
  templateUrl: './attach-file.component.html',
  styleUrls: ['./attach-file.component.scss']
})
export class AttachFileComponent implements OnInit {

  cols: any[];
  items: any[];
  uploadedFiles: any[] = [];
  selectedFiles: any[] = [];
  values3:String;

  products: any[] = [
    {
      "doc": "Documents"
    },
    {
      "doc": "Reglamentos.PDF"
    },
    {
      "doc": "Acuerdos de confidencialidad.PDF"
    }
  ];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Listar de Documentos', field: 'doc' },
    ];
    this.items = [
      {
        label: 'Ver',
        icon: 'pi pi-eye',
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
      }
    ];
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