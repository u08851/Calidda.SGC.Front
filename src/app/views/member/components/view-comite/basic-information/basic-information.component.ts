import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.scss']
})
export class BasicInformationComponent implements OnInit {
  selectedTipo: string;
  tipoMeet:any[];
  date:Date;
  constructor() { }

  ngOnInit(): void {
    this.tipoMeet = [
      {cod: '01', name: 'Item 1'}
    ]
  }

}
