import { Component, OnInit } from '@angular/core';
import { faCoffee, faReply } from '@fortawesome/free-solid-svg-icons';
import { headerService } from 'src/app/services/header.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  faCoffee = faCoffee;
  faReply = faReply;

  visibleSidebar: boolean = true;

  constructor(
    private sidevar: headerService
  ) { }

  ngOnInit(): void {
    this.sidevar.sidenav$.subscribe(res => {
      this.visibleSidebar = res;
   });
  }

}
