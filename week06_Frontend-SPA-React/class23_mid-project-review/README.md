


## Common Problems

* variable scope
    * Most narrow scope possible
    * Using outer/broad scope to pass data is a no-go
        * function input/output
        * async passing (callback, promise, await)
    * Using immediate outer scope is one promise hack to get around issue
* Use schema static methods
* Using data types in variables names
* Extract and parameterize common functions
* Don't put whitespace inside of `.then( `
* Prefer domain abstractions, `got` and `found` are substitutes in tests when they make sense, not reason to avoid naming. Especially when obscures singluar vs plural
* Use model find and save when appropriate
* Use separate `beforeEach` for each task