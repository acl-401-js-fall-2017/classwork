Webpack
===

## Misc
* Describe **everything** a developer needs to get started with your project in your `README.md`

## Webpack

* Loaders vs Plugins
  * Loaders are involved on `import`/`require`
  * Plugins do additional work outside of tree
    * Some plugins are used in conjunction with loaders (Extract Text)

### Basic setup

1. `npm i webpack -D`
1. Create `webpack.config.js` (see example)
1. Specify:
    * entry module
    * destination
1. Run `npx webpack` to create bundle.js
1. Success? Add to `package.json` as `build`

### Dev Server

**NOTE: You will need to restart webpack when config changes!!!***

1. `npm i webpack-dev-server -D`
1. Add `contentBase` to `webpack.config.js`
1. Run `npx webpack-dev-server`
1. Success? Add to `package.json` as `start`

### Add an `index.html`

1. `npm i html-webpack-plugin -D`
1. Add `HTMLPLugin` to `webpack.config.js`
1. Restart via `npm start`
1. Notice what happens when you change `add.js`

### Add `babel` for ESNext

1. `npm i babel-core babel-loader babel-preset-env -D`
1. Add `.babelrc` with preset for last two browser versions
1. Add `rule` to `webpack.config.js` for loading `.js` with babel
1. Try `npm start`
1. Change files to use ES6 modules
1. Restart and verify that it works!

### Add React

1. `npm i react react-dom`
1. `npm i babel-preset-react -D`
1. Add `'react'` to `.babelrc` presets
1. Change code to render some react jsx to `document.body`
1. Restart and verify that it works!

### Use a template for `index.html`

1. Add `index.html` to `src` that has an `id="root"` target element
1. Change config of `HTMLPlugin` to use that file
1. Change `ReactDOM.render` to target the new element
1. Restart and verify that it works!

### Add a plugin

A common plugin is `es-2015`, though it tends to be overly broad. In this case,
we are adding what we need.

1. Add a component with class properties
1. `npm install babel-plugin-transform-class-properties -D`
1. Add the plugin to your `.babelrc`
1. Restart and verify it works!

### Add `css` with style loader

1. `npm i css-loader style-loader -D`
1. Add a loader to rules
1. Add a css file
1. Restart and verify it works!

### Extract css to own file

1. `npm un style-loader -D`
1. `npm i extract-text-webpack-plugin -D`
1. Add Extract Text to `plugins` and change loader rule
1. Restart and verify it works!

### scss and local modules FTW!

1. `npm i sass-loader node-sass -D`
1. Change css loader rule
1. Change `.css` file to `.scss`, add some nested css or variables
1. Change import correct file extension
1. Restart and verify it works!
1. Try adding a `:local` and using the import in your component



