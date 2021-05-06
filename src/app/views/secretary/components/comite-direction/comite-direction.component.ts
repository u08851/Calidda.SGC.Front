import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comite-direction',
  templateUrl: './comite-direction.component.html',
  styleUrls: ['./comite-direction.component.scss']
})
export class ComiteDirectionComponent implements OnInit {

  dateFron:Date;
  dateTo:Date;
  selectedMeet:string;
  TipoMeet:any[];
  constructor() { }

  ngOnInit(): void {
    this.TipoMeet = [
      {name: 'Presencial', code: '01'},
    ]
  }

}
