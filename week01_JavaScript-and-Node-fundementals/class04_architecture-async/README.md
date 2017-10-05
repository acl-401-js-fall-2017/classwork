# Class 04 Node Architecture and Asynchronous Programming

## Questions and Feedback
* ?

## Learning Objectives
* Have a working model of asynchronous programming in NodeJS
* Write and utilize asynchronous callback functions effectively:
	* When calling node asynchronous APIs
	* When exposing a function
* Utilize the filesystem

## Agenda

### Node.JS Architecture

* What is it?
* Node Event Loop
    * Basic node architecture 101
    * v8 + event-loop + os-lib
    * Thread - actual "thread of execution"
    * Event loop explained
    * JavaScript single threaded event model
* Demo: `event-loop.js`

### Passing functions in javascript

* How do we
	* return values?
	* Propagate errors?
* Node callback pattern `callback(err, result)`
* Some hard rules:
    1. You can't create asynchronicity with just js
    1. If your building functionality on top of asynchronous APIs, 
    then your library must be asynchronous!
    1. If a function or method uses asynchronous activity to complete its work, 
    then that function must have an asynchronous interface (takes a callback)!
* [Function passing patterns in JavaScript](https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/async-js-patterns.md)
* Demo
	* Mocha `done`
		* test parameter
		* Tests function.length
		* if > 0, test is async
		* calling done with any non-null argument is failure (matches node callback signature)
	* and node `fs` module
	* Demo: Test drive "copy dir"
    * Mocha `before` and friends
    * Demo: Write `index.txt`
* Orchestration?
	* Sequential
	* Parallel
		* Async order is "completion" based