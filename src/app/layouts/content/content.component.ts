import { Component, OnInit } from '@angular/core';
import { faCoffee, faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  faCoffee = faCoffee;
  faReply = faReply;
  constructor() { }

  ngOnInit(): void {
  }

}
