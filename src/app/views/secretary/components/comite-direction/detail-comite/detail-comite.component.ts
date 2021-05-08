import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-comite',
  templateUrl: './detail-comite.component.html',
  styleUrls: ['./detail-comite.component.scss']
})
export class DetailComiteComponent implements OnInit {

  autoResize:boolean = true;
  checked: boolean = true;
  selectedValue: string;
  date: Date;
  
  constructor() { }

  ngOnInit(): void {
  }

}
