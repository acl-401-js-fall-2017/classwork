# Class 06 Http and Rest

## Questions, Feedback
* ?
	
## Today's Learning Objectives

1. Create HTTP server using Node.js
2. Differentiate HTTP requests based on:
	* path (`url`)
	* verb (`http`) 
	* Other request factors (`query`, `content-type`)
3. E2E servers using Mocha (and chai-http for HTTP)
4. Time allowed: Promises

## New Tools PART 1

* [Postman](https://www.getpostman.com/)
* `nodemon`

### HTTP

An envelop with a letter (or a postcard)

* [ Http Protocol explained ](http://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)
* Path (nouns):
	* [parts of url](http://bl.ocks.org/abernier/3070589)
	* protocol
	* hostname ( host + port )
	* resource path
	* query
* Method (verbs): 
	* GET, POST, PUT, DELETE, PATCH
	* plus more ...
* REST
	* [understanding REST](https://spring.io/understanding/REST)
	* Resources (nouns!)
	* Part “art”
* Headers
	* Status codes
	* Entity Description
		* Content type, etc.
	* Authorization tokens

### REST use cases:
* `GET /pandas` = return the list of pandas (Read)
* `GET /pandas/:id` (example: `/pandas/123`) = return specific todo,
often used for a detail view (Read)
* `POST /pandas` = create a new todo (and return object with id) (Create)
* `PUT /pandas/:id` = create or replace todo with this specific id (Update)
* `PATCH /pandas/:id` = update the supplied properties on the todo with specific id (Partial Update)
* `DELETE /pandas/:id` = delete the specified todo (Delete)

### Query Parameters

Represent refinements or modifications to how the request should be processed:
* `?limit=100&page=3` - return results 201-300 
* `?format=xml` - control results format (might see on third party API)
* `?access_token=123edfdo3o3o23` - provide a token for authentication
* `?name=Smith` - provide query parameter directly
* `?query={ name: 'Smith' }` - provide query parameters that filter the results

Check out built-in module `const url = require('url');` Which includes query methods, but you can also use built-in `const qs = require('querystring');` for helpful methods.

HTTP status codes:
* `200` OK
* `300` (about the resource, hasn't changed, redirect here)
* `400` user did something wrong
* `500` something went wrong on our server

## New Tools PART 2

* [ChaiJS](http://chaijs.com/)
* [chai-http](http://chaijs.com/plugins/chai-http/)

### E2E Testing Servers

* Using "real" clients for end-to-end (E2E) Testing
* Focus on golden path, defer to unit tests for more refined functionality 
* use setup and teardown
* Node Clients
	* HTTP (node built-in module)
	* Request Libraries (request, superagent, etc)
	* Chai HTTP (SuperAgent)
* Postman