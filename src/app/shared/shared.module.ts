import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { AuthModule } from '../auth/auth.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    PrimengModule, 
    SharedComponentsModule, 
    AuthModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule, 
    PrimengModule, 
    SharedComponentsModule, 
    AuthModule,
    FontAwesomeModule
  ],
})
export class SharedModule {}
