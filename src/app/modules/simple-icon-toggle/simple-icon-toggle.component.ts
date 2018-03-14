import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'simple-icon-toggle',
    templateUrl: './simple-icon-toggle.component.html',
    styleUrls: ['./simple-icon-toggle.component.css']
})

export class SimpleIconToggleComponent {
    private optionsValue: any;
    private isCheckedValue = false;
    @Input('mat-icon') icon: string = 'notifications_active';
    @Input('options')
    get options() {
        return this.optionsValue;
    }
    set options(values) {
        this.optionsValue = this.mergeObjects({
            width: 125,
            barColor: 'lightgreen',
            spotColor: null,
            iconColor: null
        }, values);
    };

    @Input('checked') checked = false;
    @Output() checkedChange = new EventEmitter();


    constructor() { }

    toggle() { 
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    }

    // ES5 compatible merge...
    private mergeObjects(...args: any[]) {
        var resObj = {};
        for(var i=0; i < arguments.length; i += 1) {
             var obj = arguments[i],
                 keys = Object.keys(obj);
             for(var j=0; j < keys.length; j += 1) {
                 resObj[keys[j]] = obj[keys[j]];
             }
        }
        return resObj;
    }
}
