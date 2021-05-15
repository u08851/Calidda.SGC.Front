import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  cols: any[];
  uploadedFiles: any[] = [];
  selectedFiles: any[] = [];
  values3:String;

  data: any[] = [
    {
      "doc": "Video.mp4"
    }
  ];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    this.cols = [
      { header: 'Lista de Videos', field: 'doc' },
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
