An Angular.io compatible slide toggle with an icon inside ;)

![Alt Text](https://media.giphy.com/media/xUOwG3hJGLwBSQQS8o/giphy.gif)

**WARNING**:
Component properties have been changed from the 0.1.8 version.
If you don't want to update your code, you should use 0.1.8 version.

## Install
`npm install simple-icon-toggle`

Furthermore, you need to import Material icons (follow this guide http://google.github.io/material-design-icons/#icon-font-for-the-web);



## Usage
1) Import it in your app.module.ts
	```typescript
	import { SimpleIconToggleModule } from 'simple-icon-toggle';
	...
	@NgModule({
		imports: [
		...,
		SimpleIconToggleModule]
	})
	...
	```

2) Use it in your app!

	*yourcomponent.component.html*
	```html
	<simple-icon-toggle mat-icon="notifications_active" [(checked)]="isToggleChecked" [options]="toggleOptions"></simple-icon-toggle>
	```


	*yourcomponent.component.ts*
	```typescript
	...
	  _toggleChecked = false;
	  get isToggleChecked() {
	    return this._toggleChecked;
	  }

	  // Make a setter if you need to do something in the exact moment when there is a toggle event.
	  set isToggleChecked(newValue) {
	    console.log("slider checked", newValue);
	  }
	toggleOptions = {
		barColor: "lightgreen",
		spotColor: "rgb(255,0,0)",
		iconColor: "white",
		width: 60
	};
	...
	```


## Component properties
**mat-icon**:
	the icon to place in the slide toggle's spot (default: **notifications_active**).

**checked**:
	variable representing toggle's status (default: **false**).
	It supports two-way data binding, so it will be automatically updated when there is a toggle event.
	If you need to intercept the value in the exact moment when it changes, associate to it a setter (look at the example above).

**options**: properties to customize the aspect of the slider (default values will chosen if one or more properties are not used).

* **width**: slider width, in px (default: *60*).
* **barColor**: bar color when toggle is switched on, in css notation (e.g. *rgba(255,0,0,0.8)*, default: *green*).
* **spotColor**: switcher's spot color in css notation (e.g. *green*, default: *red*).
* **iconColor**: icon color in css notation (e.g. *rgba(255,255,255,.87)*, default: *inherit*).

## Known issues
If a width less than 35px is chosen, the slider will not render properly (CSS problems).


