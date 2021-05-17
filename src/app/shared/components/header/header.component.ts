import { Component, OnInit, EventEmitter } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { headerService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  event: string = 'p-input-icon-left';
  items: MenuItem[];

  constructor(
    public  headerService:  headerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Mi Perfil',
        icon: 'pi icon-account_circle',
        routerLink: '/manager',
        command: () => {
          this.headerService.setUser(1);
          this.message('success', 'Has iniciado el perfil', 'Aministrador de Sistema');
        },
      },

      {
        label: 'Administrador de Sistema',
        icon: 'pi icon-admin_panel_settings',
        routerLink: '/manager',
        command: () => {
          this.headerService.setUser(1);
          this.message('success', 'Has iniciado el perfil', 'Aministrador de Sistema');
        },
      },
      {
        label: 'Secretaría del Comité',
        icon: 'pi  icon-inventory',
        routerLink: '/secretary',
        command: () => {
          this.headerService.setUser(2);
          this.message('success', 'Has iniciado el perfil', 'Responsable de Comité');
        },
      },
      {
        label: 'Miembro del Comité',
        icon: 'pi icon-people_outline',
        routerLink: '/member',
        command: () => {
          this.headerService.setUser(3);
          this.message('success', 'Has iniciado el perfil', 'Miembro de Comité');
        },
      },
    ];
  }

  sideToogle() {
    this.headerService.toggle();
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
