import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comite-direction',
  templateUrl: './comite-direction.component.html',
  styleUrls: ['./comite-direction.component.scss']
})
export class ComiteDirectionComponent implements OnInit {

  dateFron:Date;
  dateTo:Date;
  constructor() { }

  ngOnInit(): void {
  }

}
