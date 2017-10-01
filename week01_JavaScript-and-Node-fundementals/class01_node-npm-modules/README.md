# Class 01: Basic Node, CJS Modules, and Testing

Use NodeJS to develop JavaScript outside of the browser. 

## Core Pieces of our Dev Environment

### NodeJS

* Version 8 (everything but ESModule!)
* Check via `node --version`
* Some people like to use `nvm` to handle multiple versions

### npm (Node Package Manager)

* Tooling for us to manage our build environment
* Repository for open source packages
* `npm init`
* `npm install eslint --save-dev`
* `npm install mocha --save-dev`
* add script: `"test": "mocha"`

### Testing

Test-First (TDD) Testing in calling out responsibilities and expectations for the code you _are going to write_.

Code meant to be consumed by other code (modules and libraries)
is most straight-forward to test.
    
* mocha
    * Test-Runner
    * Used via CLI
    * test: `it`
    * suite: `describe`
* assert
    * `const assert = require('assert');`
    * Assertion Library
        * Fail? throw an error
        * Pass? continue on...

### Config

[Essentials listed in lab](https://github.com/cfpdx-401JS-summer-2017/submit-401-way/blob/master/LAB.md)

## Improving Code

* (Literal) Code Cleanliness (indentation, consistent style, `const`/`let`, no scrappy bits o' commented out stuff)
* Whitespace, phrasing
* [Naming](http://arlobelshee.com/good-naming-is-a-process-not-a-single-step/)
* Modularity - SRP "One Concern"
* Duplication in code or concept

Use commits and branches. Key thing is to give yourself an **UNDO**. Some improvement experiments fail and we roll back.

Keep asking questions about what this means!

## DEMO

Greeting app

What are responsibilities?

* Has core "library"
* CLI app
* Web?
* Package?

## Submit 401 Lab

[Exercise](https://github.com/cfpdx-401JS-summer-2017/submit-401-way/)

## `forEach` demo

[Setup for today's lab](https://github.com/cfpdx-401JS-summer-2017/array-methods)