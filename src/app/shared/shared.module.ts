import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from './primeng.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimengModule,
    SharedComponentsModule,
    AuthModule
  ],
  exports: [
    CommonModule,
    PrimengModule,
    SharedComponentsModule,
    AuthModule
  ],
})
export class SharedModule {}
