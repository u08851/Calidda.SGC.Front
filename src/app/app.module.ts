import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SidenavService } from './back/services/sidenav.service';
import { HttpClientModule } from '@angular/common/http';
import { DirectionServices } from './services/direccion.service';
import { EmpresaServices } from './services/empresa.service';
import { PaisServices } from './services/pais.service';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    HttpClientModule
  ],
   exports: [
    RouterModule
  ],
  providers: [SidenavService,DirectionServices,EmpresaServices,PaisServices, MessageService ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
