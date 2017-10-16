# Class 06 EventEmitters and Streams

## Questions and Issues?

* No Quiz today :)
	* But maybe Thursday? ;)
* Welcome to Express!
	* Great work thus far
	* "Start-over" / "Clean Slate"
* Feedback
	* Videos FTW
	* Class time
		* More active
		* Incorporate More doing
		* Larger break in middle (15-20 minute)
* ?

### Mongo on Travis CI

```yaml
language: node_js
node_js:
  - "8"

sudo: false
services:
- mongodb
addons:
  apt:
    sources:
    - mongodb-3.4-precise
    packages:
    - mongodb-org-server
```

## Today's Learning Objectives

* “Starting” an express app, 
	* just _httpServer_, ie .listen() vs 
	* http.createServer(app)
* Setup app routing _with ExpressJS_ using method and path matching.
* Use `:id` and `req.params` to capture dynamic path parts
* Use `req.query` to read query parameters
* Use `res.send()` and/or `res.json` to send response
* Handle correct order of routes
* `app.use()`
	* [node: Full coverage of middleware on Wednesday]
	* Serve static assets using `express.static`
	* Use npm package `body-parser`

## Agenda

### Trouble Shooting
* Have Docs open
* Read the error
	* mocha you need look two places:
		* failures
		* scroll up
	* read the call stack
		* look for your file
		* CMD+click to go there
	* Paste the exact error into google
* Empirically trying > contemplating
* Debug FTW! [Dan Abramov "what have you learned at facebook after two years?"](https://hashnode.com/post/what-have-you-learned-after-working-at-facebook-for-almost-two-years-have-you-grown-as-a-developer-and-what-are-some-of-the-key-takeaways-cj7q3gkjx019xkhwujchsrtho)

### ExpressJS

* routing
	* How express solves method/path:
		* method based functions (`app.get`)
		* that take a path
	* `req.query` 
		* query params as key/value pairs
		* always safe to access - empty `{}`
	* `req.params`
		* dynamic path portions (great for id's)
		* parameters (route and query)
	* `res.send()` and `res.json()`
		* sets headers
	* EXERCISE: Echo server
		* Review [HTTP URL](http://bl.ocks.org/abernier/3070589)
		* Using `/:id` is a way to "capture" (define) parameters, not provide them
* order matters
* `app.use()`
	* static
		* `express.static` (included with express)
		* files
		* `res.sendFile()`
	* `bodyParser.json()` (`npm i body-parser`)
	* `express.Router()`
* project structure
	* don't use one huge app.js file!
	* Food for thought: express generator