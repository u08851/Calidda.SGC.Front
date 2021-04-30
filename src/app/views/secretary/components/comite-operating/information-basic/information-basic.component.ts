import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information-basic',
  templateUrl: './information-basic.component.html',
  styleUrls: ['./information-basic.component.scss']
})
export class InformationBasicComponent implements OnInit {
  selectedValues: string;
  constructor() { }

  ngOnInit(): void {
  }

}
