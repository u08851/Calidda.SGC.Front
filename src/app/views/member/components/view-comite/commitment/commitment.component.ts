import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
  styleUrls: ['./commitment.component.scss']
})
export class CommitmentComponent implements OnInit {
  displayModal: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  showAlertResponsable() {
    this.displayModal = true;
  }
}
