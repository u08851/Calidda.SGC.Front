import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PrimengModule } from '../shared/primeng.module';
import { RolComponent } from './rol/rol.component';



@NgModule({
  declarations: [
    LoginComponent,
    RolComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
