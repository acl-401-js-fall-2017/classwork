CSS with React
===

## Questions?
* ?

## CSS in a Component world
* per-component css
* still have other "global" css
* By default per-component still global

## Solutions

### SCSS (SASS) 

SCSS is a variation of SASS, which stands for "syntactically awesome stylesheets".

SCSS gives us the ability to do the following things with our CSS styles
* creation of modular css "partials"
* nesting of CSS rules
* ability to import partials into/from other partial files
* ability to create functional CSS components and mixins
* ability to use math operators in CSS

[sass getting started guide](http://sass-lang.com/guide)

SCSS partials are often modularized to fit the following structure:
- **style**
  - **base**
    - `_base.scss`
    - `_reset.scss`
  - **theme**
    - `_vars.scss`
  - **layout**
    - `_header.scss`
    - `_footer.scss`
    - `_content.scss`
- **component**
  - **my-component-dir**
    - `my-component-dir.scss`
  - **another-component-dir**
    - `another-component-dir.scss`
  
#### `create-react-app` [setup](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc)
        
* ~~we loose hot reloading :(~~
* use VSCode settings to not show css files
* remember, you still import the `.css` file in the component

#### Features:
* nesting FTW!
* variables
* importing
* (functions and more!)

Nesting and variables 99% of why we use SCSS. See `Post-CSS` as well.

### Scoping

What about scoping?
* this is the big challenge/800lb gorilla
* [eject?](https://medium.com/nulogy/how-to-use-css-modules-with-create-react-app-9e44bec2b5c2)
* [CSS Modules FTW!](https://glenmaddern.com/articles/css-modules)

### CSS in JS
* [styled components](https://www.styled-components.com/) FTW!
* [getting started](https://github.com/kitze/create-react-app-styled-components)
* New Hotness? [emotion js](https://emotion.sh/)