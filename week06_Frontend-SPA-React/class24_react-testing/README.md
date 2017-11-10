React Testing, Misc
===

## Questions/Issues
* 1-on-1's next week (will post link)
* ?

## Agenda

### State/Props Patterns

#### Review
* Passing functions as actions
	* "events up"
* Rules of state
	* Sibling components that share state? Must live in common ancestor
	* Push state a far down as possible

#### State derived from props
* Component
	* receives props
	* uses prop value to get state (`fetch`)
	* sets own state with response
* (Master/Detail Pattern with id)
* But needs to use `componentWillReceiveProps`...

#### Component re-rendering and prop changes

* Component is not re-rendered just because prop/state changes

### Simple Uncontrolled Form

* Use `onSubmit` with `<form>` for "emitting" values

### Pure Functions

* `props => { return <div></div>; }`

### Testing and Correctness

#### Prop Types
* Props
 	* Types
	* Defaults

#### Jest Testing

* Use snapshot testing to test component outputs
	* Using `react-test-renderer`
	* Using `enzyme`
* Testing state changes
	* Use component API via `.instance()`
	* Also have `.setState()` and `.setProps()`
	* Trigger callbacks by calling function

## Optional based on time:

### `setState` revisited

* `setState` with
	* Updater
	* Callback