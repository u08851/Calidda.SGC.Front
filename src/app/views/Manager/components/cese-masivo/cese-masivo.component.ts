import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cese-masivo',
  templateUrl: './cese-masivo.component.html',
  styleUrls: ['./cese-masivo.component.scss']
})
export class CeseMasivoComponent implements OnInit {
  values:string;
  displayModal:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  showModalDialog() {
    this.displayModal = true;
  } 
}
