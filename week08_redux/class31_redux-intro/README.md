Class 31: Redux State Management
===

## Questions/Feedback
* ?

## Redux

### Why?

* Avoid bugs in complex apps
* State maintenance enforced as separate layer than view
* Simplified data model (single store)
* Enforce "Smart" vs "Dumb" Components 
* Redux goodies: time travel, undo, etc.

### Details

* Redux is simple, moving parts are complex
* Not part of react, just an app state management library

### Flow

<img alt="flow" src="https://julienrenaux.fr/wp-content/uploads/2016/05/redux_diagram.png" width="200">

### Using with React

[`react-redux` - Redux for React](http://redux.js.org/docs/basics/UsageWithReact.html)

### Three Principals

1. Single source of truth
    > The state of your whole application is stored in an object tree within a single store.
1. State is read-only
    > The only way to change the state is to emit an action, an object describing what happened.
1. Changes are made with pure functions
    > To specify how the state tree is transformed by actions, you write pure reducers.

### Install

```
> npm i redux react-redux -S
```

### Store

1. Combination of state and reducers (which take actions)
1. State is immutable

#### Create the Store

* Single store for the app
* Usually in `index.js`, wrap `<App/>`
* Create using:
```js
import { createStore } from 'redux';

const store = createStore(reducer);
```

### Reducers

Perform discrete changes to store (by creating a new state) based on an action. 

Best practice in react/redux is immutability: Create a new state object.

```js
function reducer(state, action) {
    // choose based on action
    switch(action.type) {

    }
    // best practice (and for multiple reducers) return state
    return state // or use default on switch
}
```

But what is a `reducer`???
* Reducer takes `state` and `action`
* Returns new state ("reduces" state based on action)

### Action Types
* Use `const ACTION_NAME` because actions are used in both:
    * reducer (to know "what" action)
    * actions (returned as `type`)

### Actions

For now, actions will be functions that return the action
with the given params.

Use `type`, other props are up to you, but "standard" is to use `payload`
    
### "Connect" to your component

Using `react-redux`, "connect" to component (via implicit container)

* `mapStateToProps` - for each new state (_from the store_) what should the props be?
* `dispatch` - function to send ("dispatches") "action" requests
    * Usage: `dispatch(action(args))`
    * Usage Simple: `bindActionCreators`
    * Usage Simplest: Pass Object literal with keys of action creator functions

## Summary

1. `store` - takes `reducer`
1. `reducer`(s) - takes actions with `type` and `payload`
1. `constants` - "type" identifier for each `action`
1. `action creators`(s) - take (optional) parameter arguments and returns
action with `type` and `payload`
1. `connect` - a utility for interfacing `redux` store with `react` components