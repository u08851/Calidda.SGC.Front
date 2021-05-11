import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee, faReply } from '@fortawesome/free-solid-svg-icons';
import { headerService } from 'src/app/services/header.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faReply = faReply;
  visibleSidebar: boolean = true;
  menuItems: any[];
  userId: number = 1;
  routerBack: string;

  constructor(
    public headerService: headerService,
    public routing: Router
  ) { }

  ngOnInit(): void {
    this.headerService.sidenav$.subscribe(res => {
      this.visibleSidebar = res;
    });
    this.headerService.userId$.subscribe(res => {
      this.userId = res;
      this.loadData();
    });
    this.loadData();
  }

  loadData() {
    switch (this.userId) {
      case 1:
        this.menuItems = Constant.AdminMenuItems;
        this.routerBack = "/manager/dashboard"
        break;
      case 2:
        this.menuItems = Constant.SecretaryMenuItems;
        this.routerBack = "/secretary"
        break;
      case 3:
        this.menuItems = Constant.MemberMenuItems;
        this.routerBack = "/member"
        break;
      default:
        this.menuItems = Constant.AdminMenuItems;
        break;
    }
  }

  profile() {
    this.routing.navigate(['manager/profile']);
  }


}

export class Constant {
  static AdminMenuItems = [
    { routing: '/manager/dashboard', label: 'Inicio', icon: 'home' },
    { routing: '/manager/comites', label: 'Comités', icon: 'article' },
    { routing: '/manager/mantenimiento', label: 'Mantenimiento', icon: 'build' }
  ]
  static SecretaryMenuItems = [
    { routing: '/secretary', label: 'Inicio', icon: 'home' },
    { routing: '/secretary/comites', label: 'Comités', icon: 'article' },
    { routing: '/secretary/dashboard', label: 'Firmas', icon: 'assessment' },
    { routing: '/secretary/mantenimiento', label: 'Mantenimiento', icon: 'build' },
    { routing: '/secretary/mantenimiento', label: 'Atención de compromisos', icon: '' }
  ]
  static MemberMenuItems = [
    { routing: '/member', label: 'Inicio', icon: 'home' },
    { routing: '/member/comites', label: 'Comités', icon: 'article' },
    { routing: '/member/mantenimiento', label: 'Mantenimiento', icon: 'build' },
    { routing: '/member/mantenimiento', label: 'Atención de compromisos', icon: '' }
  ]
}
