# Class 02 `npm`, Function Definition versus Execution

## Questions and Feedback
* ?

## Learning Objectives

* Process and OS, distributed systems
* Install Dependencies for a project
* Setup and run a build scripts 
* Use different patterns for exporting from modules:
    * value or reference
    * object literal with props
    * factory function
    * revealing module
    * class
* Include pre and post `npm` scripts
 
## OS Process

### Questions

* What is a(n)... 

  > ...app?
   
  > ...program?

  > ...process?

* What were you calling when you made an AJAX "call"?
* What is a server?

### Key Points

* A process is "unit of execution" controlled by the Operating System (OS)
    * CPU time
    * Memory space
    * What else do we need from the OS?
        * File Storage
        * Networking
        * (Access to Devices like keyboard and mouse and screen)
* Distributed Systems
    * The total set of processes involved in the overall "system"
    * Client, Server [, Database]
* Notes:
    * Some systems are "Headless" - pure logic and execution, no UI
    * npm packages add code but run in our process

### Variables

* Variables are for data we want to use again (share)
* (Functions are shared behavior)


#### DEMO

Mystery of the looped closure

#### Primitive Values vs References

* Primitive values stored in variables **are** the value of the variable
* Object-based values are stored as **references** in the variable table
* (strings are weird, treat as primitive values)

#### Assignment

* Variables (and arguments) are assigned a value via `=`
* `const` will not be reassigned
* `let` can be reassigned
* Use `const` be default
* Use `let` to communicate the variable **will be** reassigned

#### DEMO

* Pass primitive value to function
* Pass object reference to function
* Closure is not 

#### Closures

* Solve the mystery of the looped closure
* Closures point to variable table, not value!

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

We'll be using CJS for first couple of weeks. Then switch to ES6 Modules for second half of course

### Build System

* Why?
    * Developer Sanity
    * Consistency of Process
* Project Organization
    * `./lib` - backend
    * `./src` - frontend

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

### Mocha setup

* Mocha
    * `only` and `skip`
    * `beforeEach` and friends