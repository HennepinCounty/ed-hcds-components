
# Primitives overview

## Compiling primitives
The primitives _{name}.scss files are all written in vanilla CSS. The SCSS extension allows them to be imported into index.scss and then compiled into a single CSS file.

Primitives must be compiled by SASS in this order:
```
// Base styles
@forward "./reset";
@forward "./visually-hidden";
@forward "./colors";
@forward "./colorsSemantic";
@forward "./typography";
@forward "./shadows";
@forward "./borderRadius";

// Layout styles
@forward "./spacing";
@forward "./margin";
@forward "./padding";
@forward "./grid";

// Icons
@forward "./icons";

// Components
@forward "../buttons/button.css";
```

Importing in this order is necessary so that variables get declared in early, and  classes using variables are declared later.


## Primtiive descriptions

### Reset
This file removes margin from basic HTML elements, adds `box-sizing: border-box;` to elements to make sizing calculations more intuitive

### Visually hidden
This file declares a class that can accessibly hide content visually while still appearing in the DOM. This lets you add elements that will only be read by screen readers.

### Colors
Base color palette. This is composed of our brand colors, with the palette expanded into 10 weights for each color. 

Weights were created by adjusting lightness values in HSLuv, to give each weight a uniform perceptual brightness across different colors.
