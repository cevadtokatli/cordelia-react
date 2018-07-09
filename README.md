# Cordelia React
Cordelia React is a ReactJS plugin that allows you to add a rich color picker into your web pages.
See the documentation and demo for more information: [https://cevadtokatli.github.io/cordelia-react](https://cevadtokatli.github.io/cordelia-react)

## NPM
```
npm install --save cordelia-react
```

## Installation
You can import the main Cordelia Component and render it.
```
import React from 'react';
import ReactDOM from 'react-dom';
import Cordelia from 'cordelia-react';

ReactDOM.render(<Cordelia color="#EEA55B" />,
				document.querySelector('#picker'));
```

You can also add the script file into your html.
```
<script crossorigin src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
<script src="/node_modules/cordelia-react/dist/js/cordelia.min.js"></script>
<script>
ReactDOM.render(
    React.createElement(Cordelia, {color:'#EEA55B'}),
    document.querySelector('#app')
);
</script>
```

Put the CSS file in the ```head``` tag.
```
<link rel="stylesheet" href="/node_modules/cordelia-react/dist/css/cordelia.min.css" />
```

## Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
color | String | #FF0000 | The picker's initial value.
colorFormat | String | hex | The format of the picker's value. Cordelia supports three types of formats: HEX, RGB and HSL. If the opacity is less than 1, HSL is automatically converted to HSLA, HEX and RGB are automatically converted to RGBA.
pickerStyle | Number | 0 | Cordelia comes with two style options. In the first style, the main box allows setting the saturation and lightness of the color and the second box allows setting the color; this is the default. In the second style, the main box allows setting the color and the second box allows setting the saturation and lightness. For more information please view the [demo](https://cevadtokatli.github.io/cordelia-react).
embed | Boolean | true | A boolean value that indicates whether the picker is shown when a button is clicked or embedded into the page directly. If it is false, a button is displayed that allows users to show the picker.
size | String | medium | The picker's size. Three options available *Small, Medium, Large*.
allowOpacity | Boolean | true | A boolean value that indicates whether the opacity bar is visible or not.
allowClearColor | Boolean | false | A boolean value that indicates whether the clear color button (an eraser icon that allows clearing selection) is visible or not.
showColorValue | Boolean | true | A boolean value that indicates whether the color value box is visible or not. Color value box allows you to set a color by typing its name or code. All of the CSS color formats are supported (HEX, RGB, RGBA, HSL, HSLA).
showButtons | Boolean | true | A boolean value that indicates whether the buttons are visible or not. If the `embed` property is false, the only way to close the picker is to click on the Save or Cancel button.
showPalette | Boolean | true | A boolean value that indicates whether the color table is visible or not. Color table allows you to show pre-defined colors. It is also possible for users to save colors for later use by adding this table.
paletteColors | String[] | #FFFFB5, #FBBD87, #F45151, #7AEA89, #91C8E7, #8EB4E6, #B0A7F1 | An array that holds the name or codes of the colors that will be shown in the Color Table as default.
allowPaletteAddColor | Boolean | true | A boolean value that indicates whether users can add a color to the color table or not.

## Callbacks
Callback | Description
----- | -----------
onOpen | Fires when the picker is open.
onClose | Fires when the picker is closed.
onSave | Fires when the selection is saved.
onCancel | Fires when the picker is closed without being saved.
onChanged | Fires when the color is changed.

## Methods
Method | Params | Return | Description
------ | ------ | -------| -----------
get | | Object | Returns the current color.
set | newColor:String | void | Changes the current color.
show | | void | Shows the picker.
hide | | void | Hides the picker.
save | | void | Saves the selection.
cancel | | void | Cancels the selection.

## IE Support
IE 10 is not supported and patches to fix problems will not be accepted.

## License
Cordelia is provided under the [MIT License](https://opensource.org/licenses/MIT).