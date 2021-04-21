import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})

export class ViewFileComponent implements OnInit {
  file:any;
  @Input() currentpdf;
  
  constructor(
    private danitizer: DomSanitizer,
  ) { }

  ngOnInit()  {
    this. file = this.danitizer.bypassSecurityTrustResourceUrl(this.currentpdf)
  }

}

