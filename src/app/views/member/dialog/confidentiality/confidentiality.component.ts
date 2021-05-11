import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confidentiality',
  templateUrl: './confidentiality.component.html',
  styleUrls: ['./confidentiality.component.scss']
})
export class ConfidentialityComponent implements OnInit {

  constructor(
    public  ref: DynamicDialogRef,
  ) { }

  ngOnInit(): void {
  }

}
