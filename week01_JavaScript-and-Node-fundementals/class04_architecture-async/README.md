# Class 04 Node Architecture and Asynchronous Programming

## Questions and Feedback
* buffer.slice() === same buffer memory

## Learning Objectives
* Have a working model of asynchronous programming in NodeJS
* Write and utilize asychronous functions effectively



## Agenda

### Node.JS Architecture

* What is it?
* Node Event Loop
    * Basic node architecture 101
    * v8 + event-loop + os-lib
    * Thread - actual "thread of execuation"
    * Event loop explained
    * JavaScript single threaded event model
* Demo: `event-loop.js`

### Passing functions in javascript

* How do we
	* return values?
	* Propagate errors?
* Node callback pattern `callback(err, result)`
* Some hardfast rules:
    1. You can't create asynchronicity with just js
    2. If your building functionality ontop of asychronous API's, 
    then your library must be asynchronous!
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