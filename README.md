An Angular.io compatible slide toggle with an icon inside ;)

![Alt Text](https://media.giphy.com/media/xUOwG3hJGLwBSQQS8o/giphy.gif)

## Install
`npm install simple-icon-toggle`

Furthermore, you need to import Material icons (follow this guide http://google.github.io/material-design-icons/#icon-font-for-the-web, or use Angular Material);


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

	```html
	<simple-icon-toggle mat-icon="notifications_active" bar-color="'lightgreen'" spot-color="'rgb(255,0,0)'" [checked]="isToggleChecked" (toggle)="toggle($event)"></simple-icon-toggle>
	```

## Component properties

**mat-icon**:
	the icon to place in the slide toggle's spot (default: **notifications_active**).

**bar-color**:
	bar color when toggle is switched on, in css notation and quoted (e.g. **'rgba(255,0,0,0.8)'**, default: **'green'**).

**spot-color**:
	switcher's spot color in css notation and quoted (e.g. **'green'**, default: **'red'**).

**checked**:
	slide toggle's status (default: **false**).

**toggle**:
	function to call when the user generates a toggle event. (e.g. **myWonderfulToggleFunction($event)**, where event is a boolean representing the switcher status after the toggle action).

