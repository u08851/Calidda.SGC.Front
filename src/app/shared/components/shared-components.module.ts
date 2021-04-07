import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  imports: [CommonModule, PrimengModule],
  exports: [
    HeaderComponent, SidebarComponent
  ],
  entryComponents: []
})
export class SharedComponentsModule {}
