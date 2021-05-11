import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dasboard-comite',
  templateUrl: './dasboard-comite.component.html',
  styleUrls: ['./dasboard-comite.component.scss']
})
export class DasboardComiteComponent implements OnInit {
  member: string;
  constructor() { }

  ngOnInit(): void {
  }

}
