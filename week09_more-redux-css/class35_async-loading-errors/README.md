Loading, Errors and Async
===

## Questions and Issues
* ?

## Agenda

Dealing with details like loading and proper error handling is often
omitted from how-to and introductory articles.

Let's dive into details!

## App

Three choices:
1. App wide handling of loading and errors
1. Per feature loading and error handling
1. Hybrid of #1, and specialize with #2 when needed

Given your time frame on labs and projects, go for #1, unless compelling reason

## Loading

1. Track `loading` state in `store`
1. Set true before beginning async activity
1. Set false on error or resolve

DEMO/EXERCISE!

## Async Errors

1. Network error/no connection
  * Immediate or Async?
  * DEMO/EXERCISE
1. Server availability error
  * CRA server running, but forgot to hit proxy
  * May not be `application/json`!
  * DEMO/EXERCISE
1. Validation/Expected errors
  * For forms, get result before dismissing or clearing
  * (Need to account for validation errors being arrays)
  * DEMO/EXERCISE
1. Unexpected Errors
  * No immediate remedy, but otherwise the same
  * DEMO/EXERCISE

## Exploration

### Presentation

Can we create a generic error component along with [react-toastr](https://github.com/tomchentw/react-toastr)

## Testing Action Creators

Approaches for "mocking" API:
* Higher Order Function
* Jest Mock
* API injection using [redux-thunk](https://github.com/gaearon/redux-thunk/blob/master/src/index.js)



