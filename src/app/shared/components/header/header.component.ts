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
  type: boolean = true;

  changeStyle() {
    this.type =! this.type;
  }

  constructor(
    public  headerService:  headerService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Administrador de Sistema',
        icon: 'pi pi-cog',
        command: () => {
          this.headerService.setUser(1);
          this.message('success', 'Has iniciado el perfil', 'Aministrador de Sistema');
        },
      },
      {
        label: 'Responsable del Comité',
        icon: 'pi pi-bookmark',
        command: () => {
          this.headerService.setUser(2);
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
