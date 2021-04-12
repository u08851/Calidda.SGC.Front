import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { SidenavService } from 'src/app/back/services/sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  visibleSidebar1;

  event: string = 'p-input-icon-left';

  items: MenuItem[];

  changeStyle($event) {
    this.event =
      $event.type == 'mouseover' ? 'p-input-icon-right' : 'p-input-icon-left';
  }

  constructor(
    public sidenav: SidenavService
  ) {}

  ngOnInit(): void {
    

    this.items = [
      {
        label: 'Administrador de Sistema',
        icon: 'pi pi-cog',
      },
      {
        label: 'Responsable del Comité',
        icon: 'pi pi-bookmark',
      },
      {
        label: 'Miembro del Comité',
        icon: 'pi pi-briefcase',
      },
    ];
  }


  
  sideToogle() {
    this.sidenav.toggle();
  }
  

  
}
