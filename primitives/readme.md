# Primitives overview

## Compiling primitives

The primitives \_{name}.scss files are all written in vanilla CSS. The SCSS extension allows them to be imported into index.scss and then compiled into a single CSS file.

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

// Layout and utilities
@forward "./spacing";
@forward "./margin";
@forward "./padding";
@forward "./grid";

// Icons
@forward "./icons";

// Components
@forward "../buttons/button.css";
```

Importing in this order is necessary so that variables get declared in early, and classes using variables are declared later.

# Primitive descriptions

## Base styles

These styles are foundational styles that components are built upon. In atomic design, these might be considered sub-atomic elements

### Reset

This file removes margin from basic HTML elements, adds `box-sizing: border-box;` to elements to make sizing calculations more intuitive

### Visually hidden

This file declares a class that can accessibly hide content visually while still appearing in the DOM. This lets you add elements that will only be read by screen readers.

### Colors

Base color palette as CSS variables. This is composed of our brand colors, with the palette expanded into 10 weights for each color.

Weights were created by adjusting lightness values in HSLuv, to give each weight a uniform perceptual brightness across different colors.

### Colors -- Semantic

Named colors as CSS variables.

Names indicate the use of different colors.
For example:
`text-primary` is meant to be the colors for primary text content such as headings and paragraphs
`text-error` is meant to be the color for any error text that might be displayed

### Typography

Contains class styling for paragraphs, headings, and other repeatable text elements such as error text and labels.

### Shadows

Contains CSS variables for shadow styling

### Border radius

Contains CSS variables for border radius

## Layout

These files contain classes and variables used for layouts, such as padding variables or grid classes.

## Icons

Creates basic icon sizing. Classes expect Material Symbols font family to be imported as a stylesheet in the HTML.
