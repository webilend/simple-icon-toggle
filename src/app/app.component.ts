import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options = {
    iconColor: "white"
  };
  _checked = true;

  get checked() {
    return this._checked;
  }
  set checked(newValue) {
    console.log(newValue);
  }
}
