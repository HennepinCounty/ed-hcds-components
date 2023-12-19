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

## index.css

Precompiled CSS of all files. This file, along with JS files in some components, contain the complete design system. This file does not contain any JS.

## Primitives

# Recommended extensions

[CSS Navigation](https://marketplace.visualstudio.com/items?itemName=pucelle.vscode-css-navigation)
Adds autocomplete and "Go to defintion" for CSS classes.

[CSS Variable Autocomplete](https://marketplace.visualstudio.com/items?itemName=vunguyentuan.vscode-css-variables)
Adds autocomplete and "Go to defintion" for CSS variables.

[Figma for VS Code](https://marketplace.visualstudio.com/items?itemName=figma.figma-vscode-extension)
Integrates Figma and VS Code.

[htmltagwrap](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)
Highlight code then press alt+W to instantly wrap the selected in opening/closing brackets

[Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
Host a local server window inside VS Code, so that you don't need to switch between VS Code and browsers.

[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)
Use to update compiled CSS from index.scss after any file save in project.

**index.scss is currently in the primtives folder**

<summary>Compile settings currently used</summary>
<details>
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
`
</details>

[Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
Use for code formatting. Currently using default settings.
