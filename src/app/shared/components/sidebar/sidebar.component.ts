import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faReply } from '@fortawesome/free-solid-svg-icons';
import { SidenavService } from 'src/app/back/services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faCoffee = faCoffee;
  faReply = faReply;
  
  visibleSidebar:boolean = true;

  constructor(
    public sidevar: SidenavService,
    public routing: Router
  ) { }

  ngOnInit(): void {
    this.sidevar.sidenav$.subscribe(res => {
      this.visibleSidebar = res;      
   });
  }

  profile() {
    this.routing.navigate(['manager/profile']);
  }


}
