Objects, Destructuring, `class`es, `this`,
===

## Topics

* Object literal shorthand
* Destructuring
* Destructuring Assignment (Rest/Spread)
* Default parameter values

Try it out: https://babeljs.io/repl/ to "see" es5 equivalent

## Objects

* Literal
	* function shorthand:
    ```
    // instead of this:
    method: function() {
        
    }

    // write this:

    method() {
        
    }
    ```

	* getters/setters
	> add `get` and/or `set` in front of method name, and it becomes a
	> property getter or setter:

        ```
        get name() {}
        
        // recall that above is same as:
        // get name: function() {}`
        ```

	* property/variable shorthand
	> If you are assigning a variable to a property of an object literal,
	> and the property should have the same name as the variable, you can > omit the `: value` part:
    ```
    const first = 'jane';
    const last = 'smith';
    const person = { first, last }; 
    // instead of { first: first, last: last }
    ```

* Destructuring
	* Assignment to variable or argument
	* Property: 
        ```
        const { first, last } = person;
        ```
	* Array Index: 
        ```
        const [x, y, z] = [1, 2, 3];
        ```
	* **Always** requires parens `()` in arrow function `=>`:
        ```
        ({ body }) => {}
        ```
    * Will throw if object being destructured does not exist

* Default Parameter Values
	* Add a default using `=`:
        ```
        (min = 0) => {}
    * Requires `(``)` with arrow functions
    * Object with props default:
        ```
        function doThing(arg1, { option1: true, option2: 'foo' } = {}) {

        }
        ```
    In other words, destructuring continues after default assignment

* Destructuring **assignment** (Rest/Spread operator `...`)
    * Arrays
        ```
        function do(a, b, ...rest) {}
        ```
    * Objects (stage 3)
        ```
        const obj2 = {
           foo: 'FOO',
           bar: 'BAR',
           ...obj1 
        }
        ```

* Dynamic properties
    * Use `[`_`expression_value`_`]` to dynamically specify a property to `get` or `set`:
        ```
        const obj = { bar: 40 };
        const prop1 = 'bar';
        const prop2 = 'foo';
        console.log(obj[prop1]);
        // 40
        obj[prop2] = 12;
        console.log(obj);
        // { bar: 40, foo: 12 }
        ```
    * This works with object literals too!
        ```
        const prop = 'foo';
        const value = 55;
        const obj = {
            [prop]: value
        };
        console.log(obj);
        // { foo: 55 }