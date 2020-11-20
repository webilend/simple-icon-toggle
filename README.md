An Angular.io compatible slide toggle with an icon inside ;)

![Alt Text](https://media.giphy.com/media/jTKcVIXD3J9ul8PKGr/giphy.gif)

**VERY IMPORTANT:**
This component was created for Angular 5. It's not compatible with Angular 10+. Consider using Angular Material Slide Toggle instead (https://material.angular.io/components/slide-toggle/overview).

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

	*yourComponent.component.html:*
	```html
	<simple-icon-toggle mat-icon="notifications_active" [(checked)]="isToggleChecked" [options]="toggleOptions"></simple-icon-toggle>
	```


	*yourComponent.component.ts:*
	```typescript
	...
	isToggleChecked = false;
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
	the icon to place in the slide toggle's spot (default: *notifications_active*).

**checked**: variable representing toggle's status (default: *false*). It supports two-way data binding, so it will be automatically updated when there is a toggle event.
	
**options**: use this property to customize the aspect of the toggle (default values will be chosen if one or more options are not used).

* **width**: slider width, in px (default: *60*).
* **barColor**: bar color when toggle is switched on, in css notation (e.g. *rgba(255,0,0,0.8)*, default: *lightgreen*).
* **spotColor**: toggle's spot color in css notation (e.g. *green*, default: *red*).
* **iconColor**: icon color in css notation (e.g. *rgba(255,255,255,.87)*, default: *inherit*).

## Toggle
If you need to intercept the value in the exact moment when it changes, associate a setter to *checked* property, like the following snippet of code.

*yourComponent.component.ts:*
```typescript
private _toggleChecked = false;
get isToggleChecked() {
  return this._toggleChecked;
}
set isToggleChecked(newValue) {
  this._toggleChecked = newValue;
  console.log("slider checked", newValue);
}
```