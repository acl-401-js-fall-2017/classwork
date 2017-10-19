# Class 13 Express Middleware

## Questions and Issues?

* ?

## Today's Learning Objectives

* Correctly order app routes and multi-function routes by knowing how middleware "flows"
* Understand what third-party middlewares like `body-parser` are actually doing and consume third-party middleware via npm modules like `morgan`
* Modularize resource routes using `express.Router()`
* Create middleware chains using `app.use` and `app.METHOD`
* Create custom, tested middleware using express middleware functions 
* Correctly handle middleware errors and 404 errors by setting up 
express error handling middleware functions 
* Use the `next()` function to selectively apply common app logic like authentication and authorization
* Introduce custom properties on the request object

## Agenda

### Express Middleware

#### Middlewhat?

* Ambiguous based on broad history
* Larger architectural meaning - middle between API and db
* For our purposes, think about the middle between request and response
* Basic "handler": `( req, res[, next] ) => { ... }`
* Middleware is flow to find one or more handlers

#### All starts with `app.use()`

* `app.METHOD` "short cuts"
* `next()` - let another router handle response
	* `( res, req[, next] ) => { ... }`
* order matters
* EXERCISE: write two app.use()


* Revisit `express.static()` 
    * What does it do if `ENOENT`?
* DEMO
    * `morgan`
    * roll are own
* EXERCISE: add a longer
* DEMO
    * tdd logger
    * tdd Super-sekrit password header
* EXERCISE: TDD Authentication middleware

#### Functional middlewares

* Okay for middleware not to handle response, just do additional work
* Sometimes this is what people mean by middleware
* body-parser, authentication, authorization

#### Another axis

* `app.use( fn1, fn2, fn3 )`
* `next('route')`

#### Another branch...

* on to [`express.Router`](https://github.com/martypdx/workshop-express-middleware/blob/master/router.md)...

### [Express middleware and `next()`](https://github.com/martypdx/workshop-express-middleware/blob/master/next.md)

#### Middleware error handling

Types of errors:
* Expected
	* Mongoose Validation errors
	* 404 (not found)
	* 400 bad request
	* 401 not authentication
* Unexpected (500)

Sources:
* Promise rejection
* thrown

Mob Program:
* Error Handler

## Modularized express project
* `lib`
	* `models`
	* `routes`
	* `app.js`
	* [util folders]
	* [other top-level important .js]