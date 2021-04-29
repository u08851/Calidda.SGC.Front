import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comite-detail',
  templateUrl: './comite-detail.component.html',
  styleUrls: ['./comite-detail.component.scss']
})
export class ComiteDetailComponent implements OnInit {

  autoResize:boolean = true;
  checked: boolean = true;
  selectedValue: string;
  date: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
