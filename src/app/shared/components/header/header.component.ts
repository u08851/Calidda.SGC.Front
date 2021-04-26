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

  type: boolean = true;


  changeStyle() {
    this.type =! this.type;
  }

  constructor(
    public sidenav: SidenavService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Administrador de Sistema',
        icon: 'pi pi-cog',
        command: () => {
          this.message('success', 'Has iniciado el perfil', 'Aministrador de Sistema');
        },
      },
      {
        label: 'Responsable del Comité',
        icon: 'pi pi-bookmark',
        command: () => {
          this.message('success', 'Has iniciado el perfil', 'Responsable de Comité');
        },
      },
      {
        label: 'Miembro del Comité',
        icon: 'pi pi-briefcase',
        command: () => {
          this.message('success', 'Has iniciado el perfil', 'Miembro de Comité');
        },
      },
    ];
  }

  sideToogle() {
    this.sidenav.toggle();
  }

  message(severity, summary, detail) {
    this.messageService.add({
      key: 'rol',
      severity: severity,
      summary: summary,
      detail: detail
    });
  }

}
