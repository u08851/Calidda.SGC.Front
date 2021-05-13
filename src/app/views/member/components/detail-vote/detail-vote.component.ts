import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-vote',
  templateUrl: './detail-vote.component.html',
  styleUrls: ['./detail-vote.component.scss']
})
export class DetailVoteComponent implements OnInit {

  opt: string;

  constructor() { }

  ngOnInit(): void {
  }

}
