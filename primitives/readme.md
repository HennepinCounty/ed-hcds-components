# Primitives overview

## Primtive classes

### Reset

This file removes margin from basic HTML elements, adds `box-sizing: border-box;` to elements to make sizing calculations more intuitive.

### Visually hidden

This file declares a class that can accessibly hide content visually while still appearing in the DOM. This lets you add elements that will only be read by screen readers.

## Tokens

These are foundational styles that components are built upon.

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

Contains CSS variables for shadow styling.

### Border radius

Contains CSS variables for border radius.

### Icons

Creates basic icon sizing.

# Compiling primitives

The primitives \_{name}.scss files are all written in vanilla CSS. The SCSS extension allows them to be imported into index.scss and then compiled into a single CSS file.

Must be compiled by SASS in this order:

```
// Primitives
@forward "./reset";
@forward "./visually-hidden";
@forward "./colors";
@forward "./colorsSemantic";
@forward "./height";
@forward "./typography";
@forward "./shadows";
@forward "./borderSize";
@forward "./borderRadius";
@forward "./borderStyle";
@forward "./spacing";

// Utilities
@forward "../utiltities/width";
@forward "../utiltities/gap";
@forward "../utiltities/flex";
@forward "../utiltities/margin";
@forward "../utiltities/padding";
@forward "../utiltities/grid";

// Icons
@forward "./icons";

// Components

// Used in other components
@forward "../components/buttons/button.css";
@forward "../components/textInput/textInput.css";

// Add if desired
@forward "../components/modal/modal.css";
@forward "../components/alertBanner/alert.css";

```

Importing in this order is necessary so that CSS variables get declared at the start of the file, and classes using those variables are declared later.

It's also necessary to import components like buttons before other classes that use those components, like modals and alerts.

# Colors

## Background colors

| Token name                      | Token value     | True value |
| ------------------------------- | --------------- | ---------- |
| hc-background-default           | --hc-gray-100   | #e5e5e5    |
| hc-background-hover             | --hc-gray-200   | #bababa    |
| hc-background-active            | --hc-gray-300   | #919191    |
| hc-background-selected          | --hc-gray-300   | #919191    |
| hc-background-inverse           | --hc-gray-600   | #1a1a1a    |
| hc-background-brand             | --hc-blue-500   | #0058a4    |
| hc-background-brand-hover       | --hc-blue-600   | #113c66    |
| hc-background-brand-active      | --hc-purple-600 | #36004a    |
| hc-background-brand-inverse     | --hc-blue-200   | #7ed3f7    |
| hc-background-brand-alternate   | --hc-blue-600   | #113c66    |
| hc-background-disabled          | --hc-gray-100   | #e5e5e5    |
| hc-checkbox-background-disabled | --hc-gray-300   | #919191    |

## Support colors

| Token name                 | Token value     | True value |
| -------------------------- | --------------- | ---------- |
| hc-support-info            | --hc-blue-200   | #7ed3f7    |
| hc-support-info--hover     | --hc-blue-500   | #0058a4    |
| hc-support-info--active    | --hc-blue-600   | #113c66    |
| hc-support-info-inverse    | --hc-blue-200   | #7ed3f7    |
| hc-support-success         | --hc-green-300  | #9fcc3b    |
| hc-support-success--hover  | --hc-green-400  | #5ab344    |
| hc-support-success--active | --hc-green-500  | #007f3e    |
| hc-support-success-inverse | --hc-green-200  | #cbdb2a    |
| hc-support-warning         | --hc-yellow-200 | #ffcb05    |
| hc-support-warning--hover  | --hc-yellow-500 | #905501    |
| hc-support-warning--active | --hc-yellow-400 | #cc7b16    |
| hc-support-warning-inverse | --hc-yellow-600 | #6a3c00    |
| hc-support-error           | --hc-red-400    | #ce1432    |
| hc-support-error--hover    | --hc-red-500    | #a70b20    |
| hc-support-error--active   | --hc-red-600    | #570018    |
| hc-support-error-inverse   | --hc-red-200    | #ff6e59    |

## Border colors

