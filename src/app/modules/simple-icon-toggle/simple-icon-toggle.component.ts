import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'simple-icon-toggle',
  templateUrl: './simple-icon-toggle.component.html',
  styleUrls: ['./simple-icon-toggle.component.css']
})

export class SimpleIconToggleComponent {
  @Input('mat-icon') icon:string = 'notifications_active';
  @Input('bar-color') barColor:string = 'red';
  @Input('spot-color') switcherColor:string = null;
  @Input('icon-color') iconColor:string = null;
  @Input('checked') isChecked:Boolean = false;
  @Output('toggle') toggleEvent = new EventEmitter();


  constructor() { }

  toggle() {
    this.isChecked = !this.isChecked;
    this.toggleEvent.emit(this.isChecked);
  }

}
