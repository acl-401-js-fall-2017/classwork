Review, Forms, Data Immutability
===

## Questions, Feedback, Misc
* Backend Quiz makeup
	* Will publish on Friday
	* Timed, but do on own time (commit history)

## Review Adventure Games
* Each group (< 5 minutes)
    1. Show how to play
    2. Show some interesting code (and explain why)

## Today's Learning Objectives

* Know how to edit lists in React
	* Using immutable data
* Begin to use key component lifecycle methods
* Know how to use React "controlled" form inputs

## Agenda

### Why immutable data?

#### Review Component Life-Cycle

* Components are reused
	* Re-introduce `key`
		* Component reused by default
	* [Component Lifecycle Methods](https://facebook.github.io/react/docs/react-component.html)
		* `constructor`
		* `componentWillMount`
            * Nobody uses this `¯_(ツ)_/¯`
        * `componentDidMount`
			* [Fetching Data](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/)
		* `componentWillReceiveProps`
			* Need to use when updating component that does not re-render
		* `shouldComponentUpdate`
			* Prevents unnecessary updates
		* `componentWillUpdate`* and `componentDidUpdate`*
            * Nobody really uses these `¯_(ツ)_/¯`
		* `render` +1
    * Also check out [this blog post](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

#### So What Does This Have to Do With Immutability

* Architecture Diagram for state vs component updates

### Applying Immutability

#### Editing Lists and Objects

* Core Operations
    * Add
    * Remove
    * Edit
* Action based approach
* Remove state transitions (change) into functions instead of in components


Demo: TODO, show then code along

### Reference: Destructure
* Assignment to variable or argument
* Property: `const { first, last } = person;`
* Array Index: `const [x, y, z] = [1, 2, 3];
* Always requires parens `()` in arrow function `=>`
* REST operator
    * Arrays
    > ```
    > function do(a, b, ...rest) {}
    > ```
    * Objects (not "in" spec yet)
    > ```
    > const obj2 = {
    >    foo: 'FOO',
    >    bar: 'BAR',
    >    ...obj1 
    > }
    > ```

### Bonus table of Form events

Element	| Value property | Change callback | New value in the callback
---|---|---|---
`<input type="text" />`|`value="string"`|`onChange`|`event.target.value`
`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<textarea />`|`value="string"`|`onChange`|`event.target.value`
`<select />`|`value="option value"`|`onChange`|`event.target.value`
