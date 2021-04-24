import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './dialog/add-profile/add-profile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    ViewFileComponent,
    ProfileComponent,
    AddProfileComponent
  ],
  imports: [CommonModule, PrimengModule],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ViewFileComponent,
    ProfileComponent
  ],
  entryComponents: []
})
export class SharedComponentsModule {}
