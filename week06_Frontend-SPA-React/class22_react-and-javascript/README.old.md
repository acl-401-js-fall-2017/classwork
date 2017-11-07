React Components and JavaScript classes
===

## Questions, Feedback, Misc
* Reminder: fork lab assignments
* Review project setup for `create-react-app`
* Review overall page construction happening in CRA
* Need to add units to `style` values
* Don't forget to use new `.eslintrc`
* Refactoring relentlessly
* ?

## Today's Learning Objectives

* Continue to use React `props` and `state`
* Handle lists of data in React
* `componentDidMount` life cycle event
* Integrate `fetch` for ajax

## Agenda

### Just JavaScript

* Review react rendering
* render is the projection of the view you want
to declare for any given data

### Components

#### Extend `Component`

This is all you know so far, but why?
* Need state
* Need life cycle methods

#### `class`
* Favor composition over inheritance
    * `has-a` === composition
    * `is-a` === inheritance
* **BUT** useful in API's as construct to build on (React `Component`)

#### `this`
* Implicit based on call-site
* Functions
	* Explicit via `bind` and `call` and `apply`
	* Contextless `=>` functions
* EXERCISE: try three methods
    * inline arrow function
    * call `bind` in constructor
    * static prop

#### Lists

* Using `.map()` to handle lists of things
* Using `key` to map between data and DOM
    * Why?
        * Help reconciliation
        * Component mount/unmount broader implications
    * What to use for key?
        * Use `id`
        * Use value if not objects
        * Use a unique value from the object
        * `index` is last resort for things that don't reorder

#### Demo and Exercise

* Demo: pirates
* Exercise: pets
    * STEP 1
        * `App` will own the data
        * `PetList` - has a `pets` prop
        * `Pet` - has a `pet` prop

```js
const pets = [
    { type: 'cat', name: 'Felix' },
    { type: 'snake', name: 'Nagini' },
    { type: 'dog', name: 'Lassie' },
    { type: 'cat', name: 'Garfield' },
    { type: 'bird', name: 'Tweety' },
    { type: 'bird', name: 'Polly' },
    { type: 'cat', name: 'Heathcliff' }
]
```