| Token name               | Token value        | True value |
| ------------------------ | ------------------ | ---------- |
| hc-border-color-focus-01 | --hc-white         | #ffffff    |
| hc-border-color-focus-02 | --hc-blue-500      | #0058a4    |
| hc-border-color-subtle   | --hc-gray-200      | #bababa    |
| hc-border-color-regular  | --hc-gray-500      | #404040    |
| hc-border-color-strong   | --hc-gray-600      | #1a1a1a    |
| hc-border-color-disabled | --hc-gray-300      | #919191    |
| hc-border-color-error    | --hc-support-error | #ce1432    |
| hc-border-color-inverse  | --hc-gray-100      | #e5e5e5    |

## Button

| Token name                        | Token value                  | True value |
| --------------------------------- | ---------------------------- | ---------- |
| hc-button-primary                 | --hc-background-brand        | #0058a4    |
| hc-button-primary-hover           | --hc-background-brand-hover  | #bababa    |
| hc-button-primary-active          | --hc-background-brand-active | #919191    |
| hc-button-secondary               | --hc-white                   | #ffffff    |
| hc-button-secondary-hover         | --hc-background-brand-hover  | #113c66    |
| hc-button-secondary-active        | --hc-background-brand-active | #36004a    |
| hc-button-secondary-border        | --hc-background-brand        | #0058a4    |
| hc-button-secondary-border-hover  | --hc-button-secondary-hover  | #113c66    |
| hc-button-secondary-border-active | --hc-button-secondary-active | #36004a    |
| hc-button-danger                  | --hc-red-400                 | #ce1432    |
| hc-button-danger-hover            | --hc-red-500                 | #a70b20    |
| hc-button-danger-active           | --hc-red-600                 | #570018    |
| hc-button-disabled-background     | --hc-gray-300                | #919191    |
| hc-button-disabled-text           | --hc-text-disabled           | #696969    |

## Icon colors

| Token name                | Token value           | True value |
| ------------------------- | --------------------- | ---------- |
| hc-icon-primary           | --hc-gray-600         | #1a1a1a    |
| hc-icon-secondary         | --hc-gray-400         | #696969    |
| hc-icon-on-color          | --hc-white            | #ffffff    |
| hc-icon-inverse           | --hc-white            | #ffffff    |
| hc-icon-disabled          | --hc-gray-400         | #696969    |
| hc-icon-on-color-disabled | --hc-gray-300         | #919191    |
| hc-icon-error             | --hc-support-error    | #ce1432    |
| hc-icon-brand             | --hc-background-brand | #0058a4    |

## Field colors

| Token name            | Token value              | True value |
| --------------------- | ------------------------ | ---------- |
| hc-field-background   | --hc-background-default  | #e5e5e5    |
| hc-field-hover        | --hc-gray-100            | #e5e5e5    |
| hc-field-disabled     | --hc-gray-100            | #e5e5e5    |
| hc-field-border-color | --hc-border-color-strong | #1a1a1a    |

## Text colors

| Token name                | Token value        | True value |
| ------------------------- | ------------------ | ---------- |
| hc-text-primary           | --hc-gray-600      | #1a1a1a    |
| hc-text-secondary         | --hc-gray-500      | #404040    |
| hc-text-on-color          | --hc-white         | #ffffff    |
| hc-text-placeholder       | --hc-gray-400      | #696969    |
| hc-text-hint              | --hc-gray-500      | #404040    |
| hc-text-error             | --hc-support-error | #ce1432    |
| hc-text-inverse           | --hc-white         | #ffffff    |
| hc-text-disabled          | --hc-gray-400      | #696969    |
| hc-text-on-color-disabled | --hc-gray-400      | #696969    |

## Link colors

| Token name            | Token value                 | True value |
| --------------------- | --------------------------- | ---------- |
| hc-link-primary       | --hc-background-brand       | #0058a4    |
| hc-link-inverse       | --hc-white                  | #ffffff    |
| hc-link-disabled      | --hc-text-disabled          | #696969    |
| hc-link-primary-hover | --hc-background-brand-hover | #113c66    |
| hc-link-link-visited  | --hc-purple-500             | #471d58    |
