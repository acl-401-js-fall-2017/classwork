Class 09 MongoDB
===

## Questions and Issues?
* ?

## Upcoming
* Sign-ups:
    * Will be available for 1-on-1's
    * Lightning Talks for second half

## Today's Learning Objectives
* Install and run a local mongodb instance.
* Basic mongodb commands
	* Reading (Finding)
	* Writing (Insert and Update)
    * Use `$` commands
* Use mongodb driver in node.js to expose http rest api

## Agenda

### Distributed Systems
* 3-tier
	* Database
	* Server
	* Client

### MongoDB

* Different tools:
	* mongod
	* mongo shell
	* Robo 3T (RoboMongo)
	* `mongodb` node driver
	* `mongoose` ORM library
* RDBMS vs NoSQL
* Schema vs Schemaless
* Working with data
    * JavaScript FTW!
	* `find` (read)
    * `ObjectId()`
	* `insert`, `update`, `upsert` (write)
		* Use of commands via `$cmd`
        ( `$set`, `$push` and `$addToSet`, `$pull`)
	* `remove` (delete)
	* `aggregate`
	* ...

### Integrating with NodeJS and Http Server

* Setup for both:
    * server.js
    * E2E tests