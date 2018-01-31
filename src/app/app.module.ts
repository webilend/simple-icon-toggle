import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SimpleIconToggleModule } from './modules/simple-icon-toggle/simple-icon-toggle.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleIconToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
