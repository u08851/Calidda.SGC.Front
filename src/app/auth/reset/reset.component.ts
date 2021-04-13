import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  value3: string;
  recuperar: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
