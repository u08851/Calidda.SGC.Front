import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SidenavService } from './back/services/sidenav.service';
import { CreateDireccionComiteComponent } from './views/Manager/dialog/create-direccion-comite/create-direccion-comite.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDireccionComiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule
  ],
   exports: [
    RouterModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
