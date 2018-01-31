import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleIconToggleComponent } from './simple-icon-toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [],
  declarations: [SimpleIconToggleComponent],
  exports: [SimpleIconToggleComponent]
})
export class SimpleIconToggleModule { }
