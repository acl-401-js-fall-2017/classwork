# Class 14 Model Relationships

## Questions and Issues?

* ?

## Responsible for Work Product
    * Clean Code
        * Why? 
            * Prioritize "minimizing cognitive load" for self and team
            * An aspect of an experienced developer that does not 
            require experience
        * What?
            * Remove dead/unused code, comments and console.logs
                * source control, branches
            * Normalize whitespace, check for visual flow
    * Pass Travis
        * Why?
            * Don't Break the Build
        * What?
            * In real-world work environments, PR's with failing tests 
            won't be merged 
* ?

## Today's Learning Objectives

* Create related data models based on 
data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* (Time allowing: Consolidate business logic in models using static and 
instance mongoose model methods)

## Agenda

### Model Part

* Data Relationships
	* one to one
	* one to many
		* In document
        * Separate document
	* many to many
    * EXERCISE: Whiteboard Data Modelling

* Related Models
	* ObjectId
	* Prefer children referencing parent ids
	* ObjectId ref’s
    * EXERCISE: Create Models
	* Sub Documents
		* logical Mongoose constructs
		* don't use unless you really need it
			* Shared sub-document part
			* Break apart very large document
        * Consider shared JS instead
    * Discriminators
* Using mongoose `.select` and `.populate`
* Restrict number of results with `.limit()` and `.skip()`
* Mongoose document objects
	* Wrapper around data
	* performance considerations
	* use `.lean()`
    * EXERCISE: Use `select`, `lean` and `populate`
* Augmenting Models with methods
	* static
	* instance