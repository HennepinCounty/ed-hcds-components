# ed-hcds-components

ed-hcds-components contains accessible code for building a user interface for Hennepin County digital products.
<br><br>

## Table of Contents
- [Structure](#structure)
- [Download](#downloading-and-incorporating-design-system-components)
- [Questions](#questions-and-support)

## Structure

### Components

Contains HTML, CSS, and JS for each component

- Buttons
- Accordions
- Radio buttons, input fields
- etc

### CSS

Contains combined CSS output from utilities and primitives

#### index.css

Precompiled CSS of all files. This file, along with JS files in some components, contain the complete design system.

This file does not contain any JS.

### Primitives

Contains variables for colors and spacing

### Utilities

Contains utility classes similar to Tailwind CSS

<br>

## Downloading and incorporating design system components

### Download the ZIP file

1. Go to the Hennepin County GitHub repository (link to https://github.com/HennepinCounty/ed-hcds-components)
2. Navigate to the green “Code” button and select “Download ZIP” from the options.
3. After downloading the ZIP file, extract the contents.

### Add the component files

1. Find the “components” directory in the extracted folder. This directory stores individual components and their files (HTML, CSS, and sometimes JS).
2. Copy the files from the directory into your project’s corresponding directories. For example, copy the “button” files to your project’s “buttons” directory.

### Incorporate the Design System CSS Stylesheet

1. The file ./CSS/index.css is a compiled CSS file that includes all the CSS for the design system. Copy ./CSS/index.css into your project, then link it in your HTML files.
2. The index.css file is compiled from ./index.scss in the root folder. If you would like to remove any components from the stylesheet, edit what files are forwarded by ./index.scss and then recompile a new css file.
3. Note that the Search and Modal components require their nested components (button and text input field) to be imported.

### Use the components

To use a component, copy and paste the component HTML into your project, then replace any placeholder text with real content. Adjust the component’s HTML and JS as needed to fit your project needs.

- **NPM install use (experimental, for developers)**: See [README2_npm_install.md](README2_npm_install.md).

## Questions and support

If you have any questions or issues, visit office hours on Tuesdays and Thursdays from 3 p.m. to 3:30 p.m., or submit a support ticket.

<br>
