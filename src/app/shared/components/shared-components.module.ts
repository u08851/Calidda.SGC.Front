import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [CommonModule, PrimengModule],
  exports: [
    HeaderComponent
  ],
  entryComponents: [],
})
export class SharedComponentsModule {}
