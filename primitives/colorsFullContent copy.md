# Colors

Our color system reflects the diversity and vibrancy of Hennepin County. Consistent use of colors lets residents identify our products. It also supports the credibility and integrity of our information.
Use only colors from our county color palettes.

Sometimes the county serves as a fiscal or administrative agent for other organizations. When we collaborate with them on a website, the website should follow county brand standards.

Colors work together to communicate the brand tone. They draw the user’s attention. Apply colors with care to avoid overwhelming the user. All colors must meet WCAG 2.1 AA contrast standards.

Always check color combinations when used with text or icons. Using a contrast checker to ensure readability and accessibility.

## Github library

When possible use the [Hennepin County Design System GitHub](https://github.com/HennepinCounty/ed-hcds-components). This ensures your application will always use the most recent color palette
whenever you update.

Use the CSS token variables provided rather than copying the hexadecimal (hex) color values. For example, use var(--hc-text-primary) rather than #222222.

Only use the variables in the context they’re designed for. For example, if you wanted to
use red, use var(hc-red-700) rather than var(--hc-text-error).

## Brand colors

Color is an integral part of our brand and with consistent application can help provide impact and brand recognition throughout all communications. Our brand is clean,simple and modern. White leads as the dominant color in all applications, followed by our core blues, shades of gray and our accent colors.

### Blues

Blue is our core color. It is the foundation for our brand and is made up of 3 distinctshades. One blue (or a subtle combinationblues) is used as the primary color, second to white.

| Property Name   | Value         | Hex Code | Contrasts with |
| --------------- | ------------- | -------- | -------------- |
| --hc-brand-navy | --hc-blue-800 | #123123  | White          |
| --hc-brand-blue | --hc-blue-700 | #0058a4  | White          |
| --hc-brand-sky  | --hc-sky-500  | #44c8f5  | Black          |

### Gray

Gray is a staple of our brand. It weaves through communication and ties back to our palette. Gray is useful for breaking up visual space and leading the viewer’s eye through communications.

View the base tokens {anchor link to bottom of page} for our full palette of grays.

### Accents

Our accent colors complement our blue and gray palette, while providing energy and visual interest. Use the accent color palette sparingly in brand communications to add a “pop” of lively contrast when needed.

| Property Name       | Value        | Hex Code | Contrasts with |
| ------------------- | ------------ | -------- | -------------- |
| brand-accent-green  | --green-700  | #009245  | Black          |
| brand-accent-gold   | --yellow-300 | #fbb03b  | Black          |
| brand-accent-orange | --orange-500 | #f15a24  | Black          |
| brand-accent-pink   | --pink-400   | #ff7bac  | Black          |
| brand-accent-red    | --red-700    | #ce1432  | White          |

## Semantic colors

### Background colors

Use these colors as the background color for pages or components.

| Property Name           | Value | Hex Code | Usage |
| ----------------------- | ----- | -------- | ----- |
| --hc-background-default |

- <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a>
- --hc-white
- #FFFFFF | #ffffff | Primary page background. |

| --hc-background-hover | --hc-gray-50 | <a href="#"><img src="https://readme-swatches.vercel.app/f9fafb?style=round" valign="middle"></a> #f9fafb | Hover state for components using the default background color. |
| --hc-background-inverse | --hc-gray-700 | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153 | Inverse of hc-background-default. Use to provide high contrast to a section of a page. |
| --hc-background-disabled | --hc-gray-300 | <a href="#"><img src="https://readme-swatches.vercel.app/d1d5db?style=round" valign="middle"></a> #d1d5db | Background for disabled UI elements like buttons or inputs. |
| --hc-background-brand | --hc-blue-700 | <a href="#"><img src="https://readme-swatches.vercel.app/0058a4?style=round" valign="middle"></a> #0058a4 | Main brand color. |
| --hc-background-brand-hover | --hc-blue-900 | <a href="#"><img src="https://readme-swatches.vercel.app/113c66?style=round" valign="middle"></a> #113c66 | Hover state for brand-colored components. |
| --hc-background-brand-active | --hc-blue-950 | <a href="#"><img src="https://readme-swatches.vercel.app/07284a?style=round" valign="middle"></a> #07284a | Active state for brand-colored components. |
| --hc-background-brand-inverse | --hc-blue-300 | <a href="#"><img src="https://readme-swatches.vercel.app/7bc6fe?style=round" valign="middle"></a> #7bc6fe | Inverse of brand color. Use when placing brand-colored components against a dark background. |
| --hc-background-brand-alternate | --hc-blue-900 | <a href="#"><img src="https://readme-swatches.vercel.app/113c66?style=round" valign="middle"></a> #113c66 | Alternate brand color. Use to contrast with primary brand color. |
| --hc-background-interactive | --hc-ui-blue-600 | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2 | Background for interactive components, such as buttons. |
| --hc-background-interactive-hover | --hc-ui-blue-700 | <a href="#"><img src="https://readme-swatches.vercel.app/0b35b2?style=round" valign="middle"></a> #0b35b2 | Hover state background for interactive components. |
| --hc-background-interactive-active | --hc-ui-blue-800 | <a href="#"><img src="https://readme-swatches.vercel.app/11267f?style=round" valign="middle"></a> #11267f | Active state background for interactive components. |
| --hc-background-error | --hc-red-50 | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a> #fff5f5 | Background for components in an error state. |

### Border colors

These colors are used for the border color of components, such as input fields.

| Property Name                 | Value                       | Hex Code                                                                                                                  | Usage                                                                   |
| ----------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| --hc-border-color-focus-inner | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a> #ffffff                 | Used for inner focus rings to ensure high contrast on dark backgrounds. |
| --hc-border-color-focus-outer | --hc-background-interactive | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a> #0047e2                 | Used for outer forcus ring of interactive elements.                     |
| --hc-border-color-subtle      | --hc-gray-300               | <a href="#"><img src="https://readme-swatches.vercel.app/6a7282?style=round" valign="middle"></a> #6a7282                 | For low-emphasis borders like dividers.                                 |
| --hc-border-color-strong      | --hc-gray-700               | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153                 | For high-emphasis borders such as form fields.                          |
| --hc-border-color-error       | --hc-red-700                | <a href="#"><img src="https://readme-swatches.vercel.app/ce1432?style=round" valign="middle"></a> #ce1432                 | Used to indicate error states in form fields or alerts.                 |
| --hc-border-color-disabled    | --hc-gray-300               | <a href="#"><img src="https://readme-swatches.vercel.app/d1d5db?style=round" valign="middle"></a> #d1d5db                 | For disabled components with medium contrast.                           |
| --hc-border-color-inverse     | --hc-gray-900               | <a href="#"><img src="https://readme-swatches.vercel.app/101828?style=round" valign="middle"></a> #101828                 | For borders on dark backgrounds.                                        |
| --hc-border-color-on-color    | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff                 | For borders on dark backgrounds                                         |
| --hc-border-subtle-on-color   | rgba(255, 255, 255, 0.2)    | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a>rgba(255, 255, 255, 0.2) | For subtle borders on dark backgrounds.                                 |

<!-- ### Button colors

| Property Name                        | Value                               | Hex Code                                                                                                                |
| ------------------------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| --hc-button-primary                  | --hc-background-interactive         | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2               |
| --hc-button-primary-hover            | --hc-background-interactive-hover   | <a href="#"><img src="https://readme-swatches.vercel.app/0b35b2?style=round" valign="middle"></a> #0b35b2               |
| --hc-button-primary-active           | --hc-background-interactive-active  | <a href="#"><img src="https://readme-swatches.vercel.app/11267f?style=round" valign="middle"></a> #11267f               |
| --hc-button-secondary                | --hc-white                          | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff               |
| --hc-button-secondary-hover          | --hc-background-interactive-hover   | <a href="#"><img src="https://readme-swatches.vercel.app/0b35b2?style=round" valign="middle"></a> #0b35b2               |
| --hc-button-secondary-active         | --hc-background-interactive-active  | <a href="#"><img src="https://readme-swatches.vercel.app/11267f?style=round" valign="middle"></a> #11267f               |
| --hc-button-secondary-border         | --hc-background-interactive         | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2               |
| --hc-button-tertiary                 | --hc-white                          | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff               |
| --hc-button-tertiary-hover           | --hc-black                          | <a href="#"><img src="https://readme-swatches.vercel.app/000000?style=round" valign="middle"></a> #000000               |
| --hc-button-tertiary-active          | --hc-gray-900                       | <a href="#"><img src="https://readme-swatches.vercel.app/101828?style=round" valign="middle"></a> #101828               |
| --hc-button-tertiary-border          | --hc-black                          | <a href="#"><img src="https://readme-swatches.vercel.app/000000?style=round" valign="middle"></a> #000000               |
| --hc-button-danger                   | --hc-red-700                        | <a href="#"><img src="https://readme-swatches.vercel.app/ce1432?style=round" valign="middle"></a> #ce1432               |
| --hc-button-danger-hover             | --hc-red-900                        | <a href="#"><img src="https://readme-swatches.vercel.app/88132d?style=round" valign="middle"></a> #88132d               |
| --hc-button-danger-active            | --hc-red-950                        | <a href="#"><img src="https://readme-swatches.vercel.app/4c0513?style=round" valign="middle"></a> #4c0513               |
| --hc-button-border                   | --hc-background-interactive         | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2               |
| --hc-button-primary-on-dark          | --hc-white                          | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff               |
| --hc-button-primary-on-dark-hover    | --hc-gray-50                        | <a href="#"><img src="https://readme-swatches.vercel.app/f9fafb?style=round" valign="middle"></a> #f9fafb               |
| --hc-button-primary-on-dark-active   | --hc-gray-100                       | <a href="#"><img src="https://readme-swatches.vercel.app/f3f4f6?style=round" valign="middle"></a> #f3f4f6               |
| --hc-button-secondary-on-dark        | --hc-transparent                    | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a>rgba(255, 255, 255, 0) |
| --hc-button-secondary-on-dark-hover  | --hc-gray-50                        | <a href="#"><img src="https://readme-swatches.vercel.app/f9fafb?style=round" valign="middle"></a> #f9fafb               |
| --hc-button-secondary-on-dark-active | --hc-gray-100                       | <a href="#"><img src="https://readme-swatches.vercel.app/f3f4f6?style=round" valign="middle"></a> #f3f4f6               |
| --hc-button-secondary-on-dark-border | --hc-white                          | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff               |
| --hc-button-tertiary-on-dark         | --hc-white                          | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff               |
| --hc-button-tertiary-on-dark-hover   | --hc-gray-50                        | <a href="#"><img src="https://readme-swatches.vercel.app/f9fafb?style=round" valign="middle"></a> #f9fafb               |
| --hc-button-tertiary-on-dark-active  | --hc-gray-100                       | <a href="#"><img src="https://readme-swatches.vercel.app/f3f4f6?style=round" valign="middle"></a> #f3f4f6               |
| --hc-button-disabled                 | --hc-background-background-disabled | <a href="#"><img src="https://readme-swatches.vercel.app/d1d5db?style=round" valign="middle"></a> #d1d5db               |
| --hc-button-separator                | --hc-gray-200                       | <a href="#"><img src="https://readme-swatches.vercel.app/e5e7eb?style=round" valign="middle"></a> #e5e7eb               | -->

### Field colors

These colors are used to style fields, like text input and text area.

| Property Name           | Value                    | Hex Code                                                                                                  | Usage                                                                                       |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| --hc-field-background   | --hc-background-default  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Default background for input fields and form elements.                                      |
| --hc-field-border-color | --hc-border-color-strong | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153 | Border color for input fields, text areas, and other fields.                                |
| --hc-field-error        | --hc-red-50              | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a> #fff5f5 | Background color for fields in an error state, often paired with `--hc-border-color-error`. |

### Icon colors

Use these colors to style icons against various backgrounds. Use the support colors in situations where color has semantic meaning, such as red for error or green for success.

| Property Name                    | Value                       | Hex Code                                                                                                  | Usage                                                     |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| --hc-icon-primary                | --hc-gray-900               | <a href="#"><img src="https://readme-swatches.vercel.app/101828?style=round" valign="middle"></a> #101828 | For icons used in high-emphasis UI elements.              |
| --hc-icon-secondary              | --hc-gray-700               | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153 | Less emphasized color for icons in secondary UI elements. |
| --hc-icon-on-color               | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Icons placed on dark backgrounds.                         |
| --hc-icon-inverse                | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Icons placed on dark backgrounds.                         |
| --hc-icon-disabled               | --hc-gray-500               | <a href="#"><img src="https://readme-swatches.vercel.app/6a7282?style=round" valign="middle"></a> #6a7282 | Disabled or inactive states.                              |
| --hc-icon-icon-on-color-disabled | --hc-gray-400               | <a href="#"><img src="https://readme-swatches.vercel.app/99a1af?style=round" valign="middle"></a> #99a1af | Disabled icons on colored backgrounds.                    |
| --hc-icon-interactive            | --hc-background-interactive | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2 | For interactive icons like buttons or toggles.            |
| --hc-icon-info                   | --hc-text-info              | <a href="#"><img src="https://readme-swatches.vercel.app/0c1555?style=round" valign="middle"></a> #0c1555 | Icons representing informational messages or tooltips.    |
| --hc-icon-info-inverse           | --hc-support-info           | <a href="#"><img src="https://readme-swatches.vercel.app/0c1555?style=round" valign="middle"></a> #c6d9ff | Info icons on dark or colored backgrounds.                |
| --hc-icon-success                | --hc-text-success           | <a href="#"><img src="https://readme-swatches.vercel.app/085f33?style=round" valign="middle"></a> #085f33 | Icons indicating success or positive status.              |
| --hc-icon-success-inverse        | --hc-support-success        | <a href="#"><img src="https://readme-swatches.vercel.app/085f33?style=round" valign="middle"></a> #d6ffe9 | Success icons on dark or colored backgrounds.             |
| --hc-icon-warning                | --hc-text-warning           | <a href="#"><img src="https://readme-swatches.vercel.app/78250f?style=round" valign="middle"></a> #78250f | Icons indicating warnings or cautionary messages.         |
| --hc-icon-warning-inverse        | --hc-support-warning        | <a href="#"><img src="https://readme-swatches.vercel.app/78250f?style=round" valign="middle"></a> #feeac7 | Warning icons on dark or colored backgrounds.             |
| --hc-icon-error                  | --hc-text-error             | <a href="#"><img src="https://readme-swatches.vercel.app/88132d?style=round" valign="middle"></a> #88132d | Icons indicating errors or critical issues.               |
| --hc-icon-error-inverse          | --hc-support-error          | <a href="#"><img src="https://readme-swatches.vercel.app/ffe4e4?style=round" valign="middle"></a> #ffe4e4 | Error icons on dark or colored backgrounds.               |

### Link colors

This group of colors is used to style links.

| Property Name           | Value                       | Hex Code                                                                                                  | Usage                            |
| ----------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- | -------------------------------- |
| --hc-link-primary       | --hc-background-interactive | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2 | Link in default state.           |
| --hc-link-inverse       | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Link color for dark backgrounds. |
| --hc-link-primary-hover | --hc-background-brand-hover | <a href="#"><img src="https://readme-swatches.vercel.app/113c66?style=round" valign="middle"></a> #113c66 | Link when hovered.               |

### Support colors

Use the support colors in components where color has semantic meaning, such as an alert notifying something was successfully submitted.

| Property Name                | Value           | Hex Code                                                                                                  | Usage                                                                           |
| ---------------------------- | --------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| --hc-support-error           | --hc-red-100    | <a href="#"><img src="https://readme-swatches.vercel.app/ffe4e4?style=round" valign="middle"></a> #ffe4e4 | Use for backgrounds of danger or error banners or alerts.                       |
| --hc-support-error-hover     | --hc-red-200    | <a href="#"><img src="https://readme-swatches.vercel.app/88132d?style=round" valign="middle"></a> #88132d | Hover color for interactive warning components.                                 |
| --hc-support-error-active    | --hc-red-300    | <a href="#"><img src="https://readme-swatches.vercel.app/4c0513?style=round" valign="middle"></a> #4c0513 | Use for active or pressed states of error-related alerts.                       |
| --hc-support-error-inverse   | --hc-red-800    | <a href="#"><img src="https://readme-swatches.vercel.app/9f122d?style=round" valign="middle"></a> #9f122d | Use for high contrast elements against error background, such as borders.       |
| --hc-support-info            | --hc-blue-100   | <a href="#"><img src="https://readme-swatches.vercel.app/dfefff?style=round" valign="middle"></a> #dfefff | Use for backgrounds of informational banners.                                   |
| --hc-support-info-hover      | --hc-blue-200   | <a href="#"><img src="https://readme-swatches.vercel.app/054c87?style=round" valign="middle"></a> #054c87 | Hover color for interactive informational components.                           |
| --hc-support-info-active     | --hc-blue-300   | <a href="#"><img src="https://readme-swatches.vercel.app/0058a4?style=round" valign="middle"></a> #0058a4 | Color for active or pressed states of info-related components.                  |
| --hc-support-info-inverse    | --hc-blue-900   | <a href="#"><img src="https://readme-swatches.vercel.app/113c66?style=round" valign="middle"></a> #113c66 | Use for high contrast elements against info background, such as borders.        |
| --hc-support-success         | --hc-green-100  | <a href="#"><img src="https://readme-swatches.vercel.app/d6ffe9?style=round" valign="middle"></a> #d6ffe9 | Background color for success messages, confirmations, or background highlights. |
| --hc-support-success-hover   | --hc-green-200  | <a href="#"><img src="https://readme-swatches.vercel.app/085f33?style=round" valign="middle"></a> #085f33 | Color for interactive success elements on hover.                                |
| --hc-support-success-active  | --hc-green-300  | <a href="#"><img src="https://readme-swatches.vercel.app/00361a?style=round" valign="middle"></a> #00361a | Color of active state for components with success message.                      |
| --hc-support-success-inverse | --hc-green-800  | <a href="#"><img src="https://readme-swatches.vercel.app/06753b?style=round" valign="middle"></a> #06753b | Use for high contrast elements against success background, such as borders.     |
| --hc-support-warning         | --hc-yellow-100 | <a href="#"><img src="https://readme-swatches.vercel.app/feeac7?style=round" valign="middle"></a> #feeac7 | Use for backgrounds of warning banners or alerts.                               |
| --hc-support-warning-hover   | --hc-yellow-200 | <a href="#"><img src="https://readme-swatches.vercel.app/78250f?style=round" valign="middle"></a> #78250f | Apply to warning elements on hover to indicate interactivity or escalation.     |
| --hc-support-warning-active  | --hc-yellow-300 | <a href="#"><img src="https://readme-swatches.vercel.app/451003?style=round" valign="middle"></a> #451003 | Use for active states of warning-related buttons or alerts.                     |
| --hc-support-warning-inverse | --hc-yellow-800 | <a href="#"><img src="https://readme-swatches.vercel.app/922b0e?style=round" valign="middle"></a> #922b0e | Use for high contrast elements against warning background, such as borders.     |

### Text colors

These colors are used for various types of text, such as body copy, image captions or error messages.

| Property Name               | Value                       | Hex Code                                                                                                  | Usage Guidance                                                                                    |
| --------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| --hc-text-primary           | --hc-gray-900               | <a href="#"><img src="https://readme-swatches.vercel.app/101828?style=round" valign="middle"></a> #101828 | For primary content on page, such as body copy.                                                   |
| --hc-text-secondary         | --hc-gray-700               | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153 | For secondary content like captions or metadata.                                                  |
| --hc-text-hint              | --hc-gray-700               | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153 | Used for hint text in form fields or contextual help.                                             |
| --hc-text-placeholder       | --hc-gray-400               | <a href="#"><img src="https://readme-swatches.vercel.app/99a1af?style=round" valign="middle"></a> #99a1af | Use for placeholder text in input fields. Note that placeholder text should almost never be used. |
| --hc-text-disabled          | --hc-gray-500               | <a href="#"><img src="https://readme-swatches.vercel.app/6a7282?style=round" valign="middle"></a> #6a7282 | For disabled text elements to indicate non-interactivity.                                         |
| --hc-text-on-color-disabled | --hc-gray-400               | <a href="#"><img src="https://readme-swatches.vercel.app/99a1af?style=round" valign="middle"></a> #99a1af | Disabled text on dark backgrounds.                                                                |
| --hc-text-success           | --hc-green-950              | <a href="#"><img src="https://readme-swatches.vercel.app/00361a?style=round" valign="middle"></a> #00361a | Text indicating success or positive status.                                                       |
| --hc-text-success-inverse   | --hc-support-success        | <a href="#"><img src="https://readme-swatches.vercel.app/d6ffe9?style=round" valign="middle"></a> #d6ffe9 | Success text on dark backgrounds.                                                                 |
| --hc-text-info              | --hc-support-info-inverse   | <a href="#"><img src="https://readme-swatches.vercel.app/113c66?style=round" valign="middle"></a> #113c66 | Informational messages or labels.                                                                 |
| --hc-text-info-inverse      | --hc-support-info           | <a href="#"><img src="https://readme-swatches.vercel.app/dfefff?style=round" valign="middle"></a> #dfefff | Info text on dark backgrounds.                                                                    |
| --hc-text-warning           | --hc-yellow-900             | <a href="#"><img src="https://readme-swatches.vercel.app/78250f?style=round" valign="middle"></a> #78250f | Text indicating warnings or cautionary messages.                                                  |
| --hc-text-warning-inverse   | --hc-support-warning        | <a href="#"><img src="https://readme-swatches.vercel.app/feeac7?style=round" valign="middle"></a> #feeac7 | Warning text on dark backgrounds.                                                                 |
| --hc-text-error             | --hc-red-800                | <a href="#"><img src="https://readme-swatches.vercel.app/9f122d?style=round" valign="middle"></a> #9f122d | Text indicating errors or critical issues.                                                        |
| --hc-text-error-inverse     | --hc-support-error          | <a href="#"><img src="https://readme-swatches.vercel.app/ffe4e4?style=round" valign="middle"></a> #ffe4e4 | Error text on dark backgrounds.                                                                   |
| --hc-text-on-color          | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Text on colored backgrounds or buttons.                                                           |
| --hc-text-inverse           | --hc-white                  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Text on colored backgrounds or buttons.                                                           |
| --hc-text-interactive       | --hc-background-interactive | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2 | For interactive text elements like links or buttons.                                              |

| Property Name           | Value                    | Hex Code                                                                                                  | Usage Guidance                                                                         |
| ----------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| --hc-field-background   | --hc-background-default  | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff | Default background color for input fields and form elements.                           |
| --hc-field-border-color | --hc-border-color-strong | <a href="#"><img src="https://readme-swatches.vercel.app/6a7282?style=round" valign="middle"></a> #6a7282 | Used for field borders.                                                                |
| --hc-field-error        | --hc-red-50              | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a> #fff5f5 | Use as background color for fields in error state to draw attention without harshness. |

## Base colors

| Property Name    | Value                                                                                                                    | Contrasts with |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| --hc-black       | <a href="#"><img src="https://readme-swatches.vercel.app/000000?style=round" valign="middle"></a> #000000                | White          |
| --hc-white       | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> #ffffff                | Black          |
| --hc-transparent | <a href="#"><img src="https://readme-swatches.vercel.app/ffffff?style=round" valign="middle"></a> rgba(255, 255, 255, 0) | Not applicable |

### Blue

| Property Name | Value                                                                                                     | Contrasts with |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-blue-50  | <a href="#"><img src="https://readme-swatches.vercel.app/f0f7ff?style=round" valign="middle"></a> #f0f7ff | Black          |
| --hc-blue-100 | <a href="#"><img src="https://readme-swatches.vercel.app/dfefff?style=round" valign="middle"></a> #dfefff | Black          |
| --hc-blue-200 | <a href="#"><img src="https://readme-swatches.vercel.app/b9defe?style=round" valign="middle"></a> #b9defe | Black          |
| --hc-blue-300 | <a href="#"><img src="https://readme-swatches.vercel.app/7bc6fe?style=round" valign="middle"></a> #7bc6fe | Black          |
| --hc-blue-400 | <a href="#"><img src="https://readme-swatches.vercel.app/34a8fc?style=round" valign="middle"></a> #34a8fc | Black          |
| --hc-blue-500 | <a href="#"><img src="https://readme-swatches.vercel.app/0a8eed?style=round" valign="middle"></a> #0a8eed | Black          |
| --hc-blue-600 | <a href="#"><img src="https://readme-swatches.vercel.app/006fcb?style=round" valign="middle"></a> #006fcb | White          |
| --hc-blue-700 | <a href="#"><img src="https://readme-swatches.vercel.app/0058a4?style=round" valign="middle"></a> #0058a4 | White          |
| --hc-blue-800 | <a href="#"><img src="https://readme-swatches.vercel.app/054c87?style=round" valign="middle"></a> #054c87 | White          |
| --hc-blue-900 | <a href="#"><img src="https://readme-swatches.vercel.app/113c66?style=round" valign="middle"></a> #113c66 | White          |
| --hc-blue-950 | <a href="#"><img src="https://readme-swatches.vercel.app/07284a?style=round" valign="middle"></a> #07284a | White          |

### Gray

| Property Name | Value                                                                                                     | Contrasts with |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-gray-50  | <a href="#"><img src="https://readme-swatches.vercel.app/f9fafb?style=round" valign="middle"></a> #f9fafb | Black          |
| --hc-gray-100 | <a href="#"><img src="https://readme-swatches.vercel.app/f3f4f6?style=round" valign="middle"></a> #f3f4f6 | Black          |
| --hc-gray-200 | <a href="#"><img src="https://readme-swatches.vercel.app/e5e7eb?style=round" valign="middle"></a> #e5e7eb | Black          |
| --hc-gray-300 | <a href="#"><img src="https://readme-swatches.vercel.app/d1d5db?style=round" valign="middle"></a> #d1d5db | Black          |
| --hc-gray-400 | <a href="#"><img src="https://readme-swatches.vercel.app/99a1af?style=round" valign="middle"></a> #99a1af | Black          |
| --hc-gray-500 | <a href="#"><img src="https://readme-swatches.vercel.app/6a7282?style=round" valign="middle"></a> #6a7282 | White          |
| --hc-gray-600 | <a href="#"><img src="https://readme-swatches.vercel.app/4a5565?style=round" valign="middle"></a> #4a5565 | White          |
| --hc-gray-700 | <a href="#"><img src="https://readme-swatches.vercel.app/364153?style=round" valign="middle"></a> #364153 | White          |
| --hc-gray-800 | <a href="#"><img src="https://readme-swatches.vercel.app/1e2939?style=round" valign="middle"></a> #1e2939 | White          |
| --hc-gray-900 | <a href="#"><img src="https://readme-swatches.vercel.app/101828?style=round" valign="middle"></a> #101828 | White          |
| --hc-gray-950 | <a href="#"><img src="https://readme-swatches.vercel.app/030712?style=round" valign="middle"></a> #030712 | White          |

### Green

| Property Name  | Value                                                                                                     | Contrasts with |
| -------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-green-50  | <a href="#"><img src="https://readme-swatches.vercel.app/edfff5?style=round" valign="middle"></a> #edfff5 | Black          |
| --hc-green-100 | <a href="#"><img src="https://readme-swatches.vercel.app/d6ffe9?style=round" valign="middle"></a> #d6ffe9 | Black          |
| --hc-green-200 | <a href="#"><img src="https://readme-swatches.vercel.app/afffd4?style=round" valign="middle"></a> #afffd4 | Black          |
| --hc-green-300 | <a href="#"><img src="https://readme-swatches.vercel.app/71ffb4?style=round" valign="middle"></a> #71ffb4 | Black          |
| --hc-green-400 | <a href="#"><img src="https://readme-swatches.vercel.app/2dfb8c?style=round" valign="middle"></a> #2dfb8c | Black          |
| --hc-green-500 | <a href="#"><img src="https://readme-swatches.vercel.app/02e56c?style=round" valign="middle"></a> #02e56c | Black          |
| --hc-green-600 | <a href="#"><img src="https://readme-swatches.vercel.app/00bf56?style=round" valign="middle"></a> #00bf56 | Black          |
| --hc-green-700 | <a href="#"><img src="https://readme-swatches.vercel.app/009245?style=round" valign="middle"></a> #009245 | Black          |
| --hc-green-800 | <a href="#"><img src="https://readme-swatches.vercel.app/06753b?style=round" valign="middle"></a> #06753b | White          |
| --hc-green-900 | <a href="#"><img src="https://readme-swatches.vercel.app/085f33?style=round" valign="middle"></a> #085f33 | White          |
| --hc-green-950 | <a href="#"><img src="https://readme-swatches.vercel.app/00361a?style=round" valign="middle"></a> #00361a | White          |

### Orange

| Property Name   | Value                                                                                                     | Contrasts with |
| --------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-orange-50  | <a href="#"><img src="https://readme-swatches.vercel.app/fef5ee?style=round" valign="middle"></a> #fef5ee | Black          |
| --hc-orange-100 | <a href="#"><img src="https://readme-swatches.vercel.app/fde7d7?style=round" valign="middle"></a> #fde7d7 | Black          |
| --hc-orange-200 | <a href="#"><img src="https://readme-swatches.vercel.app/fbccad?style=round" valign="middle"></a> #fbccad | Black          |
| --hc-orange-300 | <a href="#"><img src="https://readme-swatches.vercel.app/f8a779?style=round" valign="middle"></a> #f8a779 | Black          |
| --hc-orange-400 | <a href="#"><img src="https://readme-swatches.vercel.app/f47943?style=round" valign="middle"></a> #f47943 | Black          |
| --hc-orange-500 | <a href="#"><img src="https://readme-swatches.vercel.app/f15a24?style=round" valign="middle"></a> #f15a24 | Black          |
| --hc-orange-600 | <a href="#"><img src="https://readme-swatches.vercel.app/e23d14?style=round" valign="middle"></a> #e23d14 | Black          |
| --hc-orange-700 | <a href="#"><img src="https://readme-swatches.vercel.app/bb2b13?style=round" valign="middle"></a> #bb2b13 | White          |
| --hc-orange-800 | <a href="#"><img src="https://readme-swatches.vercel.app/952517?style=round" valign="middle"></a> #952517 | White          |
| --hc-orange-900 | <a href="#"><img src="https://readme-swatches.vercel.app/782116?style=round" valign="middle"></a> #782116 | White          |
| --hc-orange-950 | <a href="#"><img src="https://readme-swatches.vercel.app/410d09?style=round" valign="middle"></a> #410d09 | White          |

### Pink

| Property Name | Value                                                                                                     | Contrasts with |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-pink-50  | <a href="#"><img src="https://readme-swatches.vercel.app/fef1f6?style=round" valign="middle"></a> #fef1f6 | Black          |
| --hc-pink-100 | <a href="#"><img src="https://readme-swatches.vercel.app/fee5ef?style=round" valign="middle"></a> #fee5ef | Black          |
| --hc-pink-200 | <a href="#"><img src="https://readme-swatches.vercel.app/ffcbe1?style=round" valign="middle"></a> #ffcbe1 | Black          |
| --hc-pink-300 | <a href="#"><img src="https://readme-swatches.vercel.app/ffa1c7?style=round" valign="middle"></a> #ffa1c7 | Black          |
| --hc-pink-400 | <a href="#"><img src="https://readme-swatches.vercel.app/ff7bac?style=round" valign="middle"></a> #ff7bac | Black          |
| --hc-pink-500 | <a href="#"><img src="https://readme-swatches.vercel.app/fa3a7c?style=round" valign="middle"></a> #fa3a7c | Black          |
| --hc-pink-600 | <a href="#"><img src="https://readme-swatches.vercel.app/ea1855?style=round" valign="middle"></a> #ea1855 | Black          |
| --hc-pink-700 | <a href="#"><img src="https://readme-swatches.vercel.app/cc0a3e?style=round" valign="middle"></a> #cc0a3e | White          |
| --hc-pink-800 | <a href="#"><img src="https://readme-swatches.vercel.app/a80c33?style=round" valign="middle"></a> #a80c33 | White          |
| --hc-pink-900 | <a href="#"><img src="https://readme-swatches.vercel.app/8c0f2e?style=round" valign="middle"></a> #8c0f2e | White          |
| --hc-pink-950 | <a href="#"><img src="https://readme-swatches.vercel.app/560116?style=round" valign="middle"></a> #560116 | White          |

### Red

| Property Name | Value                                                                                                     | Contrasts with |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-red-50   | <a href="#"><img src="https://readme-swatches.vercel.app/fff5f5?style=round" valign="middle"></a> #fff5f5 | Black          |
| --hc-red-100  | <a href="#"><img src="https://readme-swatches.vercel.app/ffe4e4?style=round" valign="middle"></a> #ffe4e4 | Black          |
| --hc-red-200  | <a href="#"><img src="https://readme-swatches.vercel.app/fecdcf?style=round" valign="middle"></a> #fecdcf | Black          |
| --hc-red-300  | <a href="#"><img src="https://readme-swatches.vercel.app/fda4a8?style=round" valign="middle"></a> #fda4a8 | Black          |
| --hc-red-400  | <a href="#"><img src="https://readme-swatches.vercel.app/fb717a?style=round" valign="middle"></a> #fb717a | Black          |
| --hc-red-500  | <a href="#"><img src="https://readme-swatches.vercel.app/f43f4f?style=round" valign="middle"></a> #f43f4f | Black          |
| --hc-red-600  | <a href="#"><img src="https://readme-swatches.vercel.app/e11d38?style=round" valign="middle"></a> #e11d38 | White          |
| --hc-red-700  | <a href="#"><img src="https://readme-swatches.vercel.app/ce1432?style=round" valign="middle"></a> #ce1432 | White          |
| --hc-red-800  | <a href="#"><img src="https://readme-swatches.vercel.app/9f122d?style=round" valign="middle"></a> #9f122d | White          |
| --hc-red-900  | <a href="#"><img src="https://readme-swatches.vercel.app/88132d?style=round" valign="middle"></a> #88132d | White          |
| --hc-red-950  | <a href="#"><img src="https://readme-swatches.vercel.app/4c0513?style=round" valign="middle"></a> #4c0513 | White          |

### Sky blue

| Property Name | Value                                                                                                     | Contrasts with |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-sky-50   | <a href="#"><img src="https://readme-swatches.vercel.app/f0faff?style=round" valign="middle"></a> #f0faff | Black          |
| --hc-sky-100  | <a href="#"><img src="https://readme-swatches.vercel.app/e1f3fd?style=round" valign="middle"></a> #e1f3fd | Black          |
| --hc-sky-200  | <a href="#"><img src="https://readme-swatches.vercel.app/bbe9fc?style=round" valign="middle"></a> #bbe9fc | Black          |
| --hc-sky-300  | <a href="#"><img src="https://readme-swatches.vercel.app/7fd9fa?style=round" valign="middle"></a> #7fd9fa | Black          |
| --hc-sky-400  | <a href="#"><img src="https://readme-swatches.vercel.app/44c8f5?style=round" valign="middle"></a> #44c8f5 | Black          |
| --hc-sky-500  | <a href="#"><img src="https://readme-swatches.vercel.app/12afe5?style=round" valign="middle"></a> #12afe5 | Black          |
| --hc-sky-600  | <a href="#"><img src="https://readme-swatches.vercel.app/068dc3?style=round" valign="middle"></a> #068dc3 | Black          |
| --hc-sky-700  | <a href="#"><img src="https://readme-swatches.vercel.app/06709e?style=round" valign="middle"></a> #06709e | White          |
| --hc-sky-800  | <a href="#"><img src="https://readme-swatches.vercel.app/095e83?style=round" valign="middle"></a> #095e83 | White          |
| --hc-sky-900  | <a href="#"><img src="https://readme-swatches.vercel.app/0e4f6c?style=round" valign="middle"></a> #0e4f6c | White          |
| --hc-sky-950  | <a href="#"><img src="https://readme-swatches.vercel.app/093248?style=round" valign="middle"></a> #093248 | White          |

### UI blue

| Property Name    | Value                                                                                                     | Contrasts with |
| ---------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-ui-blue-50  | <a href="#"><img src="https://readme-swatches.vercel.app/eff3ff?style=round" valign="middle"></a> #eff3ff | Black          |
| --hc-ui-blue-100 | <a href="#"><img src="https://readme-swatches.vercel.app/c6d9ff?style=round" valign="middle"></a> #c6d9ff | Black          |
| --hc-ui-blue-200 | <a href="#"><img src="https://readme-swatches.vercel.app/a8c6ff?style=round" valign="middle"></a> #a8c6ff | Black          |
| --hc-ui-blue-300 | <a href="#"><img src="https://readme-swatches.vercel.app/6a9cff?style=round" valign="middle"></a> #6a9cff | Black          |
| --hc-ui-blue-400 | <a href="#"><img src="https://readme-swatches.vercel.app/407eff?style=round" valign="middle"></a> #407eff | Black          |
| --hc-ui-blue-500 | <a href="#"><img src="https://readme-swatches.vercel.app/1d62f4?style=round" valign="middle"></a> #1d62f4 | White          |
| --hc-ui-blue-600 | <a href="#"><img src="https://readme-swatches.vercel.app/0047e2?style=round" valign="middle"></a> #0047e2 | White          |
| --hc-ui-blue-700 | <a href="#"><img src="https://readme-swatches.vercel.app/0b35b2?style=round" valign="middle"></a> #0b35b2 | White          |
| --hc-ui-blue-800 | <a href="#"><img src="https://readme-swatches.vercel.app/11267f?style=round" valign="middle"></a> #11267f | White          |
| --hc-ui-blue-900 | <a href="#"><img src="https://readme-swatches.vercel.app/0c1555?style=round" valign="middle"></a> #0c1555 | White          |
| --hc-ui-blue-950 | <a href="#"><img src="https://readme-swatches.vercel.app/060941?style=round" valign="middle"></a> #060941 | White          |

### Yellow

| Property Name   | Value                                                                                                     | Contrasts with |
| --------------- | --------------------------------------------------------------------------------------------------------- | -------------- |
| --hc-yellow-50  | <a href="#"><img src="https://readme-swatches.vercel.app/fff8eb?style=round" valign="middle"></a> #fff8eb | Black          |
| --hc-yellow-100 | <a href="#"><img src="https://readme-swatches.vercel.app/feeac7?style=round" valign="middle"></a> #feeac7 | Black          |
| --hc-yellow-200 | <a href="#"><img src="https://readme-swatches.vercel.app/fdd48a?style=round" valign="middle"></a> #fdd48a | Black          |
| --hc-yellow-300 | <a href="#"><img src="https://readme-swatches.vercel.app/fbb03b?style=round" valign="middle"></a> #fbb03b | Black          |
| --hc-yellow-400 | <a href="#"><img src="https://readme-swatches.vercel.app/fa9e25?style=round" valign="middle"></a> #fa9e25 | Black          |
| --hc-yellow-500 | <a href="#"><img src="https://readme-swatches.vercel.app/f47a0c?style=round" valign="middle"></a> #f47a0c | Black          |
| --hc-yellow-600 | <a href="#"><img src="https://readme-swatches.vercel.app/d85607?style=round" valign="middle"></a> #d85607 | Black          |
| --hc-yellow-700 | <a href="#"><img src="https://readme-swatches.vercel.app/bb2b13?style=round" valign="middle"></a> #bb2b13 | White          |
| --hc-yellow-800 | <a href="#"><img src="https://readme-swatches.vercel.app/922b0e?style=round" valign="middle"></a> #922b0e | White          |
| --hc-yellow-900 | <a href="#"><img src="https://readme-swatches.vercel.app/78250f?style=round" valign="middle"></a> #78250f | White          |
| --hc-yellow-950 | <a href="#"><img src="https://readme-swatches.vercel.app/451003?style=round" valign="middle"></a> #451003 | White          |
