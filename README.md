# ed-hcds-components

A repo of reusable components that will be featured in the Hennepin County Design System

# Structure

## Components

Contains HTML, CSS, and JS for each component

- Buttons
- Accordions
- Radio buttons, input fields
  etc

## CSS

Contains combined CSS output from utilities and primitives

### index.css

Precompiled CSS of all files. This file, along with JS files in some components, contain the complete design system.

This file does not contain any JS.

## Primitives

Contains variables for colors and spacing

## Utilities

Contains utility classes similar to Tailwind CSS

## Downloading and incorporating design system components (H2)
Download the ZIP file
1.       Go to the Hennepin County GitHub repository (link to https://github.com/HennepinCounty/ed-hcds-components)
2.       Navigate to the green “Code” button and select “Download ZIP” from the options.
3.       After downloading the ZIP file, extract the contents.

## Add the component files
1.       Find the “components” directory in the extracted folder. This directory stores individual components and their files (HTML, CSS, and sometimes JS).
2.       Copy the files from the directory into your project’s corresponding directories. For example, copy the “button” files to your project’s “buttons” directory.

## Incorporate the Design System CSS Stylesheet
1.       The file ./CSS/index.css is a compiled CSS file that includes all the CSS for the design system. Copy ./CSS/index.css into your project, then link it in your HTML files. 
2.      The index.css file is compiled from ./index.scss in the root folder. If you would like to remove any components from the stylesheet, edit what files are forwarded by ./index.scss and then recompile a new css file.
3.     Note that the Search and Modal components require their nested components (button and text input field) to be imported.

## Use the components
 To use a component, copy and paste the component HTML into your project, then replace any placeholder text with real content.  Adjust the component’s HTML and JS as needed to fit your project needs.

Questions and support
If you have any questions or issues, visit office hours on Tuesdays and Thursdays from 3 p.m. to 3:30 p.m., or submit a support ticket


# Recommended extensions

[CSS Navigation](https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation) Adds autocomplete and "Go to defintion" for CSS classes.

[CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables) Adds autocomplete and "Go to defintion" for CSS variables.

[Figma for VS Code](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension) Integrates Figma and VS Code.

[htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap) Highlight code then press alt+W to instantly wrap the selected in opening/closing brackets

[Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) Host a local server window inside VS Code, so that you don't need to switch between VS Code and browsers.

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Use for code formatting. Currently using default settings.

[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) Use to update compiled CSS from index.scss after any file save in project.

**Live Sass Compiler currently uses these settings**

```
{
  "telemetry.enableTelemetry": false,
  "telemetry.enableCrashReporter": false,
  "update.mode": "none",
  "security.workspace.trust.untrustedFiles": "open",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "figma.autocompleteBlocks": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.useEditorConfig": false,
  "git.autofetch": true,
  "editor.wordWrap": "on",
  "git.suggestSmartCommit": false,
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "liveSassCompile.settings.compileOnWatch": false,
  "liveSassCompile.settings.watchOnLaunch": true,
  "liveSassCompile.settings.useNewCompiler": true,
  "liveSassCompile.settings.showOutputWindowOn": "Warning",
  "liveSassCompile.settings.formats": [
    {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "/CSS",
      "savePathReplacementPairs": null
    },
    {
      "format": "compressed",
      "extensionName": "min.css",
      "savePath": "/CSS",
      "savePathReplacementPairs": null,
      "generateMap": null
    }
  ],
  "liveSassCompile.settings.excludeList": [
    "/**/node_modules/**",
    "/.vscode/**"
  ],
  "liveSassCompile.settings.autoprefix": ["defaults"],
  "window.zoomLevel": 2,
  "liveSassCompile.settings.forceBaseDirectory": ""
}
```
