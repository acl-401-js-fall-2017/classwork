Mongo Aggregation
===

## Misc
* DonutJS tonight - setup starts at ~5:30pm

## Questions and Issues
* ?

## Learning Objectives

1. Learn to use `mongoimport` and `mongoexport`
1. Create aggregation pipelines to understand data in mongodb

## Aggregation
* [To the docs!](https://docs.mongodb.com/manual/aggregation/)
* [Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
	* Happens on the server
	* Exposed on each model as `.aggregate`, but is a pass-thru (no special mongoose logic)
	* Process
		1. Have data to analyze. [Get some data](https://docs.mongodb.com/getting-started/shell/import-data/)
            * `mongoimport` 
                * is list of objects (not array!)
		2. Work out commands in RoboMongo
		3. Copy to Route
	* [Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/#aggregation-pipeline-operator-reference)
	* [Walk-thru for restaurants](https://docs.mongodb.com/getting-started/shell/aggregation/)