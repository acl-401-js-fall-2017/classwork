Redux Review and Redux Thunk
===

## Misc
* Make up Backend Quiz:
    1. Email or DM me on Ryver letting me know _when_ (day/time) you plan
    on taking the quiz
    1. I will email you link at designated time
* Residency Opportunities
* Will go over Devsigner opportunity this week

## Agenda

1. Review redux 
1. Answer any questions you are having
1. Introduce redux middleware

## Redux Review

### Three Principals

1. Single source of truth
    > The state of your whole application is stored in an object tree within a single store.
1. State is read-only
    > The only way to change the state is to emit an action, an object describing what happened.
1. Changes are made with pure functions
    > To specify how the state tree is transformed by actions, you write pure reducers.

### Summary

1. `store` - takes `reducer`
    * Use `combineReducers` to create a single `rootReducer`
1. `reducer`(s) - takes actions with `type` and `payload`
    * Can be split into more targeted reducers (that are then combined)
1. `constants` - "type" identifier for each `action`
    * Can live in `reducer.js` file _or_ in `constants.js`
    * You may create other constants for app domain logic
1. action creators - functions that can take (optional) parameter arguments and returns the created action with
    * `type` property that is an action `constant`,
    * and (optional) `payload` of whatever data is required 
    for the store to complete the action
1. `connect` - a utility for interfacing `redux` store with `react` components
    * `mapStateToProps` - Function that will receive store state and returns 
    what props should be injected into component based on the state
    * `mapDispatchToProps` - Function that will receive the dispatch function and returns what action creating functions should be injected
    as props into the component
        1. Hand-roll your own functions, _or_
        1. Use `bindActionCreators` to wrap into dispatch functions, _or_
        1. Pass an object literal and `bindActionCreators` will be called on your
        behalf
    * `mergeProps` - Optional function that takes `stateProps` (from #1), `dispatchProps` (from #2), and `ownProps` (directly passed to the component
    by its parent). Return the actual props that will be injected into the component.

## Redux Middleware

Use `applyMiddleware` to add middleware to your dispatch

* middleware can intercept or modify each action
* you often will use existing middle via `npm i <middleware>`
* basic format:
    ```js
    const myMiddleware = store => next => action => {
    let result = next(action);
    return result
    }
    ```
* simple `logger` example
* [`thunk` middleware](https://github.com/gaearon/redux-thunk) is the answer for async!
    * Let's review the code!
    * Allows us to specify a function `dispatch => {}` as an action
    * That function gets called with dispatch and then we can do 
    multiple calls at multiple times
    * Full signature is `(dispatch, getState) => {}`