# NPM import use (experimental, for developers)

## Known issue:  Tailwind and URL-based imports

If you'd like to try importing [./CSS/indexnoresetmin.css](CSS/indexnoresetmin.css) into a project that also uses Tailwind CSS, you may notice that [it doesn't prune unused classes found in](https://github.com/tailwindlabs/tailwindcss/discussions/15391#discussioncomment-11557268) a URL-based `@import` like this:

```css
@import "https://raw.githubusercontent.com/HennepinCounty/ed-hcds-components/refs/heads/SOME-COMMIT-ID-HERE/CSS/indexnoresetmin.css";
```

## Experimental workaround:  npm install

### Bare-bones package.json

Tailwind file-based `@import`s -- even ones beginning with a `../` relative path like `../node_modules` -- seem to work fine.

Unlike, say, the [USWDS](https://www.npmjs.com/package/@uswds/uswds) _(hat tip:  thanks for the `package.json` inspiration)_, the HCDS is not published to npmjs.com.  Unlike the USWDS, the HCDS's software development lifecycle is not currently oriented toward developing a conventional NPM package as its primary deliverable.

However, `npm install` [also has](https://docs.npmjs.com/cli/commands/npm-install) a Git-URL-based syntax.

To take advantage of this and make it easy to place a copy of this repository within your local machine's `node_modules` folder, this repository now includes a [package.json](package.json) file.

Hopefully, this provides a familiar interface for fetching a copy of files from the internet into your project's file tree, and saves you the hassle of trying to add `git clone` hacks into your project's startup scripts.

### NPM install instructions

Pick your favorite commit ID from [this repository's history](https://github.com/HennepinCounty/ed-hcds-components/commits) and, swapping it in for `SOME-COMMIT-ID-HERE`, try:

```powershell
npm install 'git+https://github.com/HennepinCounty/ed-hcds-components.git#SOME-COMMIT-ID-HERE' --save-dev
```

### File-based imports

You should then be able to include an `@import` statement more like this into your Tailwind configuration:

```css
@import "../node_modules/hcds-experimental/CSS/indexnoresetmin.css";
```

### Tailwind compatibility

Now, throughout your project as as needed, you should be able use:

1. _both_ [Tailwind-native](https://tailwindcss.com/docs/styling-with-utility-classes) CSS class names like `flex`, 
1. _and_ HCDS-native CSS class names like `hc-button--danger`.

The Tailwind build engine will then strip away unused `hc-...` classes from final output, just like it strips away unused Tailwind-native classes.

### Other uses

Although this particular workaround was designed around a [known Tailwind CSS issue](https://github.com/tailwindlabs/tailwindcss/discussions/15391#discussioncomment-11557268), being able to put a snapshot of the HCDS repository's contents into your project's `node_modules` folder may come in handy with other development processes.

For example, with a copy of the [components](components) folder available in your IDE's file tree, you might find it easier to explore its `*.html` file examples.

* _(Reminder:  fresher examples than those in your chosen commit ID might exist, so don't abandon browsing the repository on the web altogether.)_

If you find any novel uses, please visit office hours as described in the main [README](README.md) and share the great news.  🎉

---

## WARNINGS

### No versioning besides commit IDs

This repository's `package.json` file is experimental, and is not intended to imply that updates to the design system will be versioned semantically.

* _(As implied by its lack of a `version` property.)_

This is why the instructions ask you to pick a specific commit ID _(rather than pinning to, say, `#main`)_.

1. Please experiment with various commits until you find a moment in time that works for your code, and `npm install` from it.
1. When you are interested in upgrading to a newer version of this repository, please experiment and find a newer specific commit ID that also works for your code.

The state of `main` should not be considered stable enough for automations to rely upon, so please do not `npm install` from `#main`.

### Package name will likely change

The `name` property of this repository's `package.json` file is subject to change without notice and might not remain **`hcds-experimental`**.

To update your code to use newer `SOME-COMMIT-ID-HERE` versions of this codebase's `package.json`, please be prepared to update your `devDependencies` in your `package.json` file and your Tailwind `@import` statements.

1. If you `npm install`ed from a newer commit ID, and if the name of this package had changed, then you would end up with _two_ different package names in your `devDependencies`.
1. If this happens, for tidiness, you may want to:
    1. manually delete the old package from your project's `package.json` file's `devDependencies`, 
    1. delete the old package name's folder from your local machine's `node_modules` folder, and 
    1. re-run `npm install` to update your project's `package-lock.json` file.