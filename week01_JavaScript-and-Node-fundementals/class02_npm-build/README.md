# Class 01 `npm`, Interfaces (API), Library Design, Function Definition versus Execution

## Questions and Feedback
* Coding
    * Indentation needs to be perfect all the time 
    * Avoid comments that label sections of code
* Read the `LAB.md` for requirement
* Order of assertions is `actual`, `expected`
* Don't "prefill" files or functions - work incrementally
* Draw out the problem domain and solution
* On your own fork, fine to merge local and push (don't need a PR)
* Lingering when stuck...
* ?

## Learning Objectives

* Setup and run a build scripts 
 
## Agenda

### Common Issues
* Coded solutions should not be hard-coded to one value or use
* WIP
    * Don't expand, limit
* Library Design
    * Not seeing the interface
    * code in tests vs code in implementation
* Function definition vs invocation/execution
* Don't know JavaScript array methods

### Importing and Exporting Modules

* Why Modules?
    * Readability
    * Organization
    * Separation of Concerns
    * Namespace ("global" scope per file)
    * Reduce Merge Conflicts
* Passing things between modules?
    * 301 - Using Global namespace has Issues
    * Define mechanism for "exporting" and "importing"
    * (not every file has to have a wrapping IIFE)
* CommonJS (CJS)
    * `module.exports =`
    * `= require()`
        * relative path from current file
        * use standard NIX `./`, `../../`, etc.
    * module export is cached
    * resolving modules
        * `path` notation
        * static name
            * built-in node module
            * local `node_modules`
            * global `node_modules`

    * Export patterns
        * Function
        * Higher Order Function
        * Object with methods
        * Class
    * Avoid props on `module.exports`

#### ES6 Modules

We'll be using CJS for first couple of weeks. Then switch to ES6 Modules

### Build System

* Why?
    * Developer Sanity
    * Consistency of Process
* Project Organization
    * `./lib` or `./src` folder

### `npm`
* Package Management
    * installing and updating locally available resources
* Install and track third party module dependencies 
_using `npm` and the project `package.json` file_.
    * dependencies
        * Needed at production runtime
        * `--save` or `-S`
    * dev-dependencies
        * Needed at development time and not during production runtime
        * `--save-dev` or `-D`
* Copy and run other projects _using cloned git repos and `npm i`_
* npm scripts
    * `npm run <script>`
    * `npm test` and `npm start`
    * `pre` and `post`
    * `--`
    * common scripts:
        * linting code _using eslint_ 
        * running unit tests
            * once
            * when a `.js` file changes
        * starting server
        * build the project

#### Publish on npm

1. Make a npm account (I like to use same username as github)
    * After you create run:
    ```
    > npm adduser
    ```
    and follow prompts
1. Make sure your package.json:
    1. Proper name (kebob-case)
    2. A semver version
    3. `main` property to entry point (what should be the module used
    when somebody requires your package)

### Function Definition vs Execution

* In JavaScript, function are (literally) objects and can be passed around and shared.
* A function as an object can be thought of as a function definition, waiting to be called (invoked)
* Closure variables are stored as part of the definition (see Chrome)
* Adding parenthesis: `myFunction()`
    * "calls" or "invokes" or "executes" the function with the supplied arguments.
    * The place (in the code) where a function is called is called the "call site"
    * Code inside the function is only run when the function is called.
* Functions are sometimes called methods, particularly when called as a property of an object:
   ```js
   someObj.greet();
   ```

* Types of functions:
    * function declaration
    * function expression
        * anonymous
        * named
    * arrow function expression

